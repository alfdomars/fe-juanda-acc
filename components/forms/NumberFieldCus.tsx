import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface NumericFieldCusProps {
  name: string;
  label: string;
  required?: boolean;
  decimalScale?: number;
  allowNegative?: boolean;
}

const NumericFieldCus = ({
  name,
  label,
  required = false,
  decimalScale = 2,
  allowNegative = false,
}: NumericFieldCusProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <NumericFormat
          value={field.value || ""}
          onValueChange={(values) => {
            field.onChange(values.floatValue);
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

export default NumericFieldCus;
