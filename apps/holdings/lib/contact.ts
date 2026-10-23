export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export const contactSubjects = [
  "General enquiry",
  "Partnership",
  "Subsidiary services",
  "Career",
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+()\d\s-]{7,20}$/;

/** Shared by the client form and the API route so both enforce the same rules. */
export function validateContact(input: Partial<Record<keyof ContactPayload, unknown>>): {
  data: ContactPayload;
  errors: ContactErrors;
} {
  const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");
  const data: ContactPayload = {
    name: str(input.name),
    email: str(input.email),
    phone: str(input.phone),
    subject: str(input.subject),
    message: str(input.message),
  };

  const errors: ContactErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  else if (data.name.length > 120) errors.name = "Name is too long.";
  if (!emailPattern.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !phonePattern.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!contactSubjects.includes(data.subject as (typeof contactSubjects)[number])) {
    errors.subject = "Please choose a subject.";
  }
  if (data.message.length < 10) errors.message = "Please enter a message of at least 10 characters.";
  else if (data.message.length > 5000) errors.message = "Message is too long (5000 characters max).";

  return { data, errors };
}
