import React from 'react';
import markdownit from 'markdown-it';
import DOMPurify from 'dompurify';

const md = markdownit();

const Markdown = ({ text }) => {
  const htmlContent = md.render(text);
  const sanitized = DOMPurify.sanitize(htmlContent);

  return (
    <div
      className="markdown-content prose max-w-full p-4 rounded-lg border shadow-md"
      style={{
        backgroundColor: "#FFFFFF", // Background color
        borderColor: "#3A506B", // Border color
        color: "#0b132b", // Text color
      }}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
};

export default Markdown;