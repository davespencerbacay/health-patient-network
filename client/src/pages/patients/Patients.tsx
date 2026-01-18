import type { GridColDef } from "@mui/x-data-grid";
import AutoTitle from "components/AutoTitle";
import Badge from "components/Badge/Badge";
import Table from "components/Table/Table";
import { STATUSES } from "constants/constants";
import Breadcrumbs from "layout/breadcrumbs/Breadcrumbs";
import React from "react";
import { formatDate } from "utilities/formatDate";

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { to: "/patients", label: "Patients", isActive: true },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 210 },
  { field: "clinic", headerName: "Clinic", width: 210 },
  { field: "age", headerName: "Age" },
  { field: "referedBy", headerName: "Referred By", width: 210 },
  {
    field: "status",
    headerName: "Status",
    width: 210,
    renderCell: (params) => (
      <Badge variant={params.value}>{params.value}</Badge>
    ),
  },
  { field: "dateCreated", headerName: "Date Created", width: 210 },
];

const rows = [
  {
    id: 1,
    name: "John Doe",
    clinic: "City Health Clinic",
    age: 35,
    referedBy: "Dr. Adams",
    status: STATUSES.ACTIVE,
    dateCreated: formatDate("2025-01-02"),
  },
  {
    id: 2,
    name: "Jane Smith",
    clinic: "Sunrise Medical Center",
    age: 42,
    referedBy: "Dr. Brown",
    status: STATUSES.PENDING,
    dateCreated: formatDate("2025-01-05"),
  },
  {
    id: 3,
    name: "Michael Johnson",
    clinic: "Green Valley Clinic",
    age: 29,
    referedBy: "Dr. Lee",
    status: STATUSES.INACTIVE,
    dateCreated: formatDate("2025-01-10"),
  },
  {
    id: 4,
    name: "Emily Davis",
    clinic: "Downtown Health Hub",
    age: 37,
    referedBy: "Dr. Wilson",
    status: STATUSES.ACTIVE,
    dateCreated: formatDate("2025-01-12"),
  },
  {
    id: 5,
    name: "Robert Martinez",
    clinic: "Lakeside Medical",
    age: 50,
    referedBy: "Dr. Garcia",
    status: STATUSES.CANCELLED,
    dateCreated: formatDate("2025-01-15"),
  },
  {
    id: 6,
    name: "John Doe",
    clinic: "City Health Clinic",
    age: 35,
    referedBy: "Dr. Adams",
    status: STATUSES.ACTIVE,
    dateCreated: formatDate("2025-01-02"),
  },
  {
    id: 7,
    name: "Jane Smith",
    clinic: "Sunrise Medical Center",
    age: 42,
    referedBy: "Dr. Brown",
    status: STATUSES.PENDING,
    dateCreated: formatDate("2025-01-05"),
  },
  {
    id: 8,
    name: "Michael Johnson",
    clinic: "Green Valley Clinic",
    age: 29,
    referedBy: "Dr. Lee",
    status: STATUSES.INACTIVE,
    dateCreated: formatDate("2025-01-10"),
  },
  {
    id: 9,
    name: "Emily Davis",
    clinic: "Downtown Health Hub",
    age: 37,
    referedBy: "Dr. Wilson",
    status: STATUSES.ACTIVE,
    dateCreated: formatDate("2025-01-12"),
  },
  {
    id: 10,
    name: "Robert Martinez",
    clinic: "Lakeside Medical",
    age: 50,
    referedBy: "Dr. Garcia",
    status: STATUSES.CANCELLED,
    dateCreated: formatDate("2025-01-15"),
  },
  {
    id: 11,
    name: "John Doe",
    clinic: "City Health Clinic",
    age: 35,
    referedBy: "Dr. Adams",
    status: STATUSES.ACTIVE,
    dateCreated: formatDate("2025-01-02"),
  },
  {
    id: 12,
    name: "Jane Smith",
    clinic: "Sunrise Medical Center",
    age: 42,
    referedBy: "Dr. Brown",
    status: STATUSES.PENDING,
    dateCreated: formatDate("2025-01-05"),
  },
  {
    id: 13,
    name: "Michael Johnson",
    clinic: "Green Valley Clinic",
    age: 29,
    referedBy: "Dr. Lee",
    status: STATUSES.INACTIVE,
    dateCreated: formatDate("2025-01-10"),
  },
  {
    id: 14,
    name: "Emily Davis",
    clinic: "Downtown Health Hub",
    age: 37,
    referedBy: "Dr. Wilson",
    status: STATUSES.ACTIVE,
    dateCreated: formatDate("2025-01-12"),
  },
  {
    id: 15,
    name: "Robert Martinez",
    clinic: "Lakeside Medical",
    age: 50,
    referedBy: "Dr. Garcia",
    status: STATUSES.CANCELLED,
    dateCreated: formatDate("2025-01-15"),
  },
];

const Patients: React.FC = () => {
  return (
    <React.Fragment>
      <AutoTitle title="Dashboard" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Table columns={columns} rows={rows} loading={false} />
    </React.Fragment>
  );
};

export default Patients;
