/**
 * Put the page's words, and its own head, into dist/index.html.
 *
 * Vite ships a client-rendered app, so without this the document a crawler
 * receives is an empty <div id="root"> — the headline, the whole manifesto and
 * the company's registration line are assembled by JavaScript a crawler may
 * never run. This renders the same tree with react-dom/server at build time
 * (no browser, so it behaves identically on Cloudflare's builder) and fails
 * the build loudly if anything it expects is missing, rather than shipping a
 * husk that looks fine locally.
 *
 * Every head value comes from src/content/site.ts, so a fact is written once.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SSR_ENTRY = path.resolve('dist-ssr/entry-server.js');
const ROOT = '<div id="root"></div>';

const fail = (message) => {
  console.error(`prerender: ${message}`);
  process.exit(1);
};

if (!fs.existsSync(SSR_ENTRY)) fail(`${SSR_ENTRY} is missing — run the --ssr build first`);

const { render, site, pages, jsonLd } = await import(pathToFileURL(SSR_ENTRY).href);

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replace exactly one match, or stop the build: a head with a stale value is worse than a failed deploy. */
const swap = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) fail(`could not find ${label} in ${DIST}/index.html`);
  return html.replace(pattern, replacement);
};

const image = `${site.url}${site.ogImage}`;
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!template.includes(ROOT)) fail(`could not find ${ROOT}`);

for (const [route, meta] of Object.entries(pages)) {
  const url = `${site.url}${route}`;
  const title = escape(meta.title);
  const description = escape(meta.description);
  let html = template;

  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, 'the title');
  html = swap(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${description}$2`, 'the description');
  html = swap(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`, 'the canonical link');
  html = swap(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`, 'og:url');
  html = swap(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${title}$2`, 'og:title');
  html = swap(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${description}$2`, 'og:description');
  html = swap(html, /(<meta\s+property="og:image"\s+content=")[^"]*(")/, `$1${image}$2`, 'og:image');
  html = swap(html, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${title}$2`, 'twitter:title');
  html = swap(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${description}$2`, 'twitter:description');
  html = swap(html, /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/, `$1${image}$2`, 'twitter:image');
  html = swap(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
    'the ld+json block',
  );

  const body = render(route);
  html = html.replace(ROOT, `<div id="root">${body}</div>`);
  const output = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, html);

  const words = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  console.log(`prerender: ${route} — ${words} words in the HTML`);
}
