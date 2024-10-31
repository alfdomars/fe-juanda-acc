import { MenuItem, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface SelectFieldProps {
  name: string;
  label: string;
  options: { label: string; value: string | number }[];
}

const SelectField = ({ name, label, options }: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          label={label}
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
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default SelectField;
