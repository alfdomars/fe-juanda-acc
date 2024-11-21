import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface TextFieldCusProps {
  name: string;
  label: string;
  type?: string;
}

const TextFieldCus = ({ name, label, type = "text" }: TextFieldCusProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth
          error={!!error}
          helperText={error ? error.message : null}
          margin="normal"
          size="small"
          variant="outlined"
          slotProps={{
            input: { sx: { fontSize: 15 } },
            inputLabel: { sx: { fontSize: 15 } },
          }}
        />
      )}
    />
  );
};

export default TextFieldCus;
