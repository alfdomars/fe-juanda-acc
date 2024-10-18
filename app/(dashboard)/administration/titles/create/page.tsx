"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import CreateForm from "@/app/components/forms/CreateForm";

const CreatePage: React.FC = () => {
  const router = useRouter();

  const fields = [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Data submitted:", data);
    router.push("/administration/titles");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <CreateForm fields={fields} onSubmit={handleSubmit} onBack={handleBack} />
    </div>
  );
};

export default CreatePage;
