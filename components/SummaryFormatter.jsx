"use client";

import React from "react";

const SummaryFormatter = ({ summary }) => {
  // Function to format the summary text
  const formatSummary = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
      .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic text
      .replace(/Normal/g, '<span class="text-green-500">Normal</span>') // Green for normal
      .replace(/High/g, '<span class="text-red-500">High</span>') // Red for high
      .replace(/Low/g, '<span class="text-yellow-500">Low</span>') // Yellow for low
      .replace(/\n/g, "<br />"); // Line breaks
  };

  return (
    <div
      className="prose max-w-full p-4 rounded-lg border bg-background shadow-md"
      dangerouslySetInnerHTML={{ __html: formatSummary(summary) }}
    />
  );
};

export default SummaryFormatter;