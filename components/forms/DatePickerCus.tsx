import { Controller, useFormContext } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DatePickerCusProps {
  name: string;
  label: string;
}

const DatePickerCus = ({ name, label }: DatePickerCusProps) => {
  ``;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            label={label}
            format="DD/MM/YYYY"
            onChange={(date) => field.onChange(date)}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!error,
                helperText: error ? error.message : null,
                margin: "normal",
                size: "small",
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

export default DatePickerCus;
