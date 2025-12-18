import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  LocalHospital as ClinicsIcon,
  CalendarMonth as ScheduleIcon,
  Receipt as InvoiceIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  Notifications,
  Queue,
  AdminPanelSettings,
} from "@mui/icons-material";
import { PROJECT_NAME, PRIMARY_COLOR } from "../../constants/constants";
import "./Sidebar.css";

interface MenuItem {
  label: string;
  path?: string;
  icon: React.ReactNode;
  children?: { label: string; path: string }[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Main Menu",
    items: [
      {
        label: "Dashboard",
        icon: <DashboardIcon />,
        children: [
          { label: "Statistics", path: "/dashboard" },
          { label: "Standard", path: "/dashboard/standard" },
        ],
      },
      { label: "Clinics", path: "/clinics", icon: <ClinicsIcon /> },
      { label: "Patients", path: "/patients", icon: <PeopleIcon /> },
    ],
  },
  {
    title: "Other Menu",
    items: [
      { label: "Calendar", path: "/schedule", icon: <ScheduleIcon /> },
      { label: "Referrals", path: "/referrals", icon: <Queue /> },
      {
        label: "Notifications",
        path: "/notifications",
        icon: <Notifications />,
      },
    ],
  },
  {
    title: "Help & Settings",
    items: [
      { label: "Roles", path: "/roles", icon: <InvoiceIcon /> },
      { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
      { label: "Reports", path: "/reports", icon: <AdminPanelSettings /> },
    ],
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>(["Dashboard"]);

  const handleToggle = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (path?: string) => path && location.pathname === path;

  const renderMenuItem = (item: MenuItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus.includes(item.label);
    const active = isActive(item.path);

    return (
      <React.Fragment key={item.label}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() =>
              hasChildren
                ? handleToggle(item.label)
                : item.path && navigate(item.path)
            }
            className={`sidebar-menu-item ${active ? "active" : ""}`}
            sx={{
              backgroundColor: active ? PRIMARY_COLOR : "transparent",
              color: active ? "#fff" : "inherit",
              borderRadius: "8px",
              mb: 0.5,
              "&:hover": {
                backgroundColor: active ? PRIMARY_COLOR : "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: active ? "#fff" : "rgba(0,0,0,0.6)", minWidth: 40 }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </ListItem>

        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children!.map((child) => {
                const childActive = isActive(child.path);
                return (
                  <ListItemButton
                    key={child.path}
                    onClick={() => navigate(child.path)}
                    sx={{
                      pl: 6,
                      borderRadius: "8px",
                      mb: 0.5,
                      color: childActive ? PRIMARY_COLOR : "inherit",
                      borderLeft: childActive
                        ? `3px solid ${PRIMARY_COLOR}`
                        : "3px solid transparent",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    <ListItemText primary={child.label} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Box className="sidebar-container">
      {/* Logo Section */}
      <Box className="sidebar-logo">
        <Box className="logo-icon" sx={{ backgroundColor: PRIMARY_COLOR }}>
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>
            +
          </Typography>
        </Box>
        <Typography variant="h6" className="logo-text">
          {PROJECT_NAME}
        </Typography>
      </Box>

      {/* Menu Sections */}
      <Box className="sidebar-menu">
        {menuSections.map((section) => (
          <Box key={section.title} className="menu-section">
            <Typography variant="caption" className="section-title">
              {section.title}
            </Typography>
            <List>{section.items.map(renderMenuItem)}</List>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
