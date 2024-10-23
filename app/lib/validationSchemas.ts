import { z } from "zod";

export const titleSchema = z.object({
  titleName: z.string().min(4, "Title name is required"),
  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Status is required" }),
  }),
});
