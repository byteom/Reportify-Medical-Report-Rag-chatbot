import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import Markdown from './markdown';

const MessageBox = ({ role, content }) => {
  return (
    <Card
      className="overflow-hidden"
      style={{ backgroundColor: "##FFFFFF", borderColor: "#FFFFFF" }} // Background and border color
    >
      <CardContent className="p-6 text-sm" style={{ color: "#FFFFFF" }}> {/* Text color */}
        <Markdown text={content} />
      </CardContent>
      {role !== "user" && (
        <CardFooter
          className="border-t px-6 py-3 text-xs"
          style={{ backgroundColor: "#0B132B", borderColor: "#3A506B", color: "#FFFFFF" }} // Background, border, and text color
        >
          Disclaimer: The medical advice and recommendations provided by this
          application are for informational purposes only and should not
          replace professional medical diagnosis, treatment, or advice.
        </CardFooter>
      )}
    </Card>
  );
};

export default MessageBox;