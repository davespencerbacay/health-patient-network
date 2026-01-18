import { Box } from "@mui/material";
import ContentWrapper from "layout/content-wrapper/ContentWrapper";
import React from "react";
import StandardDashboard from "./StandardDashboard";

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { label: "Dashboard" },
  { to: "/dashboard", label: "Standard Dashboard", isActive: true },
];

const Standard: React.FC = () => {
  return (
    <ContentWrapper title="Dashboard" breadcrumbs={breadcrumbs}>
      <Box>
        <StandardDashboard />
      </Box>
    </ContentWrapper>
  );
};

export default Standard;
