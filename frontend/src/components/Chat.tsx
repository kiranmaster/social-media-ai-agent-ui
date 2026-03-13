import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useTheme } from "../context/ThemeContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

const renderMessageContent = (text: string) => {
  if (!text) return null;

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const imageRegex = /\.(jpg|jpeg|png|gif|webp)(\?[^\s]*)?$/i;

  const urls = text.match(urlRegex) || [];
  const images = urls.filter((url) => imageRegex.test(url));

  let displayText = text;

  images.forEach((img) => {
    displayText = displayText.replace(img, "");
  });

  return (
    <>
      <div className="whitespace-pre-wrap break-words">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                {children}
              </a>
            ),
            p: ({ children }) => <p className="mb-2">{children}</p>,
            ul: ({ children }) => (
              <ul className="list-disc ml-5 mb-2 space-y-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-5 mb-2 space-y-1">{children}</ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => (
              <strong className="font-semibold">{children}</strong>
            ),
          }}
        >
          {displayText}
        </ReactMarkdown>
      </div>

      {images.length > 0 && (
        <div className="mt-3 space-y-2">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Image"
              className="rounded-lg max-w-full h-auto"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = input;
    setInput("");
    setIsLoading(true);

    const agentMessageId = (Date.now() + 1).toString();
    const agentMessage: Message = {
      id: agentMessageId,
      text: "",
      sender: "agent",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, agentMessage]);
    let buffer = "";
    try {
      await fetchEventSource("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        onmessage(event) {
          if (event.data === "[DONE]") {
            setIsLoading(false);
            return;
          }
          buffer += event.data;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === agentMessageId
                ? { ...msg, text: msg.text + event.data }
                : msg,
            ),
          );
        },
        onerror(err) {
          console.error("SSE Error:", err);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === agentMessageId
                ? { ...msg, text: "Error: Failed to get response" }
                : msg,
            ),
          );
          setIsLoading(false);
          throw err;
        },
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col h-full"
      style={
        theme === "dark"
          ? {
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h100v100H0z" fill="%230b141a"/%3E%3Cpath d="M0 0L50 50M50 50L100 0M0 100L50 50M50 50L100 100" stroke="%23202c33" stroke-width="0.5" opacity="0.1"/%3E%3C/svg%3E")',
            }
          : { backgroundColor: "#f0f2f5" }
      }
    >
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "agent" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white font-bold text-xs">
                  AI
                </div>
              )}
              <div
                className={`max-w-[75%] px-3 py-2 rounded-lg shadow-sm relative ${
                  msg.sender === "user"
                    ? theme === "dark"
                      ? "bg-[#005c4b] text-white rounded-tr-none"
                      : "bg-[#d9fdd3] text-gray-800 rounded-tr-none"
                    : theme === "dark"
                      ? "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                      : "bg-white text-gray-800 rounded-tl-none"
                }`}
              >
                {msg.sender === "agent" && !msg.text ? (
                  <div className="flex space-x-1.5 py-1">
                    <div className="w-2 h-2 bg-[#00a884] rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-[#00a884] rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-[#00a884] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                ) : (
                  <div className="leading-relaxed text-sm">
                    {renderMessageContent(msg.text)}
                  </div>
                )}
              </div>
              {msg.sender === "user" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white font-bold text-xs">
                  U
                </div>
              )}
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </div>

      <div
        className={`${theme === "dark" ? "bg-[#202c33] border-[#2a3942]" : "bg-white border-gray-200"} border-t p-3`}
      >
        <div className="max-w-4xl mx-auto flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message"
            className={`flex-1 px-4 py-2.5 ${theme === "dark" ? "bg-[#2a3942] text-[#e9edef] placeholder-[#8696a0]" : "bg-gray-100 text-gray-800 placeholder-gray-500"} rounded-lg focus:outline-none`}
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="p-2.5 bg-[#00a884] hover:bg-[#06cf9c] text-white rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
