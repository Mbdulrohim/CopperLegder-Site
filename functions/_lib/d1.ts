/**
 * The slice of D1's shape this function uses, written out rather than imported
 * from @cloudflare/workers-types — same reasoning as on suite.ng: pulling the
 * worker types into a site that builds with the browser lib changes what
 * `fetch` and `Response` mean everywhere else.
 */
export interface D1Statement {
  bind: (...values: unknown[]) => D1Statement;
  run: () => Promise<unknown>;
}

export interface D1Binding {
  prepare: (sql: string) => D1Statement;
}
