"use client";

import { group } from "@arismile/brand";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactSubjects, validateContact, type ContactErrors, type ContactPayload } from "@/lib/contact";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "unavailable"; mailto: string }
  | { kind: "error"; message: string };

const fieldClass =
  "w-full rounded-[3px] border border-black/15 bg-white px-4 py-3 text-[15px] text-black placeholder:text-black/40 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/40";

function buildMailto(data: ContactPayload) {
  const body = `${data.message}\n\n${data.name}${data.phone ? `\n${data.phone}` : ""}\n${data.email}`;
  return `mailto:${group.email}?subject=${encodeURIComponent(`${data.subject} — ${data.name}`)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));
    const { data, errors: found } = validateContact(formData);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ kind: "idle" });
      const firstInvalid = form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`);
      firstInvalid?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, company_website: formData.company_website ?? "" }),
      });
      if (response.ok) {
        form.reset();
        setStatus({ kind: "sent" });
        return;
      }
      const result = (await response.json().catch(() => ({}))) as { error?: string; errors?: ContactErrors };
      if (result.error === "validation" && result.errors) {
        setErrors(result.errors);
        setStatus({ kind: "idle" });
      } else if (result.error === "not_configured") {
        setStatus({ kind: "unavailable", mailto: buildMailto(data) });
      } else {
        setStatus({
          kind: "error",
          message: "We could not send your message right now. Please try again, or email us directly.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "We could not reach the server. Please check your connection and try again.",
      });
    }
  }

  const describedBy = (field: keyof ContactPayload) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} className={fieldClass} />
        </Field>
        <Field label="Email Address" name="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} className={fieldClass} />
        </Field>
        <Field label="Phone Number" name="phone" optional error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} className={fieldClass} />
        </Field>
        <Field label="Subject" name="subject" error={errors.subject}>
          <select id="subject" name="subject" required defaultValue="" aria-invalid={Boolean(errors.subject)} aria-describedby={describedBy("subject")} className={fieldClass}>
            <option value="" disabled>
              Choose a subject
            </option>
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" name="message" error={errors.message}>
        <textarea id="message" name="message" rows={6} required aria-invalid={Boolean(errors.message)} aria-describedby={describedBy("message")} className={fieldClass} />
      </Field>

      {/* Honeypot field, hidden from people and assistive technology. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status.kind === "submitting"}
        className="group inline-flex items-center gap-3 rounded-[3px] bg-brand-yellow px-7 py-3.5 text-[15px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-wait disabled:opacity-70"
      >
        {status.kind === "submitting" ? (
          <>
            <LoaderCircle aria-hidden className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {status.kind === "sent" ? (
          <p className="border-l-4 border-brand-green bg-brand-green/10 px-4 py-3 text-[15px] text-ink">
            Thank you — your message has been sent. Our team will get back to you shortly.
          </p>
        ) : null}
        {status.kind === "unavailable" ? (
          <div className="border-l-4 border-brand-yellow bg-brand-yellow/15 px-4 py-3 text-[15px] text-ink">
            <p>Online messaging is not available yet, so your message has not been sent.</p>
            <p className="mt-1">
              Please{" "}
              <a href={status.mailto} className="font-semibold underline">
                email it to {group.email}
              </a>{" "}
              (your message is pre-filled) or call{" "}
              <a href={group.phone.href} className="font-semibold underline">
                {group.phone.display}
              </a>
              .
            </p>
          </div>
        ) : null}
        {status.kind === "error" ? (
          <p className="border-l-4 border-red-600 bg-red-50 px-4 py-3 text-[15px] text-red-900">{status.message}</p>
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
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-semibold uppercase tracking-wide text-ink">
        {label} {optional ? <span className="font-normal normal-case text-body">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-[13px] text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
