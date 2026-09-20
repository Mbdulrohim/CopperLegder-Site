/**
 * sitemap.xml, robots.txt and llms.txt, generated from src/content/site.ts
 * through the SSR bundle so they cannot drift from what the page says.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const today = new Date().toISOString().slice(0, 10);
const { site, pages, llms } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

const urls = Object.keys(pages).map((route) => `  <url>
    <loc>${site.url}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);

fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site.url}/sitemap.xml
`);

fs.writeFileSync(path.join(DIST, 'llms.txt'), llms());

console.log('seo: wrote sitemap.xml, robots.txt, llms.txt');
