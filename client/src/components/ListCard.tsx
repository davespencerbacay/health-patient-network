import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

export interface ListCardItem {
  id: string | number;
  name: string;
  primaryText?: string;
  secondaryText?: string;
  avatarContent?: React.ReactNode;
  avatarColor?: string;
  avatarBgColor?: string;
  showRank?: boolean;
  rank?: number;
  chipLabel?: string;
  chipColor?: string;
  score?: number;
  scoreColor?: string;
  trend?: "up" | "down" | "stable";
}

export interface ListCardProps {
  title: string;
  items: ListCardItem[];
  avatarColor?: string;
  avatarBgColor?: string;
  showRankAvatar?: boolean;
  showChip?: boolean;
  showScoreBadge?: boolean;
}

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
  height: "100%",
};

const getScoreColor = (score: number): string => {
  if (score >= 90) return "#10b981";
  if (score >= 80) return "#f59e0b";
  return "#ef4444";
};

const ListCard: React.FC<ListCardProps> = ({
  title,
  items,
  avatarColor = "#015c7d",
  avatarBgColor,
  showRankAvatar = false,
  showChip = false,
  showScoreBadge = false,
}) => {
  const defaultBgColor = avatarBgColor || `${avatarColor}15`;

  return (
    <Card sx={cardStyle}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#1a1a2e", mb: 2 }}
        >
          {title}
        </Typography>
        <List sx={{ p: 0 }}>
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem sx={{ px: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: item.avatarBgColor || defaultBgColor,
                      color: item.avatarColor || avatarColor,
                      fontWeight: 700,
                    }}
                  >
                    {showRankAvatar
                      ? item.rank ?? index + 1
                      : item.avatarContent}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: "#1a1a2e" }}
                    >
                      {item.primaryText || item.name}
                    </Typography>
                  }
                  secondary={
                    item.trend !== undefined ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {item.secondaryText}
                        </Typography>
                        {item.trend === "up" && (
                          <TrendingUp sx={{ fontSize: 14, color: "#10b981" }} />
                        )}
                        {item.trend === "down" && (
                          <TrendingDown
                            sx={{ fontSize: 14, color: "#ef4444" }}
                          />
                        )}
                      </Box>
                    ) : (
                      item.secondaryText
                    )
                  }
                />

                {showChip && item.chipLabel && (
                  <Chip
                    label={item.chipLabel}
                    size="small"
                    sx={{
                      backgroundColor: `${item.chipColor || "#10b981"}15`,
                      color: item.chipColor || "#10b981",
                      fontWeight: 600,
                    }}
                  />
                )}

                {showScoreBadge && item.score !== undefined && (
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      border: `3px solid ${
                        item.scoreColor || getScoreColor(item.score)
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, color: "#1a1a2e" }}
                    >
                      {item.score}
                    </Typography>
                  </Box>
                )}
              </ListItem>
              {index < items.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ListCard;
