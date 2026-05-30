"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function ProfilePage() {

  const [profile, setProfile] =
    useState<any>(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const response = await api.get(
        "/auth/profile"
      );

      setProfile(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  if (!profile) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto">

        <div className="bg-white p-8 rounded-xl shadow">

          <h1 className="text-4xl font-bold mb-8">
            👤 User Profile
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-50 p-4 rounded-lg">

              <p className="font-bold text-slate-700">
                Name
              </p>

              <p className="text-lg mt-1">
                {profile.name}
              </p>

            </div>

            <div className="bg-slate-50 p-4 rounded-lg">

              <p className="font-bold text-slate-700">
                Email
              </p>

              <p className="text-lg mt-1 break-all">
                {profile.email}
              </p>

            </div>

            <div className="bg-slate-50 p-4 rounded-lg">

              <p className="font-bold text-slate-700">
                Role
              </p>

              <p className="text-lg mt-1 capitalize">
                {profile.role}
              </p>

            </div>

            <div className="bg-green-50 p-4 rounded-lg">

              <p className="font-bold text-green-700">
                📅 Total Appointments
              </p>

              <p className="text-3xl font-bold mt-2">
                {profile.appointments}
              </p>

            </div>

            <div className="bg-blue-50 p-4 rounded-lg">

              <p className="font-bold text-blue-700">
                🤖 Total Chats
              </p>

              <p className="text-3xl font-bold mt-2">
                {profile.chats}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}