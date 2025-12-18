import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.css";
import { PROJECT_NAME } from "../../constants/constants";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Box className="footer-container">
      <Typography variant="body2" className="footer-text">
        © {year} {PROJECT_NAME}. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
