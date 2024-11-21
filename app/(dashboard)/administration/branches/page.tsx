"use client";
import { Suspense, useState } from "react";
import FormDialog from "@/components/modals/FormDialog";
import TextFieldCus from "@/components/forms/TextFieldCus";
import CreateButton from "@/components/buttons/CreateButton"; // Import CreateButton
import { useForm, SubmitHandler } from "react-hook-form";
import SelectCus from "@/components/forms/SelectCus";

interface BranchFormValues {
  name: string;
  location: string;
}

const BranchPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm<BranchFormValues>({
    defaultValues: { name: "", location: "" },
  });

  const handleCreateClick = () => {
    setOpen(true);
  };

  const handleSubmit: SubmitHandler<BranchFormValues> = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Data created:", data);
    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <CreateButton onCreate={handleCreateClick} loading={loading} />{" "}
      <FormDialog
        title="Create Branch"
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        methods={methods}
        loading={loading}
      >
        <Suspense>
          <TextFieldCus name="name" label="Branch Name" />
          <TextFieldCus name="location" label="Location" />
        </Suspense>

        <SelectCus
          name="status"
          label="Status"
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
      </FormDialog>
    </>
  );
};

export default BranchPage;
