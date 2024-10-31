"use client";

import { Box, Paper, Typography } from "@mui/material";
import InputField from "@/app/components/forms/InputField";
import SelectField from "@/app/components/forms/SelectField";
import Form from "@/app/components/forms/Form";
import SaveButton from "@/app/components/buttons/SaveButton";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { titleSchema } from "@/app/lib/validationSchemas";
import { useState, useEffect } from "react";
import BackButton from "@/app/components/buttons/BackButton";
import axios from "axios";

interface TitleFormValues {
  titleName: string;
  titleCode: string;
  status: string;
}

const TitleEdit = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the title ID from the URL

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true); // To track data loading status

  const methods = useForm<TitleFormValues>({
    resolver: zodResolver(titleSchema),
    defaultValues: {
      titleName: "",
      titleCode: "",
      status: "",
    },
  });

  useEffect(() => {
    const fetchTitleData = async () => {
      try {
        setLoadingData(true);
        const response = await axios.get(`/api/titles/${id}`);
        const { titleName, titleCode, status } = response.data;

        // Update form fields with fetched data
        methods.reset({ titleName, titleCode, status });
      } catch (error) {
        console.error("Failed to fetch title data", error);
        setSubmitError("There was an issue loading the title data.");
      } finally {
        setLoadingData(false);
      }
    };

    fetchTitleData();
  }, [id, methods]);

  const onSubmit = async (data: TitleFormValues) => {
    setSubmitError(null);
    setLoading(true);
    try {
      await axios.put(`/api/titles/${id}`, data);
      router.push("/administration/titles");
    } catch (error) {
      console.error("Failed to update the title", error);
      setSubmitError(
        "There was an issue updating the title. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Edit Title
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        {loadingData ? (
          <Typography>Loading...</Typography>
        ) : (
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
        )}
      </Paper>
    </Box>
  );
};

export default TitleEdit;
