import { z } from 'zod';

export const formSchema = z.object({
  name: z.string()
    .min(1, { message: "Service Request Name is required" }),
  description: z.string()
    .min(1, { message: "Service Request Description is required" }),
  creationDate: z.string()
    .refine(date => !isNaN(Date.parse(date)), { message: "Invalid date format" })
    .transform(date => new Date(date)),
  severity: z.enum(["Low", "Medium", "High"], { 
    errorMap: () => ({ message: "Severity must be Low, Medium, or High" })
  }),
  reporterName: z.string()
    .min(1, { message: "Reporter Name is required" }),
  contactInformation: z.string()
    .email({ message: "Invalid email address" }),
  location: z.string()
    .min(1, { message: "Location is required" }),
});
