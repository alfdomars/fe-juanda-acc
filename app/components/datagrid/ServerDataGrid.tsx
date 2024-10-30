import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridSortModel,
  GridPaginationModel,
} from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material"; // Import Button for the edit and delete actions
import { useRouter } from "next/navigation"; // Import useRouter

interface Title {
  id: number;
  name: string;
  createdAt: string;
  status: string;
}

type ServerDataGridProps = {
  columns: GridColDef[];
  apiEndpoint: string; // URL to fetch data from
  pageSizeOptions?: number[];
};

const ServerDataGrid: React.FC<ServerDataGridProps> = ({
  columns,
  apiEndpoint,
  pageSizeOptions = [5, 10, 20],
}) => {
  const router = useRouter(); // Initialize router
  const [rows, setRows] = useState<Title[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const sort =
          sortModel.length > 0 ? sortModel[0] : { field: "", sort: "" };
        const response = await fetch(
          `${apiEndpoint}?page=${paginationModel.page}&pageSize=${paginationModel.pageSize}&sortField=${sort.field}&sortOrder=${sort.sort}`
        );
        const result = await response.json();
        setRows(result.data);
        setTotalRows(result.total);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint, paginationModel, sortModel]);

  const handleEdit = (id: number) => {
    // Navigate to the edit page
    router.push(`/administration/titles/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this title?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(`${apiEndpoint}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          // Filter out the deleted row from the state
          setRows(rows.filter((row) => row.id !== id));
        } else {
          throw new Error("Failed to delete the title");
        }
      } catch (error) {
        console.error("Error deleting title:", error);
      }
    }
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          rowCount={totalRows}
          paginationMode="server" // Server-side pagination
          sortingMode="server" // Server-side sorting
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel} // Update page and pageSize
          onSortModelChange={setSortModel} // Update sort model
          pageSizeOptions={pageSizeOptions} // Optional page size options
          loading={loading}
        />
      )}
    </div>
  );
};

export default ServerDataGrid;
