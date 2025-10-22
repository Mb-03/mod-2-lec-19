import z from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(6, "Username must be at least 3 characthers long")
    .max(20, "Username cant be more than 20 characthers"),
  email: z.email("invalid Email Format"),
  password: z.string().min(6, "Password must be at least 6 characthers long"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords Do not match",
    path: ["confirmPassword"]
} )

export const loginSchema = z.object({
  email: z.email("invalid Email Format"),
  password: z.string().min(6, "Password must be at least 6 characthers long"),
});
