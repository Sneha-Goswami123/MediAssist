"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import api from "@/services/api";

export default function ChatHistoryPage() {

  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {

    try {

      const response = await api.get(
        "/chatbot/history"
      );

      setHistory(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          💬 Chat History
        </h1>

        <div className="space-y-6">

          {history.map((chat) => (

            <div
              key={chat.id}
              className="
                bg-white
                p-6
                rounded-xl
                shadow
              "
            >

              <h3 className="font-bold text-lg mb-2">
                👤 User
              </h3>

              <p className="mb-6">
                {chat.message}
              </p>

              <h3 className="font-bold text-lg mb-2">
                🤖 AI Response
              </h3>

              <div className="prose max-w-none">

                <ReactMarkdown>
                  {chat.response}
                </ReactMarkdown>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}