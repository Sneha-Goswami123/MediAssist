"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";

export default function DashboardPage() {

  const router = useRouter();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetchAppointments();

  }, []);

  const fetchAppointments = async () => {

    try {

      const response = await api.get(
        "/appointments/"
      );

      setAppointments(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteAppointment = async (
    id: number
  ) => {

    try {

      await api.delete(
        `/appointments/${id}`
      );

      fetchAppointments();

    } catch (error) {

      console.log(error);

      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          📅 Appointments Dashboard
        </h1>

        <div className="grid gap-6">

          {appointments.map(
            (appointment: any) => (

              <div
                key={appointment.id}
                className="
                  bg-white
                  rounded-xl
                  shadow
                  p-6
                "
              >

                <h2 className="text-2xl font-bold">
                  👨‍⚕️ {appointment.doctor_name}
                </h2>

                <p className="mt-2 text-slate-600">
                  {appointment.appointment_time}
                </p>

                <div className="mt-3">

                  <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                  appointment.status.toLowerCase() === "scheduled"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
              }`}
                >
              {appointment.status}
                </span>

                </div>

                <button
                  onClick={() =>
                    deleteAppointment(
                      appointment.id
                    )
                  }
                  className="
                    mt-4
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "
                >
                  Delete
                </button>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}