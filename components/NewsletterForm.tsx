"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full flex-1 rounded-xl border border-black-15 bg-transparent px-4 py-3 text-base text-dark placeholder:text-black-50 outline-none transition-colors focus:border-brand-green md:text-lg"
          name="email"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-green-hover disabled:opacity-50 md:px-3 md:py-1.5 md:text-lg md:shrink-0"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "success" && (
        <p className="text-center text-xs text-brand-green md:text-left">
          You&rsquo;re subscribed!
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-xs text-red-500 md:text-left">
          Something went wrong. Try again.
        </p>
      )}
      {status === "idle" && (
        <p className="text-center text-xs text-dark md:text-left">
          We respect your privacy. Unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
