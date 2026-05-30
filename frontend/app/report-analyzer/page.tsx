"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import api from "@/services/api";

export default function ReportAnalyzerPage() {

  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeReport = async () => {

    if (!file) {
      alert("Please select a PDF");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const response = await api.post(
        "/reports/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setAnalysis(response.data.analysis);

    } catch (error) {

      console.log(error);

      alert("Analysis failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          📄 Medical Report Analyzer
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] || null
              )
            }
          />

          <button
            onClick={analyzeReport}
            className="
              mt-4
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
            "
          >
            Analyze Report
          </button>

        </div>

        {loading && (
          <div className="mt-6">
            Analyzing Report...
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
              AI Report Analysis
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