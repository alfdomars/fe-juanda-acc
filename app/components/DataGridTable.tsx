"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface DataGridTableProps {
  columns: GridColDef[];
  rows: any[];
}

const DataGridTable: React.FC<DataGridTableProps> = ({ columns, rows }) => {
  return (
    <Box sx={{ p: 2 }}>
      {/* DataGrid Section */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[10, 25, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
        />
      </div>
    </Box>
  );
};

export default DataGridTable;
