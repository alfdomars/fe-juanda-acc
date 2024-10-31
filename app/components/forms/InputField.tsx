import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
}

const InputField = ({ name, label, type = "text" }: InputFieldProps) => {
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
          size="medium"
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

export default InputField;
