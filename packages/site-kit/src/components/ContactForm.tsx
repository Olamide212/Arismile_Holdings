"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { validateContact, type ContactErrors, type ContactPayload } from "../contact";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "unavailable"; mailto: string }
  | { kind: "error"; message: string };

const fieldClass =
  "w-full rounded-(--radius) border border-fg/15 bg-bg px-4 py-3 text-[15px] text-fg placeholder:text-fg/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

interface ContactFormProps {
  companyName: string;
  services: string[];
  email: string;
  phone: { display: string; href: string };
}

export function ContactForm({ companyName, services, email, phone }: ContactFormProps) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function mailtoFor(data: ContactPayload) {
    const body = [data.message, "", data.name, data.company, data.phone, data.email].filter(Boolean).join("\n");
    return `mailto:${email}?subject=${encodeURIComponent(`${companyName}: ${data.service} — ${data.name}`)}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const { data, errors: found } = validateContact(raw, services);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ kind: "idle" });
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website_url: raw.website_url ?? "" }),
      });
      if (res.ok) {
        form.reset();
        setStatus({ kind: "sent" });
        return;
      }
      const result = (await res.json().catch(() => ({}))) as { error?: string; errors?: ContactErrors };
      if (result.error === "validation" && result.errors) {
        setErrors(result.errors);
        setStatus({ kind: "idle" });
      } else if (result.error === "not_configured") {
        setStatus({ kind: "unavailable", mailto: mailtoFor(data) });
      } else {
        setStatus({ kind: "error", message: "We could not send your message right now. Please try again, or email us directly." });
      }
    } catch {
      setStatus({ kind: "error", message: "We could not reach the server. Please check your connection and try again." });
    }
  }

  const describedBy = (f: keyof ContactPayload) => (errors[f] ? `${f}-error` : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-describedby="contact-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} className={fieldClass} />
        </Field>
        <Field label="Email address" name="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} className={fieldClass} />
        </Field>
        <Field label="Phone number" name="phone" optional error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} className={fieldClass} />
        </Field>
        <Field label="Company" name="company" optional error={errors.company}>
          <input id="company" name="company" autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby={describedBy("company")} className={fieldClass} />
        </Field>
      </div>
      <Field label="What is your enquiry about?" name="service" error={errors.service}>
        <select id="service" name="service" required defaultValue="" aria-invalid={Boolean(errors.service)} aria-describedby={describedBy("service")} className={fieldClass}>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" name="message" error={errors.message}>
        <textarea id="message" name="message" rows={6} required aria-invalid={Boolean(errors.message)} aria-describedby={describedBy("message")} className={fieldClass} />
      </Field>

      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="website_url">Leave this field empty</label>
        <input id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status.kind === "submitting"}
        className="group inline-flex items-center gap-2 rounded-(--radius) bg-primary px-7 py-3.5 font-semibold text-on-primary transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
      >
        {status.kind === "submitting" ? (
          <>
            <LoaderCircle aria-hidden className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <div id="contact-status" role="status" aria-live="polite">
        {status.kind === "sent" ? (
          <p className="rounded-(--radius) border-l-4 border-accent bg-surface px-4 py-3">
            Thank you — your message has been sent. We will get back to you shortly.
          </p>
        ) : null}
        {status.kind === "unavailable" ? (
          <div className="rounded-(--radius) border-l-4 border-highlight bg-surface px-4 py-3">
            <p>Online messaging is not available yet, so your message has not been sent.</p>
            <p className="mt-1">
              Please{" "}
              <a href={status.mailto} className="font-semibold underline">
                email it to {email}
              </a>{" "}
              (your message is pre-filled) or call{" "}
              <a href={phone.href} className="font-semibold underline">
                {phone.display}
              </a>
              .
            </p>
          </div>
        ) : null}
        {status.kind === "error" ? (
          <p className="rounded-(--radius) border-l-4 border-red-600 bg-red-50 px-4 py-3 text-red-900">{status.message}</p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: keyof ContactPayload;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-semibold uppercase tracking-wide">
        {label} {optional ? <span className="font-normal normal-case opacity-60">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-[13px] text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
