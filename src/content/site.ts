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
  title: 'Copper Ledger. Software a business runs on.',
  /** 110–160 chars, a real sentence. */
  description:
    'Copper Ledger builds Suite and custom business software, web applications and mobile applications from Lagos, Nigeria.',
  ogImage: '/og.png',
  author: { name: 'Abdulrohim Mustapha', url: 'https://mbdulrohim.dev' },
  founders: [
    { name: 'Abdulrohim Mustapha', role: 'Co-founder', initials: 'AM', url: null },
    { name: 'Samsudeen Afolabi', role: 'Co-founder', initials: 'SA', url: null },
  ],
} as const;

export const pages = {
  '/': {
    title: site.title,
    description: site.description,
  },
  '/work/': {
    title: 'Work | Copper Ledger',
    description: 'Suite and custom software built by Copper Ledger for businesses in Nigeria and other countries.',
  },
  '/capabilities/': {
    title: 'Capabilities | Copper Ledger',
    description: 'Copper Ledger designs, builds and maintains business systems, web apps and mobile apps.',
  },
  '/team/': {
    title: 'Team | Copper Ledger',
    description: 'Meet the people who build Copper Ledger, Suite and its custom software.',
  },
  '/notes/': {
    title: 'Notes | Copper Ledger',
    description: 'Notes from Copper Ledger about building useful, reliable business software.',
  },
  '/notes/software-should-follow-the-business/': {
    title: 'Software should follow the business | Copper Ledger',
    description: 'Why good business software starts with the work people already do.',
  },
  '/contact/': {
    title: 'Contact | Copper Ledger',
    description: 'Talk to Copper Ledger about Suite, a web application, a mobile application or custom business software.',
  },
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
      founder: site.founders.map((founder) => ({
        '@type': 'Person',
        name: founder.name,
        jobTitle: founder.role,
        ...(founder.url ? { url: founder.url } : {}),
      })),
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

## Read

- [Notes](${site.url}/notes/): writing about dependable software and the businesses it supports.
- [Software should follow the business](${site.url}/notes/software-should-follow-the-business/)

## Contact

- Email: ${site.email}
- The form on ${site.url}/ sends a message straight to the team.
`;
