"use client";

import React, { useState } from "react";
import { Box, IconButton, Tooltip, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import CreateButton from "@/components/buttons/CreateButton";
import FilterButton from "@/components/buttons/FilterButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteConfirmation from "@/components/modals/DeleteConfirmation";
import TextFieldCus from "@/components/forms/TextFieldCus";
import SelectCus from "@/components/forms/SelectCus";
import { useForm, FormProvider } from "react-hook-form";
import Grid from "@mui/material/Grid2";

const TitlePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [rows, setRows] = useState([
    { id: 1, title: "Title 1", description: "Description 1" },
    { id: 2, title: "Title 2", description: "Description 2" },
    { id: 3, title: "Title 3", description: "Description 3" },
    { id: 4, title: "Title 4", description: "Description 4" },
    { id: 5, title: "Title 5", description: "Description 5" },
    { id: 6, title: "Title 6", description: "Description 6" },
    { id: 7, title: "Title 7", description: "Description 7" },
    { id: 8, title: "Title 8", description: "Description 8" },
    { id: 9, title: "Title 9", description: "Description 9" },
    { id: 10, title: "Title 10", description: "Description 10" },
    { id: 11, title: "Title 11", description: "Description 11" },
    { id: 12, title: "Title 12", description: "Description 12" },
    { id: 13, title: "Title 13", description: "Description 13" },
    { id: 14, title: "Title 14", description: "Description 14" },
    { id: 15, title: "Title 15", description: "Description 15" },
    { id: 16, title: "Title 16", description: "Description 16" },
  ]);

  const [selectedRowId, setSelectedRowId] = useState<GridRowId | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [filter, setFilter] = useState("");

  const methods = useForm();

  const handleCreate = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/administration/titles/create");
    setLoading(false);
  };

  const handleEdit = (id: GridRowId) => {
    console.log("Edit Row:", id);
  };

  const handleDelete = (id: GridRowId) => {
    setSelectedRowId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (selectedRowId !== null) {
      const newRows = rows.filter((row) => row.id !== selectedRowId);
      setRows(newRows);
    }
    setOpenDeleteDialog(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleFilter = async () => {
    setFilterLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Filtering with:", filter);
    setFilterLoading(false);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: any) => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEdit(params.row.id)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <FormProvider {...methods}>
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3, mb: 3 }}>
        <Grid container spacing={2} direction="column">
          <Grid
            container
            rowSpacing={{ xs: 0, md: 0 }}
            columnSpacing={{ xs: 0, md: 2 }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <SelectCus
                  name="status"
                  label="Status"
                  options={[
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" },
                  ]}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextFieldCus name="titleName" label="Title Name" />
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid>
              <FilterButton loading={filterLoading} onFilter={handleFilter} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Grid container justifyContent="flex-end" spacing={2} sx={{ mb: 2 }}>
          <Grid>
            <CreateButton loading={loading} onCreate={handleCreate} />
          </Grid>
        </Grid>
        <Box sx={{ height: { xs: 300, sm: 400, md: 500 }, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 25, 50, 100]}
          />
        </Box>
      </Paper>

      <DeleteConfirmation
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleConfirmDelete}
        itemName={
          selectedRowId !== null
            ? rows.find((row) => row.id === selectedRowId)?.title || ""
            : ""
        }
      />
    </FormProvider>
  );
};

export default TitlePage;
