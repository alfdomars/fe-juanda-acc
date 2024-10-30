import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import EditButton from "@/app/components/buttons/EditButton"; // Adjust path as necessary
import DeleteButton from "@/app/components/buttons/DeleteButton"; // Adjust path as necessary

export const titleColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Title Name", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "status", headerName: "Status", width: 110 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      // Define your edit and delete handlers
      const handleEdit = () => {
        console.log("Edit ID:", params.row.id); // Replace with actual edit logic
      };

      const handleDelete = () => {
        console.log("Delete ID:", params.row.id); // Replace with actual delete logic
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
