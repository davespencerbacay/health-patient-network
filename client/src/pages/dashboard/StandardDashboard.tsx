import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Badge,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  TrendingUp,
  TrendingDown,
  People,
  LocalHospital,
  Assignment,
  CalendarMonth,
  Schedule,
  Warning,
  Cancel,
  CheckCircle,
  Pending as PendingIcon,
  Today,
} from "@mui/icons-material";
import ContentWrapper from "layout/content-wrapper/ContentWrapper";
import { PRIMARY_COLOR } from "../../constants/constants";

// =====================
// Breadcrumbs
// =====================

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { label: "Dashboard" },
  { to: "/dashboard", label: "Standard Dashboard", isActive: true },
];

// =====================
// Static Data (Make Dynamic Later)
// =====================

// Summary Stats
const summaryStats = {
  totalReferrals: 1247,
  totalPatients: 892,
  totalClinics: 45,
  activeReferredPatients: 234,
};

// Patients by Status
const patientsByStatus = [
  { status: "Active", count: 534, color: "#10b981" },
  { status: "Pending", count: 156, color: "#f59e0b" },
  { status: "Completed", count: 423, color: "#3b82f6" },
  { status: "Cancelled", count: 45, color: "#ef4444" },
];

// Today's Metrics
const todayMetrics = {
  referralsToday: 24,
  appointmentsToday: 18,
  pendingReferrals: 156,
  overdueReferrals: 12,
  cancellationsToday: 3,
};

// Calendar Events (Sample)
const calendarEvents = [
  {
    id: 1,
    title: "Patient Appointment",
    date: "2025-12-18",
    time: "09:00 AM",
    type: "appointment",
  },
  {
    id: 2,
    title: "Referral Review",
    date: "2025-12-18",
    time: "10:30 AM",
    type: "referral",
  },
  {
    id: 3,
    title: "Queue Review",
    date: "2025-12-18",
    time: "02:00 PM",
    type: "queue",
  },
  {
    id: 4,
    title: "Patient Follow-up",
    date: "2025-12-18",
    time: "03:30 PM",
    type: "appointment",
  },
  {
    id: 5,
    title: "New Referral",
    date: "2025-12-19",
    time: "09:00 AM",
    type: "referral",
  },
  {
    id: 6,
    title: "Clinic Meeting",
    date: "2025-12-19",
    time: "11:00 AM",
    type: "queue",
  },
];

// Referrals Table Data
const referralsData = [
  {
    id: "REF-001",
    patientName: "John Smith",
    currentHospital: "City General Hospital",
    status: "Pending",
    tags: ["Urgent", "Cardiology"],
    referringProvider: "Dr. Sarah Johnson",
    dateCreated: "2025-12-15",
    dateChanged: "2025-12-17",
  },
  {
    id: "REF-002",
    patientName: "Emily Davis",
    currentHospital: "Metro Medical Center",
    status: "Accepted",
    tags: ["Orthopedics"],
    referringProvider: "Dr. Dave Brown",
    dateCreated: "2025-12-14",
    dateChanged: "2025-12-16",
  },
  {
    id: "REF-003",
    patientName: "Robert Wilson",
    currentHospital: "Downtown Clinic",
    status: "Completed",
    tags: ["Follow-up", "Neurology"],
    referringProvider: "Dr. Lisa Chen",
    dateCreated: "2025-12-10",
    dateChanged: "2025-12-15",
  },
  {
    id: "REF-004",
    patientName: "Maria Garcia",
    currentHospital: "Westside Hospital",
    status: "Rejected",
    tags: ["Insurance Issue"],
    referringProvider: "Dr. James Taylor",
    dateCreated: "2025-12-12",
    dateChanged: "2025-12-14",
  },
  {
    id: "REF-005",
    patientName: "David Lee",
    currentHospital: "City General Hospital",
    status: "Pending",
    tags: ["Priority", "Oncology"],
    referringProvider: "Dr. Sarah Johnson",
    dateCreated: "2025-12-16",
    dateChanged: "2025-12-17",
  },
  {
    id: "REF-006",
    patientName: "Jennifer Martinez",
    currentHospital: "Northgate Medical",
    status: "Accepted",
    tags: ["Pediatrics"],
    referringProvider: "Dr. Amanda White",
    dateCreated: "2025-12-13",
    dateChanged: "2025-12-16",
  },
  {
    id: "REF-007",
    patientName: "William Anderson",
    currentHospital: "Metro Medical Center",
    status: "Cancelled",
    tags: ["Patient Request"],
    referringProvider: "Dr. Dave Brown",
    dateCreated: "2025-12-11",
    dateChanged: "2025-12-13",
  },
  {
    id: "REF-008",
    patientName: "Susan Thompson",
    currentHospital: "Eastview Clinic",
    status: "Completed",
    tags: ["Dermatology", "Follow-up"],
    referringProvider: "Dr. Kevin Harris",
    dateCreated: "2025-12-08",
    dateChanged: "2025-12-12",
  },
];

// =====================
// Styles
// =====================

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
  height: "100%",
};

const statCardStyle = {
  ...cardStyle,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  },
};

// =====================
// Helper Functions
// =====================

const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case "pending":
      return "#f59e0b";
    case "accepted":
      return "#10b981";
    case "completed":
      return "#3b82f6";
    case "rejected":
    case "cancelled":
      return "#ef4444";
    default:
      return "#6b7280";
  }
};

const getEventTypeColor = (type: string): string => {
  switch (type) {
    case "appointment":
      return "#10b981";
    case "referral":
      return PRIMARY_COLOR;
    case "queue":
      return "#f59e0b";
    default:
      return "#6b7280";
  }
};

// =====================
// Sub Components
// =====================

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  change?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  change,
}) => (
  <Card sx={statCardStyle}>
    <CardContent sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ color: "#6b7280", mb: 1, fontWeight: 500 }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#1a1a2e", mb: 1 }}
          >
            {typeof value === "number" ? value.toLocaleString() : value}
          </Typography>
          {change !== undefined && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {change >= 0 ? (
                <TrendingUp sx={{ fontSize: 16, color: "#10b981" }} />
              ) : (
                <TrendingDown sx={{ fontSize: 16, color: "#ef4444" }} />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: change >= 0 ? "#10b981" : "#ef4444",
                  fontWeight: 600,
                }}
              >
                {Math.abs(change)}%
              </Typography>
            </Box>
          )}
        </Box>
        <Avatar
          sx={{
            backgroundColor: `${color}15`,
            color: color,
            width: 56,
            height: 56,
          }}
        >
          {icon}
        </Avatar>
      </Box>
    </CardContent>
  </Card>
);

interface TodayMetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const TodayMetricCard: React.FC<TodayMetricCardProps> = ({
  title,
  value,
  icon,
  color,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      p: 2,
      borderRadius: "8px",
      backgroundColor: `${color}10`,
      border: `1px solid ${color}30`,
    }}
  >
    <Avatar sx={{ backgroundColor: color, width: 40, height: 40 }}>
      {icon}
    </Avatar>
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a2e" }}>
        {value}
      </Typography>
      <Typography variant="caption" sx={{ color: "#6b7280" }}>
        {title}
      </Typography>
    </Box>
  </Box>
);

// =====================
// Main Component
// =====================

const StandardDashboard: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredReferrals = referralsData.filter((referral) => {
    const matchesSearch =
      referral.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.currentHospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || referral.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <ContentWrapper title="Standard Dashboard" breadcrumbs={breadcrumbs}>
      <Box sx={{ p: 1 }}>
        {/* Summary Stats Row */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard
              title="Total Referrals"
              value={summaryStats.totalReferrals}
              icon={<Assignment />}
              color={PRIMARY_COLOR}
              change={8.5}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard
              title="Total Patients"
              value={summaryStats.totalPatients}
              icon={<People />}
              color="#8b5cf6"
              change={5.2}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard
              title="Total Clinics"
              value={summaryStats.totalClinics}
              icon={<LocalHospital />}
              color="#f59e0b"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard
              title="Active Referred Patients"
              value={summaryStats.activeReferredPatients}
              icon={<People />}
              color="#10b981"
              change={12.3}
            />
          </Grid>
        </Grid>

        {/* Today's Metrics */}
        <Card sx={{ ...cardStyle, mb: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Today sx={{ color: PRIMARY_COLOR }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#1a1a2e" }}
              >
                Today's Metrics
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                <TodayMetricCard
                  title="Referrals Today"
                  value={todayMetrics.referralsToday}
                  icon={<Assignment sx={{ fontSize: 20 }} />}
                  color={PRIMARY_COLOR}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                <TodayMetricCard
                  title="Appointments Today"
                  value={todayMetrics.appointmentsToday}
                  icon={<Schedule sx={{ fontSize: 20 }} />}
                  color="#10b981"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                <TodayMetricCard
                  title="Pending Referrals"
                  value={todayMetrics.pendingReferrals}
                  icon={<PendingIcon sx={{ fontSize: 20 }} />}
                  color="#f59e0b"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                <TodayMetricCard
                  title="Overdue Referrals"
                  value={todayMetrics.overdueReferrals}
                  icon={<Warning sx={{ fontSize: 20 }} />}
                  color="#ef4444"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                <TodayMetricCard
                  title="Cancellations Today"
                  value={todayMetrics.cancellationsToday}
                  icon={<Cancel sx={{ fontSize: 20 }} />}
                  color="#6b7280"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Patients by Status & Calendar Row */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* Patients by Status */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={cardStyle}>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#1a1a2e", mb: 3 }}
                >
                  Patients by Status
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {patientsByStatus.map((item) => (
                    <Box
                      key={item.status}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 2,
                        borderRadius: "8px",
                        backgroundColor: `${item.color}10`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: item.color,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600, color: "#1a1a2e" }}
                        >
                          {item.status}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: item.color }}
                      >
                        {item.count}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Calendar */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={cardStyle}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
                >
                  <CalendarMonth sx={{ color: PRIMARY_COLOR }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#1a1a2e" }}
                  >
                    Upcoming Schedule
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                  <Chip
                    size="small"
                    label="Appointments"
                    sx={{ backgroundColor: "#10b98120", color: "#10b981" }}
                  />
                  <Chip
                    size="small"
                    label="Referrals"
                    sx={{
                      backgroundColor: `${PRIMARY_COLOR}20`,
                      color: PRIMARY_COLOR,
                    }}
                  />
                  <Chip
                    size="small"
                    label="Queue"
                    sx={{ backgroundColor: "#f59e0b20", color: "#f59e0b" }}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  {calendarEvents.map((event) => (
                    <Box
                      key={event.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: "8px",
                        backgroundColor: "#f9fafb",
                        borderLeft: `4px solid ${getEventTypeColor(
                          event.type
                        )}`,
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 50,
                          textAlign: "center",
                          p: 1,
                          borderRadius: "8px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: "#6b7280", display: "block" }}
                        >
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                          })}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, color: "#1a1a2e" }}
                        >
                          {new Date(event.date).getDate()}
                        </Typography>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600, color: "#1a1a2e" }}
                        >
                          {event.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {event.time}
                        </Typography>
                      </Box>
                      <Chip
                        size="small"
                        label={event.type}
                        sx={{
                          backgroundColor: `${getEventTypeColor(event.type)}20`,
                          color: getEventTypeColor(event.type),
                          textTransform: "capitalize",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Referrals Table */}
        <Card sx={cardStyle}>
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#1a1a2e" }}
              >
                Referrals
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  size="small"
                  placeholder="Search referrals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#9ca3af" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ minWidth: 250 }}
                />
                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={statusFilter}
                    label="Status"
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <MenuItem value="All">All Statuses</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Accepted">Accepted</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      Patient Name
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      Current Hospital
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      Tags
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      Referring Provider
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      Date Created
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                      Date Changed
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredReferrals
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((referral) => (
                      <TableRow
                        key={referral.id}
                        sx={{
                          "&:hover": { backgroundColor: "#f9fafb" },
                          cursor: "pointer",
                        }}
                      >
                        <TableCell>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 600, color: PRIMARY_COLOR }}
                          >
                            {referral.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: "#1a1a2e" }}
                          >
                            {referral.patientName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: "#6b7280" }}>
                            {referral.currentHospital}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            size="small"
                            label={referral.status}
                            sx={{
                              backgroundColor: `${getStatusColor(
                                referral.status
                              )}15`,
                              color: getStatusColor(referral.status),
                              fontWeight: 600,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}
                          >
                            {referral.tags.map((tag, index) => (
                              <Chip
                                key={index}
                                size="small"
                                label={tag}
                                variant="outlined"
                                sx={{
                                  fontSize: "0.7rem",
                                  height: 24,
                                  borderColor: "#e5e7eb",
                                  color: "#6b7280",
                                }}
                              />
                            ))}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: "#6b7280" }}>
                            {referral.referringProvider}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: "#6b7280" }}>
                            {new Date(
                              referral.dateCreated
                            ).toLocaleDateString()}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: "#6b7280" }}>
                            {new Date(
                              referral.dateChanged
                            ).toLocaleDateString()}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredReferrals.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardContent>
        </Card>
      </Box>
    </ContentWrapper>
  );
};

export default StandardDashboard;
