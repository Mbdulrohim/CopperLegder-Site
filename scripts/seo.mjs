/**
 * sitemap.xml, robots.txt and llms.txt, generated from src/content/site.ts
 * through the SSR bundle so they cannot drift from what the page says.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const today = new Date().toISOString().slice(0, 10);
const { site, llms } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`);

fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site.url}/sitemap.xml
`);

fs.writeFileSync(path.join(DIST, 'llms.txt'), llms());

console.log('seo: wrote sitemap.xml, robots.txt, llms.txt');
