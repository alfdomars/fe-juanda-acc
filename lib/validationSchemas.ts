import { z } from "zod";

export const titleSchema = z.object({
  titleName: z.string().min(4, "Title name is required"),
  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Status is required" }),
  }),
});

export const reportSchema = z.object({
  from: z.date({
    required_error: "Start date is required",
    invalid_type_error: "Start date must be a valid date",
  }),
  to: z.date({
    required_error: "End date is required",
    invalid_type_error: "End date must be a valid date",
  }),
});

export const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Amount must be a valid number"),
});

export const expenseSchema = z.object({
  branchName: z.string().min(1, "Branch name is required"),
  expenseNo: z.string().min(1, "Expense number is required"),
  expenseName: z.string().min(1, "Expense name is required"),
  amount: z
    .number()
    .positive("Amount must be a positive number")
    .min(0.01, "Amount must be at least 0.01"),
  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Status is required" }),
  }),
});
