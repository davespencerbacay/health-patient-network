import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface TableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSize?: number;
  loading?: boolean;
  showToolbar?: boolean;
}

const Table = ({
  rows,
  columns,
  pageSize = 10,
  loading = false,
  showToolbar = true,
}: TableProps) => {
  return (
    <Box sx={{ height: 1000, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        showToolbar={showToolbar}
        slots={showToolbar ? { toolbar: GridToolbar } : {}}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        sx={{
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-row:hover": {
            cursor: "pointer",
          },
        }}
      />
    </Box>
  );
};

export default Table;
