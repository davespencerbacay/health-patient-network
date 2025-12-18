import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/login/Login";
import Dashboard from "pages/dashboard/Dashboard";
import Patients from "pages/patients/Patients";
import Clinics from "pages/clinics/Clinics";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "pages/not-found/NotFound";
import Wrapper from "layout/wrapper/Wrapper";

const AppRoutes: React.FC = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Wrapper>
                <Dashboard />
              </Wrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/patients"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Wrapper>
                <Patients />
              </Wrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clinics"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Wrapper>
                <Clinics />
              </Wrapper>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
