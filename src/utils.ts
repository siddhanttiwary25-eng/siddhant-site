export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });

// Reading time in minutes at ~200 words a minute, never less than 1.
export const readMinutes = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
