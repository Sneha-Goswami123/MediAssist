"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import api from "@/services/api";

export default function SymptomCheckerPage() {

  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSymptoms = async () => {

    try {

      setLoading(true);

      const response = await api.post(
        "/ai/symptom-checker",
        {
          symptoms,
        }
      );

      setAnalysis(
        response.data.analysis
      );

    } catch (error) {

      console.log(error);

      alert("AI analysis failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          🩺 AI Symptom Checker
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">

          <textarea
            rows={6}
            placeholder="Enter symptoms..."
            value={symptoms}
            onChange={(e) =>
              setSymptoms(e.target.value)
            }
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          <button
            onClick={checkSymptoms}
            className="
              mt-4
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
            "
          >
            Check Symptoms
          </button>

        </div>

        {loading && (
          <div className="mt-6">
            Analyzing symptoms...
          </div>
        )}

        {analysis && (

          <div
            className="
              mt-6
              bg-white
              p-6
              rounded-xl
              shadow
            "
          >

            <h2 className="text-2xl font-bold mb-4">
              AI Analysis
            </h2>

            <div className="prose max-w-none">
              <ReactMarkdown>
                {analysis}
              </ReactMarkdown>
            </div>

          </div>

        )}

      </div>

    </div>
  );
}