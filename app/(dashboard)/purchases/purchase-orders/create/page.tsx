"use client"; // Ensure this component uses client-side rendering
import * as React from "react";
import CreateForm from "@/app/components/forms/CreateForm"; // Adjust the import path as necessary
import { useRouter } from "next/navigation"; // Import Next.js router for navigation

const PurchaseOrderCreatePage = () => {
  const router = useRouter(); // Get the Next.js router instance

  // Define the fields for the form
  const fields = [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "quantity", label: "Quantity", type: "number" },
    { name: "price", label: "Price", type: "number" },
  ];

  // Handle form submission
  const handleSubmit = async (data: Record<string, any>) => {
    try {
      // Make an API call to save the data
      const response = await fetch("/api/purchase-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create purchase order");
      }

      // Optionally, navigate to another page or show a success message
      console.log(
        "Purchase order created successfully:",
        await response.json()
      );
      router.push("/purchases/purchase-orders"); // Navigate to the purchase orders list
    } catch (error) {
      console.error("Error creating purchase order:", error);
    }
  };

  // Handle back button logic
  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <CreateForm
      fields={fields} // Pass the fields array
      onSubmit={handleSubmit} // Pass the submission handler
      onBack={handleBack} // Pass the back button handler
    />
  );
};

export default PurchaseOrderCreatePage;
