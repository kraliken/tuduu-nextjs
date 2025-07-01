import { z } from "zod/v4";

// Schema for signing users in
export const signInFormSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(5, 'Password must be at least 5 characters'),
});

export const todoFormSchema = z.object({
  category: z.enum(['personal', 'work', 'development'], {
    errorMap: () => ({ message: 'Category must be personal, work, or development' }),
  }),
  title: z
    .string()
    .min(3, 'Todo title must be at least 3 characters')
    .max(22, 'Todo title must be at most 22 characters'),
  description: z
    .string()
    .max(100, 'Description must be at most 100 characters'),
  deadline: z
    .string({
      required_error: "Due date is required",
      invalid_type_error: "Due date must be a string",
    })
    .min(1, "Due date is required")
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .transform((val) => new Date(val)),
});
