import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/login/Login";
import Patients from "pages/patients/Patients";
import Clinics from "pages/clinics/Clinics";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "pages/not-found/NotFound";
import Wrapper from "layout/wrapper/Wrapper";
import { ROUTE_PATHS } from "constants/constants";
import Statistics from "pages/dashboard/Statistics";
import Standard from "pages/dashboard/Standard";

const AppRoutes: React.FC = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path={ROUTE_PATHS.DASHBOARD.STATISTICS_DASHBOARD}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Wrapper>
                <Statistics />
              </Wrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE_PATHS.DASHBOARD.STANDARD_DASHBOARD}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Wrapper>
                <Standard />
              </Wrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE_PATHS.PATIENTS}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Wrapper>
                <Patients />
              </Wrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE_PATHS.CLINICS}
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
