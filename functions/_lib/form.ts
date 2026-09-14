/**
 * Reading a form somebody on the internet submitted.
 *
 * The same rules suite.ng's waitlist applies, copied rather than shared because
 * the two sites are separate repositories and separate Pages projects. They
 * write into the same table, so they have to agree on what a valid email or
 * phone number is — if one of them changes, change the other.
 */
export type Input = Record<string, unknown>;

export const json = (body: unknown, status = 200): Response => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
});

/**
 * A trimmed field: `null` when absent or empty, `'invalid'` when it is not a
 * string or is longer than `max`. "Not supplied" and "supplied as nonsense"
 * deserve different answers.
 */
export const clean = (input: Input, key: string, max: number): string | null | 'invalid' => {
  const value = input[key];
  if (value === undefined || value === null) return null;
  if (typeof value !== 'string') return 'invalid';
  const trimmed = value.trim();
  if (trimmed.length > max) return 'invalid';
  return trimmed === '' ? null : trimmed;
};

export const validEmail = (email: string): boolean => {
  if (email.length > 254 || /\.\.|[\s<>(),;:\\"\[\]]/.test(email)) return false;
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const [local = '', domain = ''] = parts;
  if (local.length < 1 || local.length > 64 || domain.length > 189
    || local.startsWith('.') || local.endsWith('.')) return false;
  return /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(local)
    && /^(?=.{3,189}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i.test(domain);
};

export const validPhone = (phone: string): boolean => /^[+()0-9 .-]{7,32}$/.test(phone);

/** Refuses anything that is not a same-origin browser submission. */
export const sameOriginOnly = (request: Request): Response | null => {
  const url = new URL(request.url);
  const origin = request.headers.get('origin');
  const fetchSite = request.headers.get('sec-fetch-site');
  if ((origin !== null && origin !== url.origin)
    || (fetchSite !== null && fetchSite !== 'same-origin' && fetchSite !== 'none')) {
    return json({ error: 'Request not allowed.' }, 403);
  }
  return null;
};

/** Reads a small JSON object body, or the response to send instead. */
export const readBody = async (
  request: Request,
  limit = 4096,
): Promise<{ input: Input } | { response: Response }> => {
  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (!Number.isFinite(contentLength) || contentLength > limit) {
    return { response: json({ error: 'That message is too long.' }, 413) };
  }
  try {
    const raw = await request.text();
    if (raw.length > limit) return { response: json({ error: 'That message is too long.' }, 413) };
    const parsed = JSON.parse(raw) as unknown;
    if (parsed === null || Array.isArray(parsed) || typeof parsed !== 'object') throw new Error();
    return { input: parsed as Input };
  } catch {
    return { response: json({ error: 'Send valid form details.' }, 400) };
  }
};
