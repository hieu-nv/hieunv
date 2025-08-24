import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import LiquidGlass from './LiquidGlass';
import { formatDocTitle } from '../utils/docUtils';

// Import all markdown files dynamically
const markdownModules = import.meta.glob('../docs/*.md', { 
  query: '?raw', 
  import: 'default' 
});

// Function to extract tags from markdown content
const extractTags = (content: string, docSlug: string): string[] => {
  const tags: string[] = [];
  
  // Add document-specific tags based on filename
  const documentTags: Record<string, string[]> = {
    'index': ['documentation', 'overview', 'getting-started'],
    'components': ['react', 'components', 'ui', 'typescript'],
    'api-reference': ['api', 'reference', 'methods', 'endpoints'],
    'getting-started': ['tutorial', 'setup', 'beginner', 'guide'],
    'styling-guide': ['css', 'sass', 'tailwind', 'design', 'styling'],
    'header-examples': ['headers', 'examples', 'markdown', 'formatting'],
    'PDF_GENERATION_GUIDE': ['pdf', 'generation', 'export', 'print'],
    'README': ['readme', 'documentation', 'system'],
    'this-code-review-comment-made-me-quit-and-id-write-it-again': ['code-review', 'career', 'experience', 'story']
  };
  
  // Add predefined tags for this document
  if (documentTags[docSlug]) {
    tags.push(...documentTags[docSlug]);
  }
  
  // Extract tags from content patterns
  const contentLower = content.toLowerCase();
  
  // Technology tags
  if (contentLower.includes('react')) tags.push('react');
  if (contentLower.includes('typescript') || contentLower.includes('tsx')) tags.push('typescript');
  if (contentLower.includes('vite')) tags.push('vite');
  if (contentLower.includes('tailwind')) tags.push('tailwindcss');
  if (contentLower.includes('scss') || contentLower.includes('sass')) tags.push('scss');
  if (contentLower.includes('markdown')) tags.push('markdown');
  if (contentLower.includes('pdf')) tags.push('pdf');
  if (contentLower.includes('javascript') || contentLower.includes('js')) tags.push('javascript');
  
  // Content type tags
  if (contentLower.includes('tutorial') || contentLower.includes('guide')) tags.push('tutorial');
  if (contentLower.includes('example')) tags.push('examples');
  if (contentLower.includes('documentation')) tags.push('documentation');
  if (contentLower.includes('reference')) tags.push('reference');
  
  // Remove duplicates and return
  return [...new Set(tags)];
};

const DocPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [availableDocs, setAvailableDocs] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  // Get the current document slug or default to 'index'
  const currentSlug = slug || 'index';

  useEffect(() => {
    // Get list of available documents
    const docNames = Object.keys(markdownModules).map(path => {
      const match = path.match(/\/([^/]+)\.md$/);
      return match ? match[1] : '';
    }).filter(Boolean);
    
    setAvailableDocs(docNames);
  }, []);

  useEffect(() => {
    const loadMarkdown = async () => {
      setLoading(true);
      setError(null);

      try {
        const markdownPath = `../docs/${currentSlug}.md`;
        const loadModule = markdownModules[markdownPath];
        
        if (!loadModule) {
          throw new Error(`Document "${currentSlug}" not found`);
        }

        const markdownContent = await loadModule();
        setContent(markdownContent as string);
        
        // Extract and set tags
        const extractedTags = extractTags(markdownContent as string, currentSlug);
        setTags(extractedTags);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load document');
        console.error('Error loading markdown:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [currentSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-6">
            <h1 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-4">
              Document Not Found
            </h1>
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">Available documents:</p>
              <ul className="list-disc list-inside text-blue-600 dark:text-blue-400">
                {availableDocs.map(doc => (
                  <li key={doc}>
                    <Link 
                      to={`/docs/${doc}`} 
                      className="hover:underline"
                    >
                      {doc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 z-0">
                <LiquidGlass
                  width={256}
                  height={400}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Documentation
                </h2>
                <nav className="space-y-2">
                  {availableDocs.map(doc => (
                    <Link
                      key={doc}
                      to={`/docs/${doc}`}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        currentSlug === doc
                          ? 'bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {formatDocTitle(doc)}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                  <Link
                    to="/"
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 z-0">
                <LiquidGlass
                  width={800}
                  height={600}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <MarkdownRenderer content={content} />
                
                {/* Tags Section */}
                {tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200/30 dark:border-gray-700/30">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                                   bg-blue-100/80 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300
                                   border border-blue-200/50 dark:border-blue-700/50
                                   hover:bg-blue-200/80 dark:hover:bg-blue-800/40 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocPage;
