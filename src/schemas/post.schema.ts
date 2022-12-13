import { z } from "zod";

export const createUpdatePostSchema = z.object({
  id: z.string().optional(),
  userId: z.number(),
  title: z.string().min(1).max(256, "Maxlength should be 256"),
  body: z.string().min(15),
});

export type createUpdatePostInput = z.TypeOf<typeof createUpdatePostSchema>;
