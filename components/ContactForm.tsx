"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { EASE } from "@/lib/motion";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const budgets = [
  "Under ₹8L / < $10k",
  "₹8L–20L / $10k–$25k",
  "₹20L–40L / $25k–$50k",
  "₹40L–80L / $50k–$100k",
  "₹80L+ / $100k+",
];
const projectTypes = [
  "Shopify store",
  "Custom website / admin panel",
  "Both Shopify & custom web",
  "Store management / support",
  "Not sure yet",
];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email doesn't look right.";
    if (!message) next.message = "Tell us a little about the project.";
    else if (message.length < 10) next.message = "A few more words, please.";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          company: String(data.get("company") || "").trim(),
          projectType: String(data.get("projectType") || "").trim(),
          budget: String(data.get("budget") || "").trim(),
          message: String(data.get("message") || "").trim(),
        }),
      });

      if (!res.ok) throw new Error("Send failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-card border border-border bg-surface p-10 text-center"
        role="status"
      >
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold">Message sent</h3>
        <p className="mt-2 text-text-muted">
          Thanks — we&apos;ll be in touch within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Name" name="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          aria-invalid={!!errors.name}
          className={inputClass(!!errors.name)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
          />
        </Field>
        <Field label="Company" name="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company Inc."
            className={inputClass(false)}
          />
        </Field>
      </div>

      <Field label="Project type" name="projectType" optional>
        <div className="relative">
          <select id="projectType" name="projectType" className={`${inputClass(false)} appearance-none pr-10`} defaultValue="">
            <option value="" disabled>
              What are you looking for?
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">▾</span>
        </div>
      </Field>

      <Field label="Budget" name="budget" optional>
        <div className="relative">
          <select id="budget" name="budget" className={`${inputClass(false)} appearance-none pr-10`} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">▾</span>
        </div>
      </Field>

      <Field label="Project details" name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Shopify store, custom website with admin, or both — what's the goal?"
          aria-invalid={!!errors.message}
          className={`${inputClass(!!errors.message)} resize-none`}
        />
      </Field>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Button type="submit" magnetic withArrow disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>
          <AnimatePresence>
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-red-400"
                role="alert"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <p className="text-xs text-text-muted">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          . We reply within one business day.
        </p>
      </div>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-text-muted/60 transition-colors duration-300 focus:border-accent focus:outline-none ${
    hasError ? "border-red-500/60" : "border-border"
  }`;
}

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="flex items-center justify-between text-sm font-medium">
        {label}
        {optional && <span className="font-mono text-[0.65rem] uppercase tracking-widest text-text-muted">Optional</span>}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-400" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
