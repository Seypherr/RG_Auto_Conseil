import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicHtaccess = path.join(rootDir, 'public', '.htaccess');
const distDir = path.join(rootDir, 'dist');
const distHtaccess = path.join(distDir, '.htaccess');
const distIndex = path.join(distDir, 'index.html');

const routeMeta = [
  {
    path: '/services',
    title: 'Services de conseil automobile, inspection et aide à l’achat | RG Auto Conseil',
    description:
      'Découvrez les services RG Auto Conseil : conseil avant achat, inspection de véhicule, analyse d’annonce, recherche ciblée et amélioration discrète.',
  },
  {
    path: '/about',
    title: 'À propos de Gaëtan Roblin, conseiller automobile indépendant | RG Auto Conseil',
    description: 'Découvrez Gaëtan Roblin et l’approche indépendante, claire et rassurante de RG Auto Conseil.',
  },
  {
    path: '/gallery',
    title: 'Galerie automobile, réalisations et avant/après | RG Auto Conseil',
    description: 'Parcourez les réalisations RG Auto Conseil avec des exemples avant/après, des projets d’achat et des améliorations de véhicule.',
  },
  {
    path: '/contact',
    title: 'Contact RG Auto Conseil, demande de conseil automobile | RG Auto Conseil',
    description: 'Contactez RG Auto Conseil pour un conseil avant achat, une inspection de véhicule, une recherche ciblée ou une amélioration discrète en région PACA.',
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

function replaceMetaTag(html, selectorPattern, replacement) {
  const pattern = new RegExp(`<meta[^>]+${selectorPattern}[^>]*>`, 'i');
  return html.replace(pattern, replacement);
}

if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, distHtaccess);
}

if (!fs.existsSync(distIndex)) {
  process.exit(0);
}

const baseHtml = fs.readFileSync(distIndex, 'utf8');

for (const route of routeMeta) {
  const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
  const routeIndex = path.join(routeDir, 'index.html');
  const canonicalUrl = `https://rgautoconseil.fr${route.path}`;

  let routeHtml = baseHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);
  routeHtml = replaceMetaTag(routeHtml, 'name="description"', `<meta name="description" content="${route.description}" />`);
  routeHtml = replaceMetaTag(routeHtml, 'property="og:title"', `<meta property="og:title" content="${route.title}" />`);
  routeHtml = replaceMetaTag(routeHtml, 'property="og:description"', `<meta property="og:description" content="${route.description}" />`);
  routeHtml = replaceMetaTag(routeHtml, 'property="og:url"', `<meta property="og:url" content="${canonicalUrl}" />`);
  routeHtml = replaceMetaTag(routeHtml, 'name="twitter:title"', `<meta name="twitter:title" content="${route.title}" />`);
  routeHtml = replaceMetaTag(routeHtml, 'name="twitter:description"', `<meta name="twitter:description" content="${route.description}" />`);

  if (routeHtml.includes('rel="canonical"')) {
    routeHtml = routeHtml.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  } else {
    routeHtml = routeHtml.replace(
      /<\/head>/i,
      `  <link rel="canonical" href="${canonicalUrl}" />\n  <meta property="og:url" content="${canonicalUrl}" />\n</head>`,
    );
  }

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(routeIndex, routeHtml, 'utf8');
}
