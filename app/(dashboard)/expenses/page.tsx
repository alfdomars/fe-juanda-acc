"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ServerDataGrid from "@/app/components/datagrid/ServerDataGrid";
import { expenseColumns } from "@/app/components/datagrid/columnsConfig";
import CreateButton from "@/app/components/buttons/CreateButton";

const ExpensePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/expenses/create");
    setLoading(false);
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
          Expense List
        </Typography>
        <CreateButton loading={loading} onCreate={handleCreate} />
      </Box>

      <ServerDataGrid columns={expenseColumns} apiEndpoint="/api/expenses" />
    </Box>
  );
};

export default ExpensePage;
