import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import EditButton from "@/app/components/buttons/EditButton";
import DeleteButton from "@/app/components/buttons/DeleteButton";

export const titleColumns: GridColDef[] = [
  { field: "name", headerName: "Title Name", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "status", headerName: "Status", width: 110 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      const handleEdit = () => {
        console.log("Edit ID:", params.row.id);
      };

      const handleDelete = () => {
        console.log("Delete ID:", params.row.id);
      };

      return (
        <>
          <EditButton onEdit={handleEdit} />
          <DeleteButton onDelete={handleDelete} />
        </>
      );
    },
  },
];

export const expenseColumns: GridColDef[] = [
  { field: "createdAt", headerName: "Date Expense", width: 120 },
  { field: "branchName", headerName: "Branch Name", width: 150 },
  { field: "expenseNo", headerName: "Expense No.", width: 150 },
  { field: "expenseName", headerName: "Expense Name", width: 150 },
  { field: "amount", headerName: "Amount", width: 120 },
  { field: "status", headerName: "Status", width: 110 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      const handleEdit = () => {
        console.log("Edit Expense ID:", params.row.id);
      };

      const handleDelete = () => {
        console.log("Delete Expense ID:", params.row.id);
      };

      return (
        <>
          <EditButton onEdit={handleEdit} />
          <DeleteButton onDelete={handleDelete} />
        </>
      );
    },
  },
];
