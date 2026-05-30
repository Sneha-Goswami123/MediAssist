"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import api from "@/services/api";

export default function LoginPage() {

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {

    try {

      const response = await api.post(
        "/auth/login",
        data
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert("Login successful");

      router.push("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login failed");
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold mb-6 text-center">
          🔐 Login
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >

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
            type="submit"
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}