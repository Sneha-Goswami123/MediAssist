"use client";

import { useForm } from "react-hook-form";
import api from "@/services/api";

export default function AppointmentPage() {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {

    try {

      const response = await api.post(
        "/appointments/",
        data
      );

      alert("Appointment booked successfully ✅");

      console.log(response.data);

      reset();

    } catch (error) {

      console.log(error);

      alert("Booking failed ❌");
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center mb-2">
          📅 Book Appointment
        </h1>

        <p className="text-center text-slate-600 mb-8">
          Schedule an appointment with your doctor
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium">
              Doctor Name
            </label>

            <input
              {...register("doctor_name")}
              placeholder="Enter doctor name"
              className="
                w-full
                border
                border-slate-300
                p-3
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Appointment Time
            </label>

            <input
              {...register("appointment_time")}
              placeholder="Example: 2026-06-10 10:00 AM"
              className="
                w-full
                border
                border-slate-300
                p-3
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              rounded-lg
              font-semibold
            "
          >
            Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}