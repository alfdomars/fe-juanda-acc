import { ReactNode } from "react";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

interface FormCusProps {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  methods: UseFormReturn<any>;
}

const FormCus = ({ children, onSubmit, methods }: FormCusProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormCus;
