import { Box } from "@mui/material";
import ContentWrapper from "layout/content-wrapper/ContentWrapper";
import React from "react";
import StatisticsDashboard from "./StatisticsDashboard";

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { label: "Dashboard" },
  { to: "/dashboard", label: "Statistics Dashboard", isActive: true },
];

const Statistics: React.FC = () => {
  return (
    <ContentWrapper title="Dashboard" breadcrumbs={breadcrumbs}>
      <Box>
        <StatisticsDashboard />
      </Box>
    </ContentWrapper>
  );
};

export default Statistics;
