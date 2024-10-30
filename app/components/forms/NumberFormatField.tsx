import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface NumericFormatInputProps {
  name: string;
  label: string;
  required?: boolean;
  decimalScale?: number; // Allow specifying decimal precision
  allowNegative?: boolean; // Allow specifying negative numbers
}

const NumericFormatInput = ({
  name,
  label,
  required = false,
  decimalScale = 2, // Default to 2 decimal places
  allowNegative = false, // Default to no negative numbers
}: NumericFormatInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <NumericFormat
          {...field}
          customInput={TextField} // Use Material-UI's TextField
          label={label}
          thousandSeparator="," // Set thousand separator
          decimalScale={decimalScale} // Set number of decimals
          allowNegative={allowNegative} // Whether to allow negative numbers
          fullWidth
          error={!!error} // Show error state
          helperText={error ? error.message : null} // Show error message from validation
          margin="normal"
          size="small"
          variant="standard"
        />
      )}
    />
  );
};

export default NumericFormatInput;
