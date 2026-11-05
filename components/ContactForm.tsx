"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "254768845834";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) return;

    const text = [
      "Hello Mutegi Alex,",
      "",
      `My name is ${name}.`,
      `Email: ${email}`,
      service ? `Service: ${service}` : "",
      "",
      message,
    ].filter(Boolean).join("\n");

    setSubmitted(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="border border-zinc-800 p-6 md:p-8" noValidate={false}>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="text-zinc-400">Name <span aria-hidden="true">*</span></span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className="border border-zinc-800 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-zinc-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="text-zinc-400">Email <span aria-hidden="true">*</span></span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="border border-zinc-800 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-zinc-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
          />
        </label>
      </div>

      <label className="mt-6 grid gap-2 text-sm">
        <span className="text-zinc-400">What do you need?</span>
        <select
          name="service"
          defaultValue=""
          className="border border-zinc-800 bg-[#080808] px-4 py-3 text-white outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
        >
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
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me what you are building, what you need help with, and your ideal timeline."
          className="resize-y border border-zinc-800 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-zinc-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-zinc-600">
          Submitting opens WhatsApp with your project details ready to send.
        </p>
        <button
          type="submit"
          className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          Start a conversation ↗
        </button>
      </div>

      {submitted && (
        <p className="mt-5 text-sm text-[var(--accent)]" role="status" aria-live="polite">
          Your WhatsApp message is ready. Send it to start the conversation.
        </p>
      )}
    </form>
  );
}
