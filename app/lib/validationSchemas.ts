import { z } from "zod";

export const titleSchema = z.object({
  titleName: z.string().min(4, "Title name is required"),
  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Status is required" }),
  }),
});

export const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required") // Ensure it's not empty
    .regex(/^\d+(\.\d{1,2})?$/, "Amount must be a valid number"), // Ensure it matches the number format
});

export const expenseSchema = z.object({
  branchName: z.string().min(1, "Branch name is required"),
  expenseNo: z.string().min(1, "Expense number is required"),
  expenseName: z.string().min(1, "Expense name is required"),
  amount: z
    .number()
    .positive("Amount must be a positive number")
    .min(0.01, "Amount must be at least 0.01"), // Ensures a minimum amount
  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Status is required" }),
  }),
});
