"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import api from "@/services/api";

export default function ChatbotPage() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {

      setLoading(true);

      const response = await api.post(
        "/chatbot/chat",
        {
          message,
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.reply,
      };

      setMessages((prev) => [
        ...prev,
        botMessage,
      ]);

    } catch (error) {

      console.log(error);

      alert("Chat failed");

    } finally {

      setLoading(false);

      setMessage("");
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          🤖 AI Health Chatbot
        </h1>

        <div
          className="
            bg-white
            rounded-xl
            shadow
            p-6
            h-[500px]
            overflow-y-auto
          "
        >

          {messages.map(
            (msg, index) => (

              <div
                key={index}
                className={`mb-4 ${
                  msg.sender === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >

                <div
                  className={`
                    inline-block
                    max-w-[80%]
                    px-4
                    py-3
                    rounded-xl
                    ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }
                  `}
                >

                  {msg.sender === "bot" ? (

                    <div className="prose prose-sm max-w-none">

                      <ReactMarkdown>
                        {msg.text}
                      </ReactMarkdown>

                    </div>

                  ) : (

                    msg.text

                  )}

                </div>

              </div>

            )
          )}

          {loading && (

            <div className="text-gray-500">
              AI is typing...
            </div>

          )}

          <div ref={messagesEndRef} />

        </div>

        <div className="flex gap-3 mt-4">

          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {
                sendMessage();
              }

            }}
            placeholder="Ask a health question..."
            className="
              flex-1
              border
              p-3
              rounded-lg
            "
          />

          <button
            onClick={sendMessage}
            className="
              bg-blue-600
              text-white
              px-6
              rounded-lg
            "
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}