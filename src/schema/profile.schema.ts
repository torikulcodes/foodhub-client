import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  logo: z.string().url("Logo must be a valid URL").optional().or(z.literal("")),
  coverImage: z.string().url("Cover image must be a valid URL").optional().or(z.literal("")),
  description: z.string().min(10, "Description too short").optional().or(z.literal("")),
  phone: z.string().min(6, "Phone is required"),
  address: z.string().min(5, "Address is required").optional().or(z.literal("")),
  workingHours: z.string().min(3, "Working hours required").optional().or(z.literal("")),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
