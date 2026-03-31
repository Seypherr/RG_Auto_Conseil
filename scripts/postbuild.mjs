import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const distIndex = path.join(distDir, 'index.html');
const siteUrl = 'https://rgautoconseil.fr';
const defaultLocale = 'fr_FR';
const lastModified = new Date().toISOString().slice(0, 10);

const routeMeta = [
  {
    path: '/services',
    title: "Services de conseil automobile, inspection et aide a l'achat | RG Auto Conseil",
    description:
      "Decouvrez les services RG Auto Conseil : conseil avant achat, inspection de vehicule, analyse d'annonce, recherche ciblee, negociation et amelioration discrete.",
  },
  {
    path: '/about',
    title: 'A propos de Gaetan Roblin, conseiller automobile independant | RG Auto Conseil',
    description: "Decouvrez Gaetan Roblin et l'approche independante, claire et rassurante de RG Auto Conseil.",
  },
  {
    path: '/gallery',
    title: 'Galerie automobile, realisations et avant/apres | RG Auto Conseil',
    description: "Parcourez les realisations RG Auto Conseil avec des exemples avant/apres, des projets d'achat et des ameliorations de vehicule.",
  },
  {
    path: '/contact',
    title: 'Contact RG Auto Conseil, demande de conseil automobile | RG Auto Conseil',
    description:
      "Contactez RG Auto Conseil pour un conseil avant achat, une inspection de vehicule, une recherche ciblee ou une amelioration discrete en Provence-Alpes-Cote d'Azur.",
  },
  {
    path: '/legal-notice',
    title: 'Mentions legales | RG Auto Conseil',
    description: 'Mentions legales du site RG Auto Conseil.',
  },
  {
    path: '/privacy-policy',
    title: 'Politique de confidentialite | RG Auto Conseil',
    description: 'Politique de confidentialite expliquant le traitement des donnees personnelles par RG Auto Conseil.',
  },
];

function replacePattern(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

function buildSeoBlock({ title, description, canonicalUrl, imageUrl }) {
  const tags = [
    `<link rel="canonical" href="${canonicalUrl}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${canonicalUrl}">`,
    `<meta property="og:site_name" content="RG Auto Conseil">`,
    `<meta property="og:locale" content="${defaultLocale}">`,
    `<meta name="twitter:card" content="${imageUrl ? 'summary_large_image' : 'summary'}">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
  ];

  if (imageUrl) {
    tags.push(`<meta property="og:image" content="${imageUrl}">`);
    tags.push(`<meta property="og:image:alt" content="RG Auto Conseil">`);
    tags.push(`<meta name="twitter:image" content="${imageUrl}">`);
    tags.push(`<meta name="twitter:image:alt" content="RG Auto Conseil">`);
  }

  return tags.join('');
}

function findAssetHref(prefix) {
  const file = fs
    .readdirSync(distDir)
    .find((entry) => entry.startsWith(prefix) && (entry.endsWith('.webp') || entry.endsWith('.avif') || entry.endsWith('.jpg') || entry.endsWith('.png')));

  return file ? `/${file}` : undefined;
}

function injectHeadTag(html, tag) {
  return html.replace('</head>', `  ${tag}\n  </head>`);
}

function buildRouteHtml(baseHtml, route, imageUrl) {
  const canonicalUrl = `${siteUrl}${route.path}`;
  let html = baseHtml;

  html = replacePattern(html, /<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);
  html = replacePattern(html, /<meta\s+name=description\s+content="[^"]*">/i, `<meta name="description" content="${route.description}">`);
  html = replacePattern(html, /<meta\s+name=author\s+content="[^"]*">/i, '<meta name="author" content="Ethan Porcaro">');
  html = html.replace(/<link\s+rel=canonical\s+href=[^>]*>/gi, '');
  html = html.replace(/<meta\s+property=og:[^>]*>/gi, '');
  html = html.replace(/<meta\s+name=twitter:[^>]*>/gi, '');

  html = html.replace(
    /(<body[^>]*>)/i,
    `${buildSeoBlock({
      title: route.title,
      description: route.description,
      canonicalUrl,
      imageUrl,
    })}$1`,
  );

  return html;
}

function writeRouteHtml(baseHtml, route, imageUrl) {
  const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
  const routeIndex = path.join(routeDir, 'index.html');
  const routeHtml = buildRouteHtml(baseHtml, route, imageUrl);

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(routeIndex, routeHtml, 'utf8');
}

function writeSitemap() {
  const urls = ['/', ...routeMeta.map((route) => route.path)];
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) => `  <url>\n    <loc>${siteUrl}${url === '/' ? '/' : url}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`,
    )
    .join('\n')}\n</urlset>\n`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf8');
}

if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { force: true, recursive: true });
}

if (!fs.existsSync(distIndex)) {
  process.exit(0);
}

let baseHtml = fs.readFileSync(distIndex, 'utf8');
const homeHeroHref = findAssetHref('Photo_Hero.');
const absoluteHeroUrl = homeHeroHref ? `${siteUrl}${homeHeroHref}` : undefined;

if (homeHeroHref) {
  baseHtml = replacePattern(baseHtml, /<meta\s+property=og:image[^>]*>/gi, '');
  baseHtml = replacePattern(baseHtml, /<meta\s+property=og:image:alt[^>]*>/gi, '');
  baseHtml = replacePattern(baseHtml, /<meta\s+name=twitter:image[^>]*>/gi, '');
  baseHtml = replacePattern(baseHtml, /<meta\s+name=twitter:image:alt[^>]*>/gi, '');
  baseHtml = replacePattern(baseHtml, /<meta\s+name=twitter:card\s+content=(?:"[^"]*"|[^\s>]+)>/i, '<meta name="twitter:card" content="summary_large_image">');
  baseHtml = baseHtml.replace(
    /(<body[^>]*>)/i,
    `<link rel="preload" as="image" href="${homeHeroHref}" fetchpriority="high"><meta property="og:image" content="${absoluteHeroUrl}"><meta property="og:image:alt" content="RG Auto Conseil"><meta name="twitter:image" content="${absoluteHeroUrl}"><meta name="twitter:image:alt" content="RG Auto Conseil">$1`,
  );
  fs.writeFileSync(distIndex, baseHtml, 'utf8');
}

for (const route of routeMeta) {
  writeRouteHtml(baseHtml, route, absoluteHeroUrl);
}

writeSitemap();
