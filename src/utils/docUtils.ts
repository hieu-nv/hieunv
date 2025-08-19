// Documentation utilities and helpers

/**
 * Get all available documentation files
 * This function scans the docs directory and returns a list of available documents
 */
export const getAvailableDocs = () => {
  // This will be populated by Vite's import.meta.glob
  const modules = import.meta.glob('../docs/*.md', { 
    query: '?raw', 
    import: 'default' 
  });
  
  return Object.keys(modules).map(path => {
    const match = path.match(/\/([^/]+)\.md$/);
    return match ? match[1] : '';
  }).filter(Boolean).sort();
};

/**
 * Convert filename to readable title
 * Examples:
 * - "getting-started" → "Getting Started"
 * - "api-reference" → "Api Reference"
 * - "README" → "README"
 */
export const formatDocTitle = (filename: string): string => {
  if (filename.toUpperCase() === 'README') {
    return 'System Documentation';
  }
  
  return filename
    .replace(/-/g, ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase());
};

/**
 * Generate navigation breadcrumbs
 */
export const generateBreadcrumbs = (currentSlug: string) => {
  const breadcrumbs = [
    { label: 'Documentation', path: '/docs' }
  ];
  
  if (currentSlug && currentSlug !== 'index') {
    breadcrumbs.push({
      label: formatDocTitle(currentSlug),
      path: `/docs/${currentSlug}`
    });
  }
  
  return breadcrumbs;
};

/**
 * Get document metadata
 */
export interface DocumentMetadata {
  title: string;
  slug: string;
  path: string;
  exists: boolean;
}

export const getDocumentMetadata = (slug: string): DocumentMetadata => {
  const modules = import.meta.glob('../docs/*.md', { 
    query: '?raw', 
    import: 'default' 
  });
  const path = `/docs/${slug}`;
  const exists = Object.keys(modules).some(modulePath => 
    modulePath.includes(`${slug}.md`)
  );
  
  return {
    title: formatDocTitle(slug),
    slug,
    path,
    exists
  };
};
