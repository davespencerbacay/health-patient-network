import AutoTitle from "components/AutoTitle";
import Breadcrumbs from "layout/breadcrumbs/Breadcrumbs";
import React from "react";
import Table from "../../components/Table/Table";
import type { GridColDef } from "@mui/x-data-grid";

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { to: "/clinics", label: "Clinics", isActive: true },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 110 },
  { field: "referedBy", headerName: "Referred By", width: 110 },
  { field: "status", headerName: "Status", width: 110 },
  { field: "dateCreated", headerName: "Date Created", width: 110 },
];

const rows = [
  { id: 1, name: "John Doe", age: 35 },
  { id: 2, name: "Jane Smith", age: 42 },
];

const Clinics: React.FC = () => {
  return (
    <React.Fragment>
      <AutoTitle title="Dashboard" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Table columns={columns} rows={rows} loading={false} />
    </React.Fragment>
  );
};

export default Clinics;
