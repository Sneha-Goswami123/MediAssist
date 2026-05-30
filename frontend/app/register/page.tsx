"use client";

import { useForm } from "react-hook-form";
import api from "@/services/api";

export default function RegisterPage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {

    try {

      const response = await api.post(
        "/auth/register",
        data
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Registration failed");
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold mb-6 text-center">
          👤 Register
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >

          <input
            {...register("name")}
            placeholder="Full Name"
            className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <button
            className="
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
              hover:bg-green-700
            "
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}