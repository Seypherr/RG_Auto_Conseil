const SHORT_VARIANTS = ['Lorem', 'Ipsum', 'Dolor', 'Amet'];
const LABEL_VARIANTS = ['Lorem ipsum', 'Dolor sit', 'Amet elit', 'Nisi enim'];
const TITLE_VARIANTS = [
  'Lorem ipsum dolor',
  'Dolor sit amet elit',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor',
];
const SENTENCE_VARIANTS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
];
const PARAGRAPH_VARIANTS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
];
const PRESERVED_TOKENS = new Set(['FR', 'EN']);
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH', 'CODE', 'PRE']);

function hashText(value) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash);
}

function pickVariant(source, variants) {
  return variants[hashText(source) % variants.length];
}

function matchCase(source, replacement) {
  const hasLetters = /[a-zA-Z]/.test(source);

  if (!hasLetters) {
    return replacement;
  }

  if (source === source.toUpperCase()) {
    return replacement.toUpperCase();
  }

  if (source === source.toLowerCase()) {
    return replacement.toLowerCase();
  }

  return replacement;
}

function shouldPreserveText(value) {
  const trimmed = value.replace(/\s+/g, ' ').trim();

  if (!trimmed) {
    return true;
  }

  if (PRESERVED_TOKENS.has(trimmed)) {
    return true;
  }

  if (/^[\d\s+()./\-:%]+$/.test(trimmed)) {
    return true;
  }

  if (trimmed.includes('@') || /^https?:\/\//i.test(trimmed) || /^www\./i.test(trimmed)) {
    return true;
  }

  if (/^[^\p{L}\p{N}]+$/u.test(trimmed)) {
    return true;
  }

  return false;
}

function buildLoremText(source) {
  const normalized = source.replace(/\s+/g, ' ').trim();

  if (!normalized || shouldPreserveText(normalized)) {
    return source;
  }

  const wordCount = normalized.split(' ').length;
  let replacement = '';

  if (wordCount <= 1) {
    replacement = pickVariant(normalized, SHORT_VARIANTS);
  } else if (wordCount <= 3) {
    replacement = pickVariant(normalized, LABEL_VARIANTS);
  } else if (wordCount <= 7) {
    replacement = pickVariant(normalized, TITLE_VARIANTS);
  } else if (wordCount <= 18) {
    replacement = pickVariant(normalized, SENTENCE_VARIANTS);
  } else {
    replacement = pickVariant(normalized, PARAGRAPH_VARIANTS);
  }

  replacement = matchCase(normalized, replacement);

  if (/\?$/.test(normalized) && !replacement.endsWith('?')) {
    replacement = `${replacement.replace(/[.!]+$/, '')} ?`;
  } else if (/!$/.test(normalized) && !replacement.endsWith('!')) {
    replacement = `${replacement.replace(/[.?]+$/, '')} !`;
  }

  const leading = source.match(/^\s*/)?.[0] ?? '';
  const trailing = source.match(/\s*$/)?.[0] ?? '';
  return `${leading}${replacement}${trailing}`;
}

function replaceTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const parent = node.parentElement;

    if (!parent || SKIP_TAGS.has(parent.tagName) || parent.closest('[data-preserve-lorem]')) {
      return;
    }

    if (parent.isContentEditable) {
      return;
    }

    const replaced = buildLoremText(node.nodeValue ?? '');

    if (replaced !== node.nodeValue) {
      node.nodeValue = replaced;
    }
  });
}

function replacePlaceholders(root) {
  root.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((element) => {
    const current = element.getAttribute('placeholder') ?? '';
    const replaced = buildLoremText(current);

    if (replaced !== current) {
      element.setAttribute('placeholder', replaced.trim());
    }
  });
}

export function applyLoremMask(root) {
  if (!root) {
    return;
  }

  replaceTextNodes(root);
  replacePlaceholders(root);
}

