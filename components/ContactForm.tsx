"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setError("Unable to connect. Please try again or contact me on WhatsApp.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-zinc-800 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="text-zinc-400">Name <span aria-hidden="true">*</span></span>
          <input name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name"
            className="border border-zinc-800 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-zinc-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]" />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="text-zinc-400">Email <span aria-hidden="true">*</span></span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"
            className="border border-zinc-800 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-zinc-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]" />
        </label>
      </div>

      <label className="mt-6 grid gap-2 text-sm">
        <span className="text-zinc-400">What do you need?</span>
        <select name="service" defaultValue="" className="border border-zinc-800 bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]">
          <option value="">Select a service</option>
          <option>Web development</option>
          <option>System design & architecture</option>
          <option>Branding & graphics design</option>
          <option>Payment integration</option>
          <option>API & system integration</option>
          <option>Process automation</option>
          <option>Digital marketing / SEO</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="mt-6 grid gap-2 text-sm">
        <span className="text-zinc-400">Project details <span aria-hidden="true">*</span></span>
        <textarea name="message" required maxLength={5000} rows={6} placeholder="Tell me what you are building, what you need help with, and your ideal timeline."
          className="resize-y border border-zinc-800 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-zinc-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]" />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-zinc-600">Your enquiry will be sent securely to Mutegi Alex by email.</p>
        <button type="submit" disabled={state === "sending"}
          className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
          {state === "sending" ? "Sending..." : "Send enquiry ↗"}
        </button>
      </div>

      {state === "success" && <p className="mt-5 text-sm text-[var(--accent)]" role="status" aria-live="polite">Thanks — your enquiry has been sent. I&apos;ll get back to you soon.</p>}
      {state === "error" && <p className="mt-5 text-sm text-red-300" role="alert">{error}</p>}
    </form>
  );
}
