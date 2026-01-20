/**
 * URL utilities for handling base path in GitHub Pages deployment
 */

/**
 * Prefixes a path with the base URL configured in astro.config.mjs
 * Use this for all internal links and static assets
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove trailing slash from base and leading slash from path to avoid double slashes
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
