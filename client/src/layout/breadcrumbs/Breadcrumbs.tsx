import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import type { BreadcrumbItem } from "models/Breadcrumbs";
import useBreadcrumbs from "hooks/useBreadcrumbs";

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
    return () => setBreadcrumbs([]);
  }, [breadcrumbs, setBreadcrumbs]);

  return null;
};

export const BreadcrumbDisplay: React.FC = () => {
  const { breadcrumbs } = useBreadcrumbs();

  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  const lastIndex = breadcrumbs.length - 1;

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      sx={{
        backgroundColor: "#ffffff",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        mb: 3,
        "& .MuiBreadcrumbs-separator": {
          color: "#9ca3af",
        },
      }}
    >
      {breadcrumbs.slice(0, lastIndex).map((breadcrumb, index) => (
        <Link
          key={index}
          to={breadcrumb.to ?? "#"}
          style={{
            color: "#6b7280",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#015c7d")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          {breadcrumb.label}
        </Link>
      ))}
      <Typography
        sx={{
          color: "#1a1a2e",
          fontSize: "0.875rem",
          fontWeight: 600,
        }}
      >
        {breadcrumbs[lastIndex]?.label}
      </Typography>
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
