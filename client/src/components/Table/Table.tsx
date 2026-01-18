import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

interface TableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSize?: number;
  loading?: boolean;
  showToolbar?: boolean;
  onAddClick?: () => void;
  addButtonLabel?: string;
}

const CustomToolbar = ({
  onAddClick,
  addButtonLabel,
}: {
  onAddClick?: () => void;
  addButtonLabel?: string;
}) => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      {onAddClick && (
        <Button
          size="small"
          onClick={onAddClick}
          sx={{
            fontSize: "0.8125rem",
            padding: "4px 5px",
            minWidth: "auto",
          }}
        >
          {addButtonLabel || "Add"}
        </Button>
      )}
    </GridToolbarContainer>
  );
};

const Table = ({
  rows,
  columns,
  pageSize = 10,
  loading = false,
  showToolbar = true,
  onAddClick,
  addButtonLabel,
}: TableProps) => {
  const ToolbarWithButton = () => (
    <CustomToolbar onAddClick={onAddClick} addButtonLabel={addButtonLabel} />
  );
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
        showToolbar
        slots={showToolbar ? { toolbar: ToolbarWithButton } : {}}
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
