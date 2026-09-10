import { z } from "zod";

export const industries = [
  "Plumbing & trades",
  "Landscaping",
  "Interior design",
  "Clothing & lifestyle",
  "Other",
] as const;

export const services = [
  "Business website",
  "Online store",
  "Website redesign",
  "Not sure yet",
] as const;

export const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your business name.")
    .max(150),
  phone: z.string().trim().max(40).default(""),
  industry: z.enum(industries, {
    errorMap: () => ({ message: "Please choose your industry." }),
  }),
  service: z.enum(services, {
    errorMap: () => ({ message: "Please choose a service." }),
  }),
  message: z
    .string()
    .trim()
    .min(15, "Please tell us a little more about your project.")
    .max(4000),
  consent: z
    .boolean()
    .refine(Boolean, "Please agree so we can respond to your enquiry."),
  companyUrl: z.string().max(0, "Please leave this field empty.").default(""),
});
