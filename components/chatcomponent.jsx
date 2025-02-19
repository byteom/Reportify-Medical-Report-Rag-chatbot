import React from 'react';
import { Textarea } from './ui/textarea';
import { useChat } from 'ai/react';
import { Button } from './ui/button';
import { CornerDownLeft, Loader2 } from 'lucide-react';
import { Badge } from './ui/badge';
import Messages from './messages1';

const ChatComponent = ({ reportData }) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "api/medichatgemini",
    });

  return (
    <div
      className="h-full relative flex flex-col min-h-[50vh] rounded-xl p-4 gap-4"
      style={{ backgroundColor: "#0B132B" }} // Background color
    >
      <Badge
        variant={'outline'}
        className={`absolute right-3 top-1.5 ${reportData && "bg-[#00B612]"}`}
        style={{ color: "#3A506B", borderColor: "#3A506B" }} // Text and border color
      >
        {reportData ? "✓ Report Added" : "No Report Added"}
      </Badge>
      <div className="flex-1" />
      <Messages messages={messages} isLoading={isLoading} />
      <form
        className="relative overflow-hidden rounded-lg border bg-background"
        style={{ backgroundColor: "#1C2541", borderColor: "#3A506B" }} // Background and border color
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              reportData: reportData || "",
            },
          });
        }}
      >
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your query here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          style={{ backgroundColor: "#1C2541", color: "#FFFFFF" }} // Background and text color
        />
        <div className="flex items-center p-3 pt-0">
          <Button
            disabled={isLoading}
            type="submit"
            size="sm"
            className="ml-auto"
            style={{ backgroundColor: "#3A506B", color: "#0B132B" }} // Background and text color
          >
            {isLoading ? "Analysing..." : "3. Ask"}
            {isLoading ? (
              <Loader2 className="size-3.5 animate-spin" />
            ) : (
              <CornerDownLeft className="size-3.5" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;