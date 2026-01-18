import type { GridColDef } from "@mui/x-data-grid";
import AutoTitle from "components/AutoTitle";
import Badge from "components/Badge/Badge";
import Table from "components/Table/Table";
import StatusCard from "components/StatusCard/StatusCard";
import { STATUSES } from "constants/constants";
import Breadcrumbs from "layout/breadcrumbs/Breadcrumbs";
import React, { useMemo, useState } from "react";
import { formatDate } from "utilities/formatDate";
import { Box } from "@mui/material";

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
    type: "singleSelect",
    valueOptions: [
      STATUSES.ACTIVE,
      STATUSES.INACTIVE,
      STATUSES.PENDING,
      STATUSES.CANCELLED,
      STATUSES.DECLINED,
    ],
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
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const statusCounts = useMemo(() => {
    return {
      active:
        rows.filter((row) => row.status === STATUSES.ACTIVE).length + 1000,
      pending: rows.filter((row) => row.status === STATUSES.PENDING).length,
      inactive: rows.filter((row) => row.status === STATUSES.INACTIVE).length,
      cancelled: rows.filter((row) => row.status === STATUSES.CANCELLED).length,
      declined: rows.filter((row) => row.status === STATUSES.DECLINED).length,
    };
  }, []);

  const filteredRows = useMemo(() => {
    if (!selectedStatus) return rows;
    return rows.filter((row) => row.status === selectedStatus);
  }, [selectedStatus]);

  const handleStatusClick = (status: string) => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

  const handleAddPatient = () => {
    console.log("Add Patient clicked");
    // Add your logic here to open a modal or navigate to add patient page
  };

  return (
    <React.Fragment>
      <AutoTitle title="Dashboard" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 1.5,
          }}
        >
          <StatusCard
            status="Active"
            count={statusCounts.active}
            color="#4caf50"
            isSelected={selectedStatus === STATUSES.ACTIVE}
            onClick={() => handleStatusClick(STATUSES.ACTIVE)}
          />
          <StatusCard
            status="Pending"
            count={statusCounts.pending}
            color="#ff9800"
            isSelected={selectedStatus === STATUSES.PENDING}
            onClick={() => handleStatusClick(STATUSES.PENDING)}
          />
          <StatusCard
            status="Inactive"
            count={statusCounts.inactive}
            color="#9e9e9e"
            isSelected={selectedStatus === STATUSES.INACTIVE}
            onClick={() => handleStatusClick(STATUSES.INACTIVE)}
          />
          <StatusCard
            status="Cancelled"
            count={statusCounts.cancelled}
            color="#607d8b"
            isSelected={selectedStatus === STATUSES.CANCELLED}
            onClick={() => handleStatusClick(STATUSES.CANCELLED)}
          />
          <StatusCard
            status="Declined"
            count={statusCounts.declined}
            color="#f44336"
            isSelected={selectedStatus === STATUSES.DECLINED}
            onClick={() => handleStatusClick(STATUSES.DECLINED)}
          />
        </Box>
      </Box>

      <Table
        columns={columns}
        rows={filteredRows}
        loading={false}
        showToolbar={true}
        pageSize={50}
        onAddClick={handleAddPatient}
        addButtonLabel="Add Patient"
      />
    </React.Fragment>
  );
};

export default Patients;
