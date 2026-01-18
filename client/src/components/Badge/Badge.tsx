import React from "react";
import { STATUSES } from "constants/constants";

type BadgeVariant =
  | typeof STATUSES.ACTIVE
  | typeof STATUSES.INACTIVE
  | typeof STATUSES.PENDING
  | typeof STATUSES.DECLINED
  | typeof STATUSES.CANCELLED;

interface BadgeProps {
  variant: BadgeVariant;
  children?: React.ReactNode;
}

const getBackgroundColor = (variant: BadgeVariant): string => {
  switch (variant) {
    case STATUSES.ACTIVE:
      return "#4caf50"; // Green
    case STATUSES.PENDING:
      return "#ff9800"; // Orange
    case STATUSES.INACTIVE:
      return "#9e9e9e"; // Gray
    case STATUSES.DECLINED:
      return "#f44336"; // Red
    case STATUSES.CANCELLED:
      return "#607d8b"; // Blue Gray
    default:
      return "#9e9e9e";
  }
};

const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  return (
    <span
      style={{
        padding: "4px 12px",
        borderRadius: "4px",
        backgroundColor: getBackgroundColor(variant),
        color: "white",
        fontSize: "0.875rem",
        fontWeight: 500,
      }}
    >
      {children || variant}
    </span>
  );
};

export default Badge;
