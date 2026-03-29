type AssetRecord = {
  default?: unknown;
  href?: unknown;
  src?: unknown;
  url?: unknown;
};

const ASSET_KEYS = ['src', 'default', 'href', 'url'] as const;

export default function resolveAssetUrl(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }

  if (value && typeof value === 'object') {
    const asset = value as AssetRecord;

    for (const key of ASSET_KEYS) {
      const candidate = asset[key];

      if (typeof candidate === 'string') {
        return candidate;
      }
    }
  }

  return '';
}
