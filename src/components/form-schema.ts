import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Title must be 3 Characters"),
  content: z.string().min(5, "Content must be 5 Characters"),
});

export type PostFormData = z.infer<typeof postSchema>;