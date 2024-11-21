import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridSortModel,
  GridPaginationModel,
} from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";

interface HasId {
  id: number;
}

type ServerDataGridProps<T extends HasId> = {
  columns: GridColDef[];
  apiEndpoint: string;
  pageSizeOptions?: number[];
};

const ServerDataGrid = <T extends HasId>({
  columns,
  apiEndpoint,
  pageSizeOptions = [5, 10, 20],
}: ServerDataGridProps<T>) => {
  const router = useRouter();
  const [rows, setRows] = useState<T[]>([]);
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
          paginationMode="server"
          sortingMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          onSortModelChange={setSortModel}
          pageSizeOptions={pageSizeOptions}
          loading={loading}
        />
      )}
    </div>
  );
};

export default ServerDataGrid;
