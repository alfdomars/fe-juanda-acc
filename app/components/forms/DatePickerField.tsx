import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Use Day.js adapter

interface DatePickerFieldProps {
  name: string;
  label: string;
}

const DatePickerField = ({ name, label }: DatePickerFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null} // Default to null for DatePicker
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            label={label}
            format="DD/MM/YYYY"
            onChange={(date) => field.onChange(date)} // Handle date change
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!error,
                helperText: error ? error.message : null,
                margin: "normal",
                size: "medium",
                variant: "outlined",
                InputProps: {
                  sx: { fontSize: 15 },
                },
                InputLabelProps: {
                  sx: { fontSize: 15 },
                },
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DatePickerField;
