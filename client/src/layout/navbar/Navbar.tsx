import React from "react";
import {
  Box,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Email as EmailIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <Box className="navbar-container">
      {/* Search Bar */}
      <Box className="navbar-search">
        <SearchIcon className="search-icon" />
        <InputBase
          placeholder="Search here..."
          className="search-input"
          fullWidth
        />
      </Box>

      {/* Right Section */}
      <Box className="navbar-right">
        <IconButton size="small">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton size="small">
          <Badge badgeContent={5} color="error">
            <EmailIcon />
          </Badge>
        </IconButton>
        <IconButton size="small">
          <SettingsIcon />
        </IconButton>

        {/* User Profile */}
        <Box className="user-profile">
          <Avatar alt="User" src="" sx={{ width: 36, height: 36 }} />
          <Typography variant="body2" className="user-name">
            Dave
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
