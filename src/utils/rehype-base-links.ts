/**
 * Rehype plugin that prefixes internal links with the site base URL.
 * Required because markdown content uses paths like `/projects/slug`
 * which need to become `/portfolio/projects/slug` for GitHub Pages deployment.
 */

interface HastNode {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

export function rehypeBaseLinks(options: { base: string }) {
  return function (tree: HastNode) {
    function visit(node: HastNode) {
      if (node.type === 'element' && node.tagName === 'a' && node.properties?.['href']) {
        const href = node.properties['href'];
        if (typeof href === 'string' && href.startsWith('/') && !href.startsWith(options.base)) {
          node.properties['href'] = options.base.replace(/\/$/, '') + href;
        }
      }
      if (node.children) {
        for (const child of node.children) {
          visit(child);
        }
      }
    }
    visit(tree);
  };
}
