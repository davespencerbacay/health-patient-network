import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  AccessTime,
  LocalHospital,
  People,
  Schedule,
  CheckCircle,
  Cancel,
  Pending,
  HourglassEmpty,
  DoNotDisturb,
} from "@mui/icons-material";
import { PRIMARY_COLOR } from "../../constants/constants";
import ListCard from "../../components/ListCard";
import ReferralsTrend from "./components/ReferralsTrend";

const totalReferralsInQueue = 156;
const totalReferralsReceived = 1247;
const referralsQueueChange = 12.5; // percentage
const referralsReceivedChange = 8.3; // percentage

const referralsByStatus = {
  pending: 156,
  accepted: 423,
  rejected: 89,
  completed: 534,
  cancelled: 45,
};

const referralsTrendData = {
  daily: [
    { name: "Mon", referrals: 45 },
    { name: "Tue", referrals: 52 },
    { name: "Wed", referrals: 38 },
    { name: "Thu", referrals: 65 },
    { name: "Fri", referrals: 48 },
    { name: "Sat", referrals: 72 },
    { name: "Sun", referrals: 56 },
  ],
  weekly: [
    { name: "Week 1", referrals: 280 },
    { name: "Week 2", referrals: 320 },
    { name: "Week 3", referrals: 290 },
    { name: "Week 4", referrals: 340 },
    { name: "Week 5", referrals: 310 },
    { name: "Week 6", referrals: 380 },
    { name: "Week 7", referrals: 350 },
  ],
  monthly: [
    { name: "Jan", referrals: 1200 },
    { name: "Feb", referrals: 1350 },
    { name: "Mar", referrals: 1180 },
    { name: "Apr", referrals: 1420 },
    { name: "May", referrals: 1380 },
    { name: "Jun", referrals: 1520 },
    { name: "Jul", referrals: 1450 },
  ],
};

const topReferredToClinics = [
  { name: "City Heart Center", referrals: 234, score: 95 },
  { name: "Metro Orthopedic Clinic", referrals: 189, score: 92 },
  { name: "Downtown Medical Hub", referrals: 156, score: 88 },
  { name: "Sunrise Family Care", referrals: 134, score: 85 },
  { name: "Valley Health Specialists", referrals: 98, score: 82 },
];

const topReferringClinics = [
  { name: "Central Primary Care", referrals: 312, avgResponseTime: "2.3 hrs" },
  {
    name: "Westside Family Practice",
    referrals: 278,
    avgResponseTime: "1.8 hrs",
  },
  {
    name: "Northgate Medical Center",
    referrals: 245,
    avgResponseTime: "3.1 hrs",
  },
  {
    name: "Eastview Health Clinic",
    referrals: 198,
    avgResponseTime: "2.7 hrs",
  },
  { name: "Southpoint Wellness", referrals: 167, avgResponseTime: "2.0 hrs" },
];

const clinicIntelligenceScores = [
  { name: "City Heart Center", score: 95, trend: "up" },
  { name: "Metro Orthopedic Clinic", score: 92, trend: "up" },
  { name: "Central Primary Care", score: 89, trend: "down" },
  { name: "Downtown Medical Hub", score: 88, trend: "up" },
  { name: "Westside Family Practice", score: 85, trend: "stable" },
];

const averageResponseTimeByClinic = "2.4 hours";
const averagePatientWaitTime = "3.2 days";

const patientsScheduled = 892;
const patientsUnscheduled = 355;

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

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  color,
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
            {value}
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
              <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                vs last month
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

interface StatusChipProps {
  label: string;
  count: number;
  color: string;
  icon: React.ReactNode;
}

const StatusChip: React.FC<StatusChipProps> = ({
  label,
  count,
  color,
  icon,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      p: 2,
      borderRadius: "8px",
      backgroundColor: `${color}10`,
      border: `1px solid ${color}30`,
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Avatar sx={{ backgroundColor: color, width: 36, height: 36 }}>
        {icon}
      </Avatar>
      <Typography variant="body2" sx={{ fontWeight: 600, color: "#1a1a2e" }}>
        {label}
      </Typography>
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 700, color }}>
      {count}
    </Typography>
  </Box>
);

const StatisticsDashboard: React.FC = () => {
  const [trendPeriod, setTrendPeriod] = useState<
    "daily" | "weekly" | "monthly"
  >("weekly");

  const handleTrendPeriodChange = (
    _: React.MouseEvent<HTMLElement>,
    newPeriod: "daily" | "weekly" | "monthly" | null
  ) => {
    if (newPeriod) setTrendPeriod(newPeriod);
  };

  const scheduledPercentage = Math.round(
    (patientsScheduled / (patientsScheduled + patientsUnscheduled)) * 100
  );

  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#1a1a2e", mb: 1 }}
        >
          Referral Statistics
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Overview of referral metrics and clinic performance
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Referrals in Queue"
            value={totalReferralsInQueue}
            change={referralsQueueChange}
            icon={<HourglassEmpty />}
            color={PRIMARY_COLOR}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Total Received"
            value={totalReferralsReceived.toLocaleString()}
            change={referralsReceivedChange}
            icon={<People />}
            color="#8b5cf6"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Avg Response Time"
            value={averageResponseTimeByClinic}
            icon={<AccessTime />}
            color="#f59e0b"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Avg Patient Wait"
            value={averagePatientWaitTime}
            icon={<Schedule />}
            color="#ec4899"
          />
        </Grid>
      </Grid>

      <Card sx={{ ...cardStyle, mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#1a1a2e", mb: 3 }}
          >
            Referrals by Status
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
              <StatusChip
                label="Pending"
                count={referralsByStatus.pending}
                color="#f59e0b"
                icon={<Pending sx={{ fontSize: 18 }} />}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
              <StatusChip
                label="Accepted"
                count={referralsByStatus.accepted}
                color="#10b981"
                icon={<CheckCircle sx={{ fontSize: 18 }} />}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
              <StatusChip
                label="Rejected"
                count={referralsByStatus.rejected}
                color="#ef4444"
                icon={<Cancel sx={{ fontSize: 18 }} />}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
              <StatusChip
                label="Completed"
                count={referralsByStatus.completed}
                color="#3b82f6"
                icon={<CheckCircle sx={{ fontSize: 18 }} />}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
              <StatusChip
                label="Cancelled"
                count={referralsByStatus.cancelled}
                color="#6b7280"
                icon={<DoNotDisturb sx={{ fontSize: 18 }} />}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={cardStyle}>
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#1a1a2e" }}
                >
                  Referrals Trend
                </Typography>
                <ToggleButtonGroup
                  value={trendPeriod}
                  exclusive
                  onChange={handleTrendPeriodChange}
                  size="small"
                >
                  <ToggleButton
                    value="daily"
                    sx={{ textTransform: "none", px: 2 }}
                  >
                    Daily
                  </ToggleButton>
                  <ToggleButton
                    value="weekly"
                    sx={{ textTransform: "none", px: 2 }}
                  >
                    Weekly
                  </ToggleButton>
                  <ToggleButton
                    value="monthly"
                    sx={{ textTransform: "none", px: 2 }}
                  >
                    Monthly
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box sx={{ height: 280, width: "100%" }}>
                <ReferralsTrend data={referralsTrendData[trendPeriod]} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={cardStyle}>
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#1a1a2e", mb: 3 }}
              >
                Patients Schedule Status
              </Typography>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 700, color: PRIMARY_COLOR }}
                >
                  {scheduledPercentage}%
                </Typography>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  Scheduled
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    Scheduled
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: "#1a1a2e" }}
                  >
                    {patientsScheduled.toLocaleString()}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={scheduledPercentage}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#e5e7eb",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: PRIMARY_COLOR,
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    Unscheduled
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: "#1a1a2e" }}
                  >
                    {patientsUnscheduled.toLocaleString()}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={100 - scheduledPercentage}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#e5e7eb",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#f59e0b",
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <ListCard
            title="Top Referred-To Clinics"
            items={topReferredToClinics.map((clinic, index) => ({
              id: clinic.name,
              name: clinic.name,
              secondaryText: `${clinic.referrals} referrals`,
              rank: index + 1,
              chipLabel: `${clinic.score}%`,
              chipColor: "#10b981",
            }))}
            avatarColor={PRIMARY_COLOR}
            showRankAvatar
            showChip
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ListCard
            title="Top Referring Clinics"
            items={topReferringClinics.map((clinic, index) => ({
              id: clinic.name,
              name: clinic.name,
              secondaryText: `${clinic.referrals} referrals • ${clinic.avgResponseTime} avg`,
              rank: index + 1,
            }))}
            avatarColor="#8b5cf6"
            showRankAvatar
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ListCard
            title="Clinic Intelligence Scores"
            items={clinicIntelligenceScores.map((clinic) => ({
              id: clinic.name,
              name: clinic.name,
              secondaryText: `Score: ${clinic.score}`,
              avatarContent: <LocalHospital />,
              score: clinic.score,
              trend: clinic.trend as "up" | "down" | "stable",
            }))}
            avatarColor="#f59e0b"
            showScoreBadge
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsDashboard;
