import { ReactNode } from "react";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

interface FormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  methods: UseFormReturn<any>;
}

const Form = ({ children, onSubmit, methods }: FormProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
