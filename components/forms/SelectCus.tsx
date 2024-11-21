import { MenuItem, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface SelectCusProps {
  name: string;
  label: string;
  options: { label: string; value: string | number }[];
}

const SelectCus = ({ name, label, options }: SelectCusProps) => {
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
          size="small"
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

export default SelectCus;
