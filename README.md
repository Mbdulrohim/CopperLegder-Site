# Copper Ledger — copperledgerhq.com

The website of **Copper Ledger LTD** (RC 9819163), a software company in Lagos.
One page: what the company makes — Suite — and builds for other businesses, and
a contact form that sends each enquiry into Copper Ledger Control.

## Stack

- Vite, React 19, Tailwind CSS 4
- Prerendered at build time with `react-dom/server`, so a crawler receives the
  whole page rather than an empty `<div id="root">`
- Cloudflare Pages, with one Pages Function for the contact form
- pnpm

## Commands

```bash
pnpm install
pnpm dev     # http://localhost:3170 — client only, the form cannot send here
pnpm test    # the enquiry endpoint
pnpm lint    # tsc
pnpm build   # vite build → SSR build → prerender → sitemap, robots, llms.txt
```

To run the built site with the form working against a local database:

```bash
pnpm build && pnpm dlx wrangler@4 pages dev dist --port 3181
```

The local database needs the leads table first. Apply `migration-008.sql`,
`migration-009.sql` and `migration-010.sql` from the Copper-Ledger-Admin
repository with `pnpm dlx wrangler@4 d1 execute copper-ledger --local --file <file>`.
`migration-010` references `shops`, so create `CREATE TABLE shops (id TEXT PRIMARY KEY);`
before it.

## Where things are

| Path | What it holds |
| --- | --- |
| `src/content/site.ts` | Every fact the site states: name, RC number, email, title, description, JSON-LD and `llms.txt`. Change a fact here, once. |
| `src/components/Manifesto.tsx` | The page copy and the margin note |
| `src/components/FloatingTag.tsx` | The rotating line above the headline |
| `src/components/AccessModal.tsx` | The contact form |
| `functions/api/enquiry.ts` | Receives the form and writes the lead |
| `scripts/prerender.mjs`, `scripts/seo.mjs` | The build steps after Vite |
| `public/` | Favicons and the 1200×630 share image |

## The contact form

The form posts to `/api/enquiry`. The function refuses cross-site submissions,
silently drops anything that fills the hidden `website` field, validates the
rest, and writes one row into the `waitlist` table of the `copper-ledger` D1
database — the same table suite.ng's waitlist writes to and Control's Leads page
reads.

Rows carry `source = 'copperledgerhq'`, which Control labels
"copperledgerhq.com". The business name is the lead's title; what they run and
what they asked go in `note`. An email that is already on the active list keeps
its existing title and has the new enquiry appended to its note, so an earlier
conversation is never overwritten.

If the request fails for any reason, the form says so and offers an email to
hello@copperledgerhq.com with everything already typed into it. A failure never
looks like a success.

## Deploying

The Cloudflare Pages project is `copperlegder-site` — spelled that way, and
`wrangler.toml` has to match it. Every push builds; `main` is production at
copperledgerhq.com.

- **Preview deployments write to the production database.** `wrangler.toml`
  binds the same D1 for every deployment, so a form submitted on a branch
  preview URL creates a real lead in Control.
- While `wrangler.toml` exists it is the source of truth for this project's
  bindings, and the Cloudflare dashboard's settings for them are ignored.

## Rules for the copy

- State only what is true today. No invented customers, testimonials, figures or
  citations — the site had all four before, and each was removed.
- The company is Copper Ledger LTD, RC 9819163. CAMA requires the company name
  and registration number on the website, so neither comes off the page. The tax
  identification number is not published.
- The one figure the site may state is that over ₦1 billion has been processed
  through Suite.

Built by [mbdulrohim](https://mbdulrohim.dev).
