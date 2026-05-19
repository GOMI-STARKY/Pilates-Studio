"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl border border-black-15 bg-white p-6 md:p-8">
      {status === "success" && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
          Message sent! We&rsquo;ll get back to you within one business day.
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-name" className="text-sm font-semibold text-dark">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-black-15 bg-transparent px-4 py-3 text-base text-dark outline-none transition-colors focus:border-brand-blue md:text-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-email" className="text-sm font-semibold text-dark">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-black-15 bg-transparent px-4 py-3 text-base text-dark outline-none transition-colors focus:border-brand-blue md:text-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className="text-sm font-semibold text-dark">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-black-15 bg-transparent px-4 py-3 text-base text-dark outline-none transition-colors focus:border-brand-blue md:text-lg"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-xl border border-brand-blue bg-brand-blue px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-blue-hover disabled:opacity-50 md:self-start md:px-3 md:py-1.5 md:text-lg"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
