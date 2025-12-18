import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { BreadcrumbDisplay } from "../breadcrumbs/Breadcrumbs";
import { BreadcrumbProvider } from "contexts/BreadcrumbContext";
import "./Wrapper.css";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <BreadcrumbProvider>
      <Box className="wrapper-container">
        <Sidebar />

        <Box className="main-area">
          <Navbar />
          <Box component="main" className="content-area">
            <BreadcrumbDisplay />
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </BreadcrumbProvider>
  );
};

export default Wrapper;
