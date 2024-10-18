"use client"; // Directive for Next.js app router

import * as React from "react";
import { Box, TextField, Typography, Card } from "@mui/material";
import ActionButton from "@/app/components/ActionButton"; // Reusable ActionButton component

interface Field {
  name: string;
  label: string;
  type: string;
}

interface CreateEditFormProps {
  fields: Field[];
  onSubmit: (data: Record<string, any>) => void;
  onBack: () => void;
}

const CreateForm: React.FC<CreateEditFormProps> = ({
  fields,
  onSubmit,
  onBack,
}) => {
  const [formData, setFormData] = React.useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card sx={{ p: 2, maxWidth: 600, margin: "auto" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="h5" mb={2}>
          Create New Entry
        </Typography>
        {fields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            fullWidth
            variant="outlined"
            value={formData[field.name] || ""}
            onChange={handleChange}
            required
          />
        ))}

        <Box display="flex" justifyContent="space-between">
          <ActionButton action="view" onClick={onBack} />
          <ActionButton action="create" type="submit" />
        </Box>
      </Box>
    </Card>
  );
};

export default CreateForm;
