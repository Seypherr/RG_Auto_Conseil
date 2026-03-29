import { useEffect } from 'react';
import { SITE_NAME, SITE_URL, buildOrganizationSchema } from '../data/seoShared';
import resolveAssetUrl from '../utils/resolveAssetUrl';

function upsertMeta(attribute: 'name' | 'property', key: string, content?: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href?: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!href) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertStructuredData(id: string, data: unknown[]) {
  let element = document.head.querySelector(`script[data-seo-id="${id}"]`) as HTMLScriptElement | null;

  if (!data.length) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.seoId = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': data.map((item) => {
      if (item && typeof item === 'object' && '@context' in (item as Record<string, unknown>)) {
        const { ['@context']: _context, ...rest } = item as Record<string, unknown>;
        return rest;
      }

      return item;
    }),
  });
}

function toAbsoluteUrl(value: unknown) {
  const resolvedValue = resolveAssetUrl(value);

  if (!resolvedValue) {
    return undefined;
  }

  if (resolvedValue.startsWith('http://') || resolvedValue.startsWith('https://')) {
    return resolvedValue;
  }

  return new URL(resolvedValue, SITE_URL).toString();
}

type SeoProps = {
  description: string;
  image?: unknown;
  imageAlt?: string;
  lang?: 'fr' | 'en';
  path?: string;
  robots?: string;
  structuredData?: unknown[];
  title: string;
  type?: string;
};

export default function Seo({
  lang = 'fr',
  title,
  description,
  path = '/',
  image,
  imageAlt,
  type = 'website',
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  structuredData = [],
}: SeoProps) {
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
    upsertMeta('property', 'og:image', absoluteImage);
    upsertMeta('property', 'og:image:alt', absoluteImage ? imageAlt || title : undefined);
    upsertMeta('name', 'twitter:card', absoluteImage ? 'summary_large_image' : 'summary');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteImage);
    upsertMeta('name', 'twitter:image:alt', absoluteImage ? imageAlt || title : undefined);

    upsertLink('canonical', canonical);

    const schemas = [buildOrganizationSchema(lang), ...structuredData].filter(Boolean);
    upsertStructuredData('page', schemas);
  }, [description, image, imageAlt, lang, path, robots, structuredData, title, type]);

  return null;
}
