"use client";

import { Box, Paper, Typography } from "@mui/material";
import InputField from "@/app/components/forms/InputField";
import SelectField from "@/app/components/forms/SelectField";
import Form from "@/app/components/forms/Form";
import SaveButton from "@/app/components/buttons/SaveButton"; // Import the new SaveButton
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { titleSchema } from "@/app/lib/validationSchemas";
import { useState } from "react";

// Define the shape of the form values
interface TitleFormValues {
  titleName: string;
  titleCode: string;
  status: string;
}

// Extract default values into a constant
const defaultValues: TitleFormValues = {
  titleName: "",
  titleCode: "",
  status: "active",
};

const TitleCreate = () => {
  const router = useRouter();

  // Local state for tracking API submission errors
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Track loading state

  // Using zodResolver for schema validation
  const methods = useForm<TitleFormValues>({
    resolver: zodResolver(titleSchema),
    defaultValues,
  });

  // Async onSubmit function to handle form submission with API
  const onSubmit = async (data: TitleFormValues) => {
    setSubmitError(null); // Reset error state before new submission
    setLoading(true); // Set loading state to true
    try {
      // Simulate API call (replace with real API call)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1 second delay

      // If successful, redirect or reset the form
      router.push("/administration/titles");
    } catch (error) {
      // Handle any errors that occur during submission
      console.error("Failed to submit the form", error);
      setSubmitError(
        "There was an issue submitting the form. Please try again."
      );
    } finally {
      setLoading(false); // Reset loading state
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
          {/* Display error message if submit fails */}
          {submitError && (
            <Typography color="error" variant="body2" gutterBottom>
              {submitError}
            </Typography>
          )}

          {/* Use SaveButton with loading state handling */}
          <SaveButton
            onSave={methods.handleSubmit(onSubmit)} // Call the onSubmit function
            loading={loading} // Pass loading state to SaveButton
          />
        </Form>
      </Paper>
    </Box>
  );
};

export default TitleCreate;
