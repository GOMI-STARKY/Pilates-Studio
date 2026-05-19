"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/admin");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-5">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-6 rounded-2xl border border-black-15 bg-white p-8"
      >
        <h1 className="font-serif text-3xl font-semibold tracking-wide text-dark">
          Admin Login
        </h1>

        {error && (
          <p className="text-sm text-red-500 bg-red-50 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-dark">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-black-15 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-brand-blue"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-dark">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-black-15 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-brand-blue"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl border border-brand-blue bg-brand-blue px-3 py-3 text-sm font-medium text-white transition hover:bg-brand-blue-hover"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
