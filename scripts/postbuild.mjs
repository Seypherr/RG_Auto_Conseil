import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const distIndex = path.join(distDir, 'index.html');
const siteUrl = 'https://rgautoconseil.fr';
const homeHeroPublicPath = '/media/hero-accueil-rg-auto-conseil.webp';
const defaultLocale = 'fr_FR';
const lastModified = new Date().toISOString().slice(0, 10);
const homeMeta = {
  title: "RG Auto Conseil | Conseil automobile independant et inspection avant achat",
  description:
    "RG Auto Conseil accompagne l'achat de voiture d'occasion, l'inspection avant achat, la recherche de vehicule et l'amelioration d'equipements en Provence-Alpes-Cote d'Azur.",
};

const routeMeta = [
  {
    path: '/services',
    title: "Inspection avant achat, aide a l'achat et montage d'equipements auto | RG Auto Conseil",
    description:
      "Decouvrez les services RG Auto Conseil : conseil avant achat, inspection de voiture d'occasion, analyse d'annonce, recherche de vehicule, negotiation, CarPlay, camera de recul et amelioration discrete.",
  },
  {
    path: '/about',
    title: 'A propos de Gaetan Roblin, conseiller automobile independant | RG Auto Conseil',
    description: "Decouvrez Gaetan Roblin, conseiller automobile independant derriere RG Auto Conseil en Provence-Alpes-Cote d'Azur.",
  },
  {
    path: '/gallery',
    title: 'Galerie CarPlay, camera de recul et dashcam avant apres | RG Auto Conseil',
    description: 'Parcourez les realisations RG Auto Conseil : montage CarPlay, installation de camera de recul, conseil avant achat et integration de dashcam avec exemples avant apres.',
  },
  {
    path: '/contact',
    title: 'Contact RG Auto Conseil, demande de conseil automobile | RG Auto Conseil',
    description:
      "Contactez RG Auto Conseil pour un conseil avant achat, une inspection de voiture d'occasion, une recherche de vehicule, un projet CarPlay, camera de recul ou dashcam en Provence-Alpes-Cote d'Azur.",
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

function buildSeoBlock({ title, description, canonicalUrl, imageUrl, includePreload = false }) {
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    '<meta name="author" content="Ethan Porcaro">',
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

  if (includePreload && imageUrl) {
    const imagePath = imageUrl.replace(siteUrl, '');
    tags.push(`<link rel="preload" as="image" href="${imagePath}" fetchpriority="high">`);
  }

  if (imageUrl) {
    tags.push(`<meta property="og:image" content="${imageUrl}">`);
    tags.push(`<meta property="og:image:alt" content="RG Auto Conseil">`);
    tags.push(`<meta name="twitter:image" content="${imageUrl}">`);
    tags.push(`<meta name="twitter:image:alt" content="RG Auto Conseil">`);
  }

  return tags.join('');
}

function injectHeadTag(html, tag) {
  return html.replace('</head>', `  ${tag}\n  </head>`);
}

function stripSeoTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b[^>]*name=["']?description["']?[^>]*>/gi, '')
    .replace(/<meta\b[^>]*name=["']?author["']?[^>]*>/gi, '')
    .replace(/<link\b[^>]*rel=["']?canonical["']?[^>]*>/gi, '')
    .replace(/<link\b[^>]*rel=["']?preload["']?[^>]*as=["']?image["']?[^>]*>/gi, '')
    .replace(/<meta\b[^>]*property=["']?(og:type|og:title|og:description|og:url|og:site_name|og:locale|og:image|og:image:alt)["']?[^>]*>/gi, '')
    .replace(/<meta\b[^>]*name=["']?(twitter:card|twitter:title|twitter:description|twitter:image|twitter:image:alt)["']?[^>]*>/gi, '');
}

function buildRouteHtml(baseHtml, route, imageUrl) {
  const canonicalUrl = `${siteUrl}${route.path}`;
  const html = stripSeoTags(baseHtml).replace(
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

function removeUnusedFavicons() {
  for (const file of fs.readdirSync(distDir)) {
    if (/^favicon\.[a-f0-9]+\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {
      fs.rmSync(path.join(distDir, file), { force: true });
    }
  }
}

if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { force: true, recursive: true });
}

if (!fs.existsSync(distIndex)) {
  process.exit(0);
}

let baseHtml = fs.readFileSync(distIndex, 'utf8');
const homeHeroHref = homeHeroPublicPath;
const absoluteHeroUrl = `${siteUrl}${homeHeroHref}`;

baseHtml = replacePattern(
  baseHtml,
  /<link[^>]+rel=icon[^>]*>/i,
  '<link rel="icon" type="image/jpeg" href="/favicon.jpg">',
);

baseHtml = stripSeoTags(baseHtml).replace(
  /(<body[^>]*>)/i,
  `${buildSeoBlock({
    title: homeMeta.title,
    description: homeMeta.description,
    canonicalUrl: `${siteUrl}/`,
    imageUrl: absoluteHeroUrl,
    includePreload: true,
  })}$1`,
);

fs.writeFileSync(distIndex, baseHtml, 'utf8');

for (const route of routeMeta) {
  writeRouteHtml(baseHtml, route, absoluteHeroUrl);
}

writeSitemap();
removeUnusedFavicons();
