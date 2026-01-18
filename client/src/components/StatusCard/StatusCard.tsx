import { Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";

interface StatusCardProps {
  status: string;
  count: number;
  color: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

const StatusCard: React.FC<StatusCardProps> = ({
  status,
  count,
  color,
  isSelected = false,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 120,
        backgroundColor: isSelected ? `${color}10` : "#ffffff",
        border: `2px solid ${isSelected ? color : "#e0e0e0"}`,
        borderRadius: 1,
        boxShadow: "none",
        transition: "all 0.2s ease",
        cursor: onClick ? "pointer" : "default",
        "&:hover": {
          borderColor: color,
          backgroundColor: `${color}08`,
        },
      }}
    >
      <CardContent sx={{ padding: "12px 16px !important" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box flex={1}>
            <Typography
              variant="body2"
              sx={{
                color: isSelected ? color : "#757575",
                fontSize: "0.75rem",
                fontWeight: isSelected ? 600 : 500,
                mb: 0.5,
              }}
            >
              {status}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: color,
                fontWeight: 700,
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              {count}
            </Typography>
          </Box>
          <Box
            sx={{
              width: 8,
              height: 32,
              backgroundColor: color,
              borderRadius: 1,
              opacity: isSelected ? 1 : 0.5,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
