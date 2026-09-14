/**
 * Every fact copperledgerhq.com states, in one place.
 *
 * The page, its head, its structured data, robots.txt, sitemap.xml and
 * llms.txt are all built from this file, so a fact changes here once and
 * nowhere else. Everything in it is a claim a registered company is making in
 * public, so it has to be true today — not planned, not approximately true.
 */
export const site = {
  name: 'Copper Ledger',
  legalName: 'Copper Ledger LTD',
  url: 'https://copperledgerhq.com',
  email: 'hello@copperledgerhq.com',
  /*
   * CAMA 2020 requires a company's name and registration number on its
   * website, and the number is public on the CAC register either way. The tax
   * identification number on the same certificate is deliberately not here:
   * nothing requires it to be published.
   */
  rcNumber: '9819163',
  incorporated: '2026-09-01',
  city: 'Lagos',
  suiteUrl: 'https://suite.ng',
  /** 30–60 chars. */
  title: 'Copper Ledger — software a business runs on',
  /** 110–160 chars, a real sentence. */
  description:
    'Copper Ledger is a Nigerian software company. It makes Suite for stores, schools and hospitals, and builds websites, apps and custom software.',
  ogImage: '/og.png',
  author: { name: 'mbdulrohim', url: 'https://mbdulrohim.dev' },
} as const;

/** Organization, WebSite and the product it makes — enough to be quoted, not just indexed. */
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#org`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      email: site.email,
      logo: `${site.url}/apple-touch-icon.png`,
      foundingDate: site.incorporated,
      address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'NG' },
      identifier: { '@type': 'PropertyValue', name: 'RC number', value: site.rcNumber },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#site`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: 'en-NG',
      publisher: { '@id': `${site.url}/#org` },
      author: { '@type': 'Person', name: site.author.name, url: site.author.url },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Suite',
      url: site.suiteUrl,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Suite for stores tracks stock per unit by IMEI or serial number, with sales, receipts, credit and suppliers. Suite for schools and for hospitals are in early access.',
      publisher: { '@id': `${site.url}/#org` },
    },
  ],
};

export const llms = (): string => `# ${site.name}

> ${site.legalName} is a software company in ${site.city}, Nigeria, registered with
> the Corporate Affairs Commission as RC ${site.rcNumber}. It makes Suite, and it
> builds websites, apps and custom software for other businesses.

## What it makes

- [Suite](${site.suiteUrl}): software a business runs on. Over ₦1 billion has been
  processed through it.
  - For stores (live): stock tracked per unit by IMEI or serial number, sales and
    receipts, customer credit and suppliers.
  - For schools (early access): student and family records across every campus,
    and fees invoiced, paid and receipted.
  - For hospitals (early access): each patient's visit, from the front desk
    through the laboratory and pharmacy to billing.

## What it builds

Websites, mobile apps and custom software for other businesses.

## Contact

- Email: ${site.email}
- The form on ${site.url}/ sends a message straight to the team.
`;
