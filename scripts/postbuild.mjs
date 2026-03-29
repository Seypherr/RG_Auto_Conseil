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
    title: "Services de conseil automobile, inspection et aide à l'achat | RG Auto Conseil",
    description:
      "Découvrez les services RG Auto Conseil : conseil avant achat, inspection de véhicule, analyse d'annonce, recherche ciblée, négociation et amélioration discrète.",
  },
  {
    path: '/about',
    title: 'À propos de Gaëtan Roblin, conseiller automobile indépendant | RG Auto Conseil',
    description: "Découvrez Gaëtan Roblin et l'approche indépendante, claire et rassurante de RG Auto Conseil.",
  },
  {
    path: '/gallery',
    title: 'Galerie automobile, réalisations et avant/après | RG Auto Conseil',
    description: "Parcourez les réalisations RG Auto Conseil avec des exemples avant/après, des projets d'achat et des améliorations de véhicule.",
  },
  {
    path: '/contact',
    title: 'Contact RG Auto Conseil, demande de conseil automobile | RG Auto Conseil',
    description:
      "Contactez RG Auto Conseil pour un conseil avant achat, une inspection de véhicule, une recherche ciblée ou une amélioration discrète en Provence-Alpes-Côte d'Azur.",
  },
  {
    path: '/legal-notice',
    title: 'Mentions légales | RG Auto Conseil',
    description: 'Mentions légales du site RG Auto Conseil.',
  },
  {
    path: '/privacy-policy',
    title: 'Politique de confidentialité | RG Auto Conseil',
    description: 'Politique de confidentialité expliquant le traitement des données personnelles par RG Auto Conseil.',
  },
];

function replacePattern(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

function buildSeoBlock({ title, description, canonicalUrl }) {
  return [
    `<link rel="canonical" href="${canonicalUrl}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${canonicalUrl}">`,
    `<meta property="og:site_name" content="RG Auto Conseil">`,
    `<meta property="og:locale" content="${defaultLocale}">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
  ].join('');
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

function buildRouteHtml(baseHtml, route) {
  const canonicalUrl = `${siteUrl}${route.path}`;
  let html = baseHtml;

  html = replacePattern(html, /<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);
  html = replacePattern(html, /<meta\s+name=description\s+content="[^"]*">/i, `<meta name="description" content="${route.description}">`);
  html = replacePattern(html, /<meta\s+name=author\s+content="[^"]*">/i, '<meta name="author" content="Gaëtan Roblin">');
  html = html.replace(/<link\s+rel=canonical\s+href=[^>]*>/gi, '');
  html = html.replace(/<meta\s+property=og:[^>]*>/gi, '');
  html = html.replace(/<meta\s+name=twitter:[^>]*>/gi, '');

  html = html.replace(
    /(<body[^>]*>)/i,
    `${buildSeoBlock({
      title: route.title,
      description: route.description,
      canonicalUrl,
    })}$1`,
  );

  return html;
}

function writeRouteHtml(baseHtml, route) {
  const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
  const routeIndex = path.join(routeDir, 'index.html');
  const routeHtml = buildRouteHtml(baseHtml, route);

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

if (homeHeroHref) {
  baseHtml = injectHeadTag(
    baseHtml,
    `<link rel="preload" as="image" href="${homeHeroHref}" fetchpriority="high">`,
  );
  fs.writeFileSync(distIndex, baseHtml, 'utf8');
}

for (const route of routeMeta) {
  writeRouteHtml(baseHtml, route);
}

writeSitemap();
