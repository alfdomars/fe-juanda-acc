"use client";

import { Box, Paper, Typography } from "@mui/material";
import InputField from "@/app/components/forms/InputField";
import SelectField from "@/app/components/forms/SelectField";
import Form from "@/app/components/forms/Form";
import SaveButton from "@/app/components/buttons/SaveButton";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "@/app/lib/validationSchemas";
import { useState } from "react";
import BackButton from "@/app/components/buttons/BackButton";
import NumberFormatField from "@/app/components/forms/NumberFormatField";
import DatePickerField from "@/app/components/forms/DatePickerField";
import Grid from "@mui/material/Grid2";

interface ExpenseFormValues {
  branchName: string;
  expenseNo: string;
  expenseName: string;
  amount: number;
  status: string;
}

const defaultValues: ExpenseFormValues = {
  branchName: "",
  expenseNo: "",
  expenseName: "",
  amount: 0,
  status: "",
};

const ExpenseCreate = () => {
  const router = useRouter();

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const methods = useForm<ExpenseFormValues>({
    resolver: zodResolver(expenseSchema),
    defaultValues,
  });

  const onSubmit = async (data: ExpenseFormValues) => {
    setSubmitError(null);
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/administration/expenses");
    } catch (error) {
      console.error("Failed to submit the form", error);
      setSubmitError(
        "There was an issue submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Create Expense
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Form onSubmit={onSubmit} methods={methods}>
          <Grid
            container
            rowSpacing={{ xs: 0, md: 0 }}
            columnSpacing={{ xs: 0, md: 2 }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <DatePickerField name="txDt" label="Date Expense" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectField
                name="branchName"
                label="Branch Name"
                options={[
                  { label: "Sipiongot", value: "sipiongot" },
                  { label: "Labuan Batu", value: "labuanbatu" },
                  { label: "Meruya", value: "meruya" },
                  { label: "Bekasi Timur", value: "bekasitimur" },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <InputField name="expenseNo" label="Expense No." />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <InputField name="expenseName" label="Expense Name" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <NumberFormatField name="amount" label="Amount" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectField
                name="status"
                label="Status"
                options={[
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                ]}
              />
            </Grid>

            {submitError && (
              <Grid size={{ xs: 12 }}>
                <Typography color="error" variant="body2" gutterBottom>
                  {submitError}
                </Typography>
              </Grid>
            )}
            <Grid size={{ xs: 12 }}>
              <Box
                display="flex"
                justifyContent="flex-end"
                gap={2}
                sx={{ mt: 2 }}
              >
                <BackButton loading={loading} />
                <SaveButton
                  onSave={methods.handleSubmit(onSubmit)}
                  loading={loading}
                />
              </Box>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Box>
  );
};

export default ExpenseCreate;
