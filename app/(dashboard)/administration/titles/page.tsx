"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ServerDataGrid from "@/app/components/datagrid/ServerDataGrid"; // Adjust the import path accordingly
import { titleColumns } from "@/app/components/datagrid/columnsConfig"; // Import column configuration
import CreateButton from "@/app/components/buttons/CreateButton"; // Import the new CreateButton

const TitlePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleCreate = async () => {
    setLoading(true); // Set loading state to true before navigation
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay (optional)
    router.push("/administration/titles/create");
    setLoading(false); // Reset loading state after navigation
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5" gutterBottom>
          Title List
        </Typography>
        <CreateButton
          loading={loading} // Pass loading state to CreateButton
          onCreate={handleCreate} // Pass the handleCreate function
        />
      </Box>

      <ServerDataGrid
        columns={titleColumns} // Use the imported columns configuration
        apiEndpoint="/api/titles" // This should point to your titles API
      />
    </Box>
  );
};

export default TitlePage;
