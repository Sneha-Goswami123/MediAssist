import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-slate-900">
              🏥 AI Health Assistant
            </h1>

            <p className="mt-4 text-xl text-slate-600">
              Smart Healthcare Platform Powered by AI
            </p>

          </div>

          <LogoutButton />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* User Management */}

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-3">
              👤 User Management
            </h2>

            <p className="text-slate-600 mb-4">
              Secure registration, login and profile management.
            </p>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>

              <Link
                href="/login"
                className="bg-slate-700 text-white px-4 py-2 rounded-lg"
              >
                Login
              </Link>

              <Link
                href="/profile"
                className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
              >
                Profile
              </Link>

            </div>

          </div>

          {/* Appointments */}

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-3">
              📅 Appointments
            </h2>

            <p className="text-slate-600 mb-4">
              Book and manage doctor appointments.
            </p>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/appointment"
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Book Appointment
              </Link>

              <Link
                href="/dashboard"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg"
              >
                Dashboard
              </Link>

            </div>

          </div>

          {/* AI Tools */}

          <div className="bg-white p-6 rounded-xl shadow md:col-span-2">

            <h2 className="text-2xl font-bold mb-3">
              🩺 AI Health Tools
            </h2>

            <p className="text-slate-600 mb-4">
              Use AI to analyze symptoms, reports and get healthcare guidance.
            </p>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/symptom-checker"
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Symptom Checker
              </Link>

              <Link
                href="/report-analyzer"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Report Analyzer
              </Link>

              <Link
                href="/chatbot"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                AI Chatbot
              </Link>

              <Link
                href="/chat-history"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                Chat History
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}