import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  email: z.string().email("Must be a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
  fullName: z.string().min(1, "Full name is required"),
  dob: z.date({ required_error: "Date of birth is required" }),
  address: z.string().min(5, "Address is required"),
  country: z.string().min(2, "Country is required"),
  governmentId: z.string().min(3, "ID number is required"),
  recoveryEmail: z.string().email("Must be a valid email"),
  currency: z.string().min(1, "Currency selection is required"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
