import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Wrapper.css";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box className="wrapper-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area (Navbar + Content + Footer) */}
      <Box className="main-area">
        <Navbar />
        <Box component="main" className="content-area">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Wrapper;
