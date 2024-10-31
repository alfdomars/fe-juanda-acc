"use client";

import { Box, Paper, Typography } from "@mui/material";
import InputField from "@/app/components/forms/InputField";
import SelectField from "@/app/components/forms/SelectField";
import Form from "@/app/components/forms/Form";
import SaveButton from "@/app/components/buttons/SaveButton";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { titleSchema } from "@/app/lib/validationSchemas";
import { useState } from "react";
import BackButton from "@/app/components/buttons/BackButton";

interface TitleFormValues {
  titleName: string;
  titleCode: string;
  status: string;
}

const defaultValues: TitleFormValues = {
  titleName: "",
  titleCode: "",
  status: "",
};

const TitleCreate = () => {
  const router = useRouter();

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const methods = useForm<TitleFormValues>({
    resolver: zodResolver(titleSchema),
    defaultValues,
  });

  const onSubmit = async (data: TitleFormValues) => {
    setSubmitError(null);
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      router.push("/administration/titles");
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
        Create Title
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Form onSubmit={onSubmit} methods={methods}>
          <InputField name="titleName" label="Title Name" />
          <InputField name="titleCode" label="Title Code" />
          <SelectField
            name="status"
            label="Status"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />
          {submitError && (
            <Typography color="error" variant="body2" gutterBottom>
              {submitError}
            </Typography>
          )}

          <Box display="flex" justifyContent="flex-end" gap={2}>
            <BackButton loading={loading} />
            <SaveButton
              onSave={methods.handleSubmit(onSubmit)}
              loading={loading}
            />
          </Box>
        </Form>
      </Paper>
    </Box>
  );
};

export default TitleCreate;
