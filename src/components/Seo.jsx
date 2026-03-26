import { useEffect } from 'react';
import { SITE_NAME, SITE_URL, buildOrganizationSchema } from '../data/seoShared';

function upsertMeta(attribute, key, content) {
  if (!content) {
    return;
  }

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) {
    return;
  }

  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertStructuredData(id, data) {
  let element = document.head.querySelector(`script[data-seo-id="${id}"]`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.seoId = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function toAbsoluteUrl(value) {
  if (!value) {
    return undefined;
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  return new URL(value, SITE_URL).toString();
}

export default function Seo({
  lang = 'fr',
  title,
  description,
  path = '/',
  image,
  type = 'website',
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  structuredData = [],
}) {
  useEffect(() => {
    const canonical = new URL(path, SITE_URL).toString();
    const absoluteImage = toAbsoluteUrl(image);
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const locale = lang === 'en' ? 'en_US' : 'fr_FR';

    document.title = fullTitle;
    document.documentElement.lang = lang;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'author', 'Gaëtan Roblin');
    upsertMeta('name', 'publisher', SITE_NAME);
    upsertMeta('name', 'theme-color', '#080808');
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', locale);
    upsertMeta('name', 'twitter:card', absoluteImage ? 'summary_large_image' : 'summary');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    if (absoluteImage) {
      upsertMeta('property', 'og:image', absoluteImage);
      upsertMeta('name', 'twitter:image', absoluteImage);
    }

    upsertLink('canonical', canonical);

    const schemas = [buildOrganizationSchema(lang), ...structuredData].filter(Boolean);
    upsertStructuredData('page', schemas);
  }, [description, image, lang, path, robots, structuredData, title, type]);

  return null;
}
