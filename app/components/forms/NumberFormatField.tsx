import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface NumericFormatInputProps {
  name: string;
  label: string;
  required?: boolean;
  decimalScale?: number;
  allowNegative?: boolean;
}

const NumericFormatInput = ({
  name,
  label,
  required = false,
  decimalScale = 2,
  allowNegative = false,
}: NumericFormatInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <NumericFormat
          value={field.value || ""} // Use field value from react-hook-form
          onValueChange={(values) => {
            field.onChange(values.floatValue); // Pass formatted value to field onChange
          }}
          customInput={TextField}
          label={label}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={decimalScale}
          allowNegative={allowNegative}
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

export default NumericFormatInput;
