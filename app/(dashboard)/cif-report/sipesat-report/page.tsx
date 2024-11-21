"use client";

import { Box, Paper, Typography } from "@mui/material";
import SelectCus from "@/components/forms/SelectCus";
import FormCus from "@/components/forms/FormCus";
import SaveButton from "@/components/buttons/SaveButton";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reportSchema } from "@/lib/validationSchemas";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import DatePickerCus from "@/components/forms/DatePickerCus";
import GenerateButton from "@/components/buttons/GenerateButton";

interface FormValues {
  from: Date | null;
  to: Date | null;
}

const defaultValues: FormValues = {
  from: null,
  to: null,
};

const SiPesatReport = () => {
  const router = useRouter();

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(reportSchema),
    defaultValues,
  });

  const handleGeneratePDF = async () => {
    setLoading(true);
    // Simulate PDF generation
    setTimeout(() => {
      console.log("PDF generated!");
      setLoading(false);
    }, 2000);
  };

  const handleGenerateXLS = async () => {
    setLoading(true);
    // Simulate XLS generation
    setTimeout(() => {
      console.log("XLS generated!");
      setLoading(false);
    }, 2000);
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      router.push("/");
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
      <Paper elevation={3} sx={{ padding: 3 }}>
        <FormCus onSubmit={onSubmit} methods={methods}>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 1 }}
            sx={{ mb: 4 }}
          >
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6">Informasi Kantor</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <DatePickerCus name="date" label="Tanggal" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectCus
                name="rangeOffice"
                label="Range Kantor"
                options={[
                  { label: "KANTOR PUSAT", value: "KANTOR_PUSAT" },
                  { label: "KANTOR CABANG", value: "KANTOR_CABANG" },
                  { label: "KANTOR HARIAN", value: "KANTOR_HARIAN" },
                ]}
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 1 }}
            sx={{ mb: 4 }}
          >
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6">Parameter</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectCus
                name="baseOn"
                label="Berdasarkan"
                options={[
                  { label: "REKAP", value: "RECAPT" },
                  { label: "SELECT2", value: "SELECT3" },
                  { label: "SELECT3", value: "SELECT3" },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectCus
                name="customerType"
                label="Tipe Nasabah"
                options={[
                  { label: "SELURUH NASABAH", value: "ALL" },
                  { label: "SELECT2", value: "SELECT3" },
                  { label: "SELECT3", value: "SELECT3" },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectCus
                name="customerRange"
                label="Cakupan Nasabah"
                options={[
                  { label: "SELURUH NASABAH", value: "ALL" },
                  { label: "SELECT2", value: "SELECT3" },
                  { label: "SELECT3", value: "SELECT3" },
                ]}
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 1 }}
            sx={{ mb: 4 }}
          >
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6">Group</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectCus
                name="baseOn"
                label="Kategori"
                options={[
                  { label: "REKAP", value: "RECAPT" },
                  { label: "SELECT2", value: "SELECT3" },
                  { label: "SELECT3", value: "SELECT3" },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectCus
                name="from"
                label="Dari"
                options={[
                  { label: "SELURUH NASABAH", value: "ALL" },
                  { label: "SELECT2", value: "SELECT3" },
                  { label: "SELECT3", value: "SELECT3" },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SelectCus
                name="to"
                label="Sampai"
                options={[
                  { label: "SELURUH NASABAH", value: "ALL" },
                  { label: "SELECT2", value: "SELECT3" },
                  { label: "SELECT3", value: "SELECT3" },
                ]}
              />
            </Grid>
          </Grid>
          {submitError && (
            <Typography color="error" variant="body2">
              {submitError}
            </Typography>
          )}

          <Box display="flex" justifyContent="flex-end" gap={2}>
            <GenerateButton
              loading={loading}
              onGeneratePDF={handleGeneratePDF}
              onGenerateXLS={handleGenerateXLS}
            />
          </Box>
        </FormCus>
      </Paper>
    </Box>
  );
};

export default SiPesatReport;
