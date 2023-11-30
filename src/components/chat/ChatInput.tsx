import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useContext, useRef } from "react";
import { ChatContext } from "./ChatContext";

interface ChatInputProps {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: ChatInputProps) => {
  const { addMessage, handleInputChange, isLoading, message } =
    useContext(ChatContext);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className=" absolute bottom-0 left-0 w-full">
      <form className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="flex relative h-full flex-1 items-stretch md:flex-col">
          <div className="flex relative flex-col w-full flex-grow p-4">
            <div className="relative">
              <Textarea
                ref={textAreaRef}
                placeholder="Ask Your Queries... "
                autoFocus
                rows={1}
                maxRows={4}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    addMessage();
                    textAreaRef.current?.focus();
                  }
                }}
                onChange={handleInputChange}
                value={message}
                className="resize-none pr-12 text-base py-3 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch "
              />
              <Button
                disabled={isLoading || isDisabled}
                type="submit"
                onClick={() => {
                  addMessage();
                  textAreaRef.current?.focus();
                }}
                className="absolute bottom-1.5 right-[8px]"
              >
                <SendHorizonal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
