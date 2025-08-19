import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import '../styles/markdown.scss';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="markdown-content prose prose-lg dark:prose-invert max-w-none text-left">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Custom components for better styling with liquid glass background
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg border-b border-white/30 pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4 text-white/95 drop-shadow-md">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-medium mt-6 mb-3 text-white/90 drop-shadow-md">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-medium mt-5 mb-3 text-white/85 border-l-4 border-blue-400 pl-3 drop-shadow-sm bg-white/5 rounded-r-lg py-2">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg font-medium mt-4 mb-2 text-white/80 uppercase tracking-wide drop-shadow-sm">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-semibold mt-3 mb-2 text-white/75 italic drop-shadow-sm">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-white/85 leading-7 drop-shadow-sm">
              {children}
            </p>
          ),
          code: (props) => {
            const { className, children } = props;
            const match = /language-(\w+)/.exec(className || '');
            const inline = !match;
            return !inline && match ? (
              <div className="relative my-6 group">
                {/* Language label with TypeScript-specific styling */}
                {match && (
                  <div className={`absolute top-0 right-0 z-10 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg backdrop-blur-sm border-l border-b ${
                    match[1].toLowerCase() === 'typescript' || match[1].toLowerCase() === 'tsx' || match[1].toLowerCase() === 'ts' 
                      ? 'bg-blue-600/90 border-blue-400/30' 
                      : match[1].toLowerCase() === 'javascript' || match[1].toLowerCase() === 'jsx' || match[1].toLowerCase() === 'js'
                      ? 'bg-yellow-600/90 border-yellow-400/30'
                      : 'bg-purple-600/90 border-purple-400/30'
                  }`}>
                    {match[1].toLowerCase() === 'typescript' ? 'TypeScript' : 
                     match[1].toLowerCase() === 'tsx' ? 'TSX' :
                     match[1].toLowerCase() === 'ts' ? 'TS' :
                     match[1].toLowerCase() === 'javascript' ? 'JavaScript' :
                     match[1].toLowerCase() === 'jsx' ? 'JSX' :
                     match[1].toLowerCase() === 'js' ? 'JS' :
                     match[1].toUpperCase()}
                  </div>
                )}
                <pre className="bg-gradient-to-br from-gray-900/90 via-blue-900/20 to-purple-900/30 backdrop-blur-xl border-2 border-white/30 rounded-xl p-6 overflow-x-auto shadow-2xl relative text-left">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-xl"></div>
                  <code 
                    className={`${className} text-sm leading-relaxed block text-left relative z-10`} 
                    style={{ 
                      fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'SF Mono', 'Roboto Mono', monospace",
                      fontSize: '14px',
                      lineHeight: '1.7',
                      textAlign: 'left',
                      whiteSpace: 'pre',
                      tabSize: '2'
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                </pre>
                {/* Copy button overlay */}
                <button 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 hover:bg-white/20 text-white p-2 rounded-md backdrop-blur-sm border border-white/20 text-xs"
                  onClick={() => {
                    if (typeof children === 'string') {
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
                className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-sm font-mono text-blue-100 border border-blue-400/40 shadow-sm hover:shadow-md transition-shadow" 
                style={{ 
                  fontFamily: "'Fira Code', 'JetBrains Mono', 'Monaco', monospace",
                  fontSize: '13px',
                  fontWeight: '500'
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-400 pl-4 py-3 my-4 bg-white/10 backdrop-blur-sm rounded-r-lg italic text-white/90 shadow-lg">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-white/85 drop-shadow-sm">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-white/85 drop-shadow-sm">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="ml-4 text-white/85">{children}</li>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-blue-300 hover:text-blue-200 hover:underline font-medium drop-shadow-sm transition-colors"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-white/30 shadow-lg backdrop-blur-sm bg-white/5">
              <table className="min-w-full divide-y divide-white/20">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-white/10 backdrop-blur-sm">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="bg-white/5 backdrop-blur-sm divide-y divide-white/10">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="even:bg-white/5 hover:bg-white/10 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider border-b border-white/20 drop-shadow-sm">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white/85 border-b border-white/10 last:border-b-0 drop-shadow-sm">
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
