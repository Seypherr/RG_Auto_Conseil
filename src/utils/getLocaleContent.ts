export function getLocaleContent(contentByLocale, language) {
  return contentByLocale[language === 'en' ? 'en' : 'fr'];
}
