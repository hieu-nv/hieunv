import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "../styles/markdown.scss";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="markdown-content prose prose-lg max-w-none text-left">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Custom components for better styling with clean background
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-medium mt-6 mb-3 text-gray-800">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-medium mt-5 mb-3 text-gray-700 border-l-4 border-blue-500 pl-3 bg-gray-50 rounded-r-lg py-2">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg font-medium mt-4 mb-2 text-gray-700 uppercase tracking-wide">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-semibold mt-3 mb-2 text-gray-600 italic">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-gray-700 leading-7">
              {children}
            </p>
          ),
          code: (props) => {
            const { className, children } = props;
            const match = /language-(\w+)/.exec(className || "");
            const inline = !match;
            return !inline && match ? (
              <div className="relative my-6 group">
                {/* Language label */}
                {match && (
                  <div className="absolute top-0 right-0 z-20 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-bl-xl rounded-tr-xl bg-gray-100 border-l border-b border-gray-300">
                    {match[1].toLowerCase() === "typescript"
                      ? "TypeScript"
                      : match[1].toLowerCase() === "tsx"
                      ? "TSX"
                      : match[1].toLowerCase() === "ts"
                      ? "TS"
                      : match[1].toLowerCase() === "javascript"
                      ? "JavaScript"
                      : match[1].toLowerCase() === "jsx"
                      ? "JSX"
                      : match[1].toLowerCase() === "js"
                      ? "JS"
                      : match[1].toUpperCase()}
                  </div>
                )}

                {/* Content container */}
                <div className="relative z-10 bg-gray-900 border border-gray-300 rounded-xl shadow-lg overflow-hidden">
                  <pre className="p-6 overflow-x-auto text-left m-0 bg-transparent">
                    <code
                      className={`${className} text-sm leading-relaxed block text-left relative z-10`}
                      style={{
                        fontFamily:
                          "'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'SF Mono', 'Roboto Mono', monospace",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "left",
                        whiteSpace: "pre",
                        tabSize: "2",
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  </pre>
                </div>

                {/* Copy button */}
                <button
                  className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md border border-gray-300 text-xs"
                  onClick={() => {
                    if (typeof children === "string") {
                      navigator.clipboard.writeText(children);
                    }
                  }}
                  title="Copy code"
                >
                  📋
                </button>
              </div>
            ) : (
              <code
                className="bg-gray-100 px-2.5 py-1 rounded-lg text-sm font-mono text-gray-800 border border-gray-300"
                style={{
                  fontFamily:
                    "'Fira Code', 'JetBrains Mono', 'Monaco', monospace",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 p-4 my-4 bg-blue-50 rounded-lg italic text-gray-800">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside mb-4 space-y-2 text-gray-700 pl-6">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside mb-4 space-y-2 text-gray-700 pl-6">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-700 leading-relaxed">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-gray-300 shadow-sm bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-50">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="bg-white divide-y divide-gray-200">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-gray-200 last:border-b-0">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
