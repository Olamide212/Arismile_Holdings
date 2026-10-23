export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+()\d\s-]{7,20}$/;

/** Shared by the form and the API handler so both enforce the same rules. */
export function validateContact(
  input: Partial<Record<keyof ContactPayload, unknown>>,
  allowedServices: readonly string[],
): { data: ContactPayload; errors: ContactErrors } {
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const data: ContactPayload = {
    name: str(input.name),
    email: str(input.email),
    phone: str(input.phone),
    company: str(input.company),
    service: str(input.service),
    message: str(input.message),
  };
  const errors: ContactErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  else if (data.name.length > 120) errors.name = "Name is too long.";
  if (!emailPattern.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !phonePattern.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (data.company.length > 160) errors.company = "Company name is too long.";
  if (!allowedServices.includes(data.service)) errors.service = "Please choose what your enquiry is about.";
  if (data.message.length < 10) errors.message = "Please enter a message of at least 10 characters.";
  else if (data.message.length > 5000) errors.message = "Message is too long (5000 characters max).";
  return { data, errors };
}

export const generalEnquiry = "General enquiry";
