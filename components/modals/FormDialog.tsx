import { ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FieldValues, UseFormReturn, SubmitHandler } from "react-hook-form";
import SaveButton from "../buttons/SaveButton";
import FormCus from "@/components/forms/FormCus";
import CancelButton from "../buttons/CancelButton";

interface DialogFormProps<T extends FieldValues> {
  title: string;
  open: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<T>;
  methods: UseFormReturn<T>;
  children: ReactNode;
  loading?: boolean;
}

const DialogForm = <T extends FieldValues>({
  title,
  open,
  onClose,
  onSubmit,
  methods,
  children,
  loading = false,
}: DialogFormProps<T>) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <FormCus onSubmit={onSubmit} methods={methods}>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <CancelButton onCancel={onClose} loading={loading} />{" "}
          <SaveButton
            onSave={methods.handleSubmit(onSubmit)}
            loading={loading}
          />
        </DialogActions>
      </FormCus>
    </Dialog>
  );
};

export default DialogForm;
