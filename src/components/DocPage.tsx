import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
import { formatDocTitle } from "../utils/docUtils";

// Import all markdown files dynamically (recursive)
const markdownModules = import.meta.glob("../docs/**/*.md", {
  query: "?raw",
  import: "default",
});

// Function to extract tags from markdown content
const extractTags = (content: string, docSlug: string): string[] => {
  const tags: string[] = [];

  // Add document-specific tags based on filename
  const documentTags: Record<string, string[]> = {
    index: ["documentation", "overview", "getting-started"],
    components: ["react", "components", "ui", "typescript"],
    "api-reference": ["api", "reference", "methods", "endpoints"],
    "getting-started": ["tutorial", "setup", "beginner", "guide"],
    "styling-guide": ["css", "sass", "tailwind", "design", "styling"],
    "header-examples": ["headers", "examples", "markdown", "formatting"],
    PDF_GENERATION_GUIDE: ["pdf", "generation", "export", "print"],
    README: ["readme", "documentation", "system"],
    "this-code-review-comment-made-me-quit-and-id-write-it-again": [
      "code-review",
      "career",
      "experience",
      "story",
    ],
  };

  // Add predefined tags for this document
  if (documentTags[docSlug]) {
    tags.push(...documentTags[docSlug]);
  }

  // Extract tags from content patterns
  const contentLower = content.toLowerCase();

  // Technology tags
  if (contentLower.includes("react")) tags.push("react");
  if (contentLower.includes("typescript") || contentLower.includes("tsx"))
    tags.push("typescript");
  if (contentLower.includes("vite")) tags.push("vite");
  if (contentLower.includes("tailwind")) tags.push("tailwindcss");
  if (contentLower.includes("scss") || contentLower.includes("sass"))
    tags.push("scss");
  if (contentLower.includes("markdown")) tags.push("markdown");
  if (contentLower.includes("pdf")) tags.push("pdf");
  if (contentLower.includes("javascript") || contentLower.includes("js"))
    tags.push("javascript");

  // Content type tags
  if (contentLower.includes("tutorial") || contentLower.includes("guide"))
    tags.push("tutorial");
  if (contentLower.includes("example")) tags.push("examples");
  if (contentLower.includes("documentation")) tags.push("documentation");
  if (contentLower.includes("reference")) tags.push("reference");

  // Remove duplicates and return
  return [...new Set(tags)];
};

const DocPage: React.FC = () => {
  const location = useLocation();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [availableDocs, setAvailableDocs] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  // Get the current document slug from the path or default to 'index'
  // Extract path after /docs/ and decode URL-encoded characters
  const pathSegments = location.pathname.split('/docs/');
  const currentSlug = pathSegments.length > 1 && pathSegments[1] 
    ? decodeURIComponent(pathSegments[1]) 
    : "index";

  useEffect(() => {
    // Get list of available documents
    const docNames = Object.keys(markdownModules)
      .map((path) => {
        // Extract path relative to docs folder, removing ../docs/ and .md extension
        const match = path.match(/\.\.\/docs\/(.+)\.md$/);
        return match ? match[1] : "";
      })
      .filter(Boolean);

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
        const extractedTags = extractTags(
          markdownContent as string,
          currentSlug
        );
        setTags(extractedTags);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load document"
        );
        console.error("Error loading markdown:", err);
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
              <p className="text-gray-700 dark:text-gray-300">
                Available documents:
              </p>
              <ul className="list-disc list-inside text-blue-600 dark:text-blue-400">
                {availableDocs.map((doc) => (
                  <li key={doc}>
                    <Link to={`/docs/${doc}`} className="hover:underline">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Sidebar */}
          <aside className="xl:w-80 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl sticky top-8">
              <h2 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Documentation
              </h2>
              <nav className="space-y-3">
                {availableDocs.map((doc) => {
                  // Encode each path segment separately for nested paths
                  const encodedDoc = doc.split('/').map(segment => encodeURIComponent(segment)).join('/');
                  return (
                    <Link
                      key={doc}
                      to={`/docs/${encodedDoc}`}
                      className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                        currentSlug === doc
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 hover:transform hover:scale-102"
                      }`}
                    >
                      {formatDocTitle(doc)}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <Link
                  to="/"
                  className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
                >
                  <span>←</span>
                  Back to Home
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
                    {/* Main content */}
                    {/* Main Content */}
          <main className="flex-1 max-w-none">
            <div className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-12 shadow-2xl">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
                  <p className="text-slate-600 text-lg">Loading documentation...</p>
                </div>
              ) : content ? (
                <>
                  <div className="prose prose-slate prose-lg max-w-none">
                    <MarkdownRenderer content={content} />
                  </div>
                  {tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-24">
                  <div className="text-6xl mb-6">📄</div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Document not found
                  </h2>
                  <p className="text-slate-600 text-lg">
                    The requested documentation page could not be loaded.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocPage;
