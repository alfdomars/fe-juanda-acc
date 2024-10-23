"use client";

import { Box, Button, Typography } from "@mui/material";
import InputField from "@/app/components/forms/InputField";
import SelectField from "@/app/components/forms/SelectField";
import Form from "@/app/components/forms/Form";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { titleSchema } from "@/app/lib/validationSchemas";

const TitleCreate = () => {
  const router = useRouter();

  // Menggunakan zodResolver untuk validasi schema Zod
  const methods = useForm({
    resolver: zodResolver(titleSchema),
    defaultValues: {
      titleName: "",
      status: "active",
    },
  });

  const onSubmit = (data: any) => {
    // Handle form submission logic, e.g., calling an API
    console.log("Form Data: ", data);
    router.push("/administration/titles");
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Create Title
      </Typography>
      <Form onSubmit={onSubmit} methods={methods}>
        <InputField name="titleName" label="Title Name" />
        <SelectField
          name="status"
          label="Status"
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </Box>
  );
};

export default TitleCreate;
