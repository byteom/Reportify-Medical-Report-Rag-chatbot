import React from 'react';
import MessageBox from './messagebox';

const Messages = ({ messages, isLoading }) => {
  return (
    <div
      className="flex flex-col gap-4"
      style={{ backgroundColor: "#FFFFFF" }} // Background color
    >
      {messages.map((m, index) => (
        <MessageBox key={index} role={m.role} content={m.content} />
      ))}
    </div>
  );
};

export default Messages;