import { Box } from "@mui/material";
import ContentWrapper from "layout/content-wrapper/ContentWrapper";
import React from "react";
import StatisticsDashboard from "./StatisticsDashboard";

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { to: "/dashboard", label: "Dashboard", isActive: true },
];

const Dashboard: React.FC = () => {
  return (
    <ContentWrapper title="Dashboard" breadcrumbs={breadcrumbs}>
      <Box>
        <StatisticsDashboard />
      </Box>
    </ContentWrapper>
  );
};

export default Dashboard;
