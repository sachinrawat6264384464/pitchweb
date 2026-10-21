import { UtmParameters } from './types';

export function sanitizeUrl(url: string): string {
  let trimmed = url.trim();
  if (!trimmed) return '';
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = 'https://' + trimmed;
  }
  return trimmed;
}

export function buildUtmUrl(params: UtmParameters): string {
  const base = sanitizeUrl(params.baseUrl);
  if (!base) return '';

  try {
    const url = new URL(base);

    if (params.source.trim()) {
      url.searchParams.set('utm_source', params.source.trim().toLowerCase().replace(/\s+/g, '_'));
    }
    if (params.medium.trim()) {
      url.searchParams.set('utm_medium', params.medium.trim().toLowerCase().replace(/\s+/g, '_'));
    }
    if (params.campaign.trim()) {
      url.searchParams.set('utm_campaign', params.campaign.trim().toLowerCase().replace(/\s+/g, '_'));
    }
    if (params.term.trim()) {
      url.searchParams.set('utm_term', params.term.trim().toLowerCase().replace(/\s+/g, '+'));
    }
    if (params.content.trim()) {
      url.searchParams.set('utm_content', params.content.trim().toLowerCase().replace(/\s+/g, '_'));
    }

    return url.toString();
  } catch {
    // If URL parsing fails during editing
    const queryParts: string[] = [];
    if (params.source.trim()) queryParts.push(`utm_source=${encodeURIComponent(params.source.trim())}`);
    if (params.medium.trim()) queryParts.push(`utm_medium=${encodeURIComponent(params.medium.trim())}`);
    if (params.campaign.trim()) queryParts.push(`utm_campaign=${encodeURIComponent(params.campaign.trim())}`);
    if (params.term.trim()) queryParts.push(`utm_term=${encodeURIComponent(params.term.trim())}`);
    if (params.content.trim()) queryParts.push(`utm_content=${encodeURIComponent(params.content.trim())}`);

    const glue = base.includes('?') ? '&' : '?';
    return queryParts.length > 0 ? `${base}${glue}${queryParts.join('&')}` : base;
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined' || !navigator.clipboard) {
    return Promise.resolve(false);
  }
  return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
}
