import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

interface MarkdownComponentProps {
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Custom markdown components with consistent styling
 */
const markdownComponents = {
  h1: ({ ...props }: MarkdownComponentProps) => (
    <h1
      style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#2c3e50',
        marginTop: '0',
      }}
      {...props}
    />
  ),

  h2: ({ ...props }: MarkdownComponentProps) => (
    <h2
      style={{
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '14px',
        color: '#34495e',
        marginTop: '24px',
      }}
      {...props}
    />
  ),

  h3: ({ ...props }: MarkdownComponentProps) => (
    <h3
      style={{
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#34495e',
        marginTop: '20px',
      }}
      {...props}
    />
  ),

  p: ({ ...props }: MarkdownComponentProps) => (
    <p
      style={{
        marginBottom: '12px',
        lineHeight: '1.6',
        color: '#555',
        marginTop: '0',
      }}
      {...props}
    />
  ),

  ul: ({ ...props }: MarkdownComponentProps) => (
    <ul
      style={{
        marginBottom: '16px',
        paddingLeft: '20px',
        marginTop: '0',
      }}
      {...props}
    />
  ),

  li: ({ ...props }: MarkdownComponentProps) => (
    <li
      style={{
        marginBottom: '8px',
        lineHeight: '1.5',
        marginTop: '0',
      }}
      {...props}
    />
  ),

  table: ({ ...props }: MarkdownComponentProps) => (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '16px',
        border: '1px solid #ddd',
        marginTop: '16px',
      }}
      {...props}
    />
  ),

  th: ({ ...props }: MarkdownComponentProps) => (
    <th
      style={{
        padding: '12px',
        border: '1px solid #ddd',
        backgroundColor: '#f8f9fa',
        fontWeight: 'bold',
        textAlign: 'left',
      }}
      {...props}
    />
  ),

  td: ({ ...props }: MarkdownComponentProps) => (
    <td
      style={{
        padding: '12px',
        border: '1px solid #ddd',
      }}
      {...props}
    />
  ),

  code: ({ ...props }: MarkdownComponentProps) => (
    <code
      style={{
        backgroundColor: '#f1f3f4',
        padding: '2px 6px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '14px',
      }}
      {...props}
    />
  ),

  strong: ({ ...props }: MarkdownComponentProps) => (
    <strong
      style={{
        fontWeight: 'bold',
        color: '#2c3e50',
      }}
      {...props}
    />
  ),

  blockquote: ({ ...props }: MarkdownComponentProps) => (
    <blockquote
      style={{
        borderLeft: '4px solid #667eea',
        margin: '16px 0',
        padding: '12px 20px',
        backgroundColor: '#f8f9fa',
        fontStyle: 'italic',
        color: '#555',
      }}
      {...props}
    />
  ),

  hr: ({ ...props }: MarkdownComponentProps) => (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid #ddd',
        margin: '24px 0',
      }}
      {...props}
    />
  ),

  a: ({ ...props }: MarkdownComponentProps) => (
    <a
      style={{
        color: '#667eea',
        textDecoration: 'none',
        borderBottom: '1px solid transparent',
        transition: 'border-bottom-color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderBottomColor = '#667eea';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderBottomColor = 'transparent';
      }}
      {...props}
    />
  ),
};

/**
 * Main MarkdownRenderer component
 */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

/**
 * Export markdown components for custom usage
 */
export { markdownComponents };

/**
 * Export the main component as default
 */
export default MarkdownRenderer;
