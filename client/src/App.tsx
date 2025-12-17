import React from "react";
import AppRoutes from "routes/AppRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes></AppRoutes>
    </ThemeProvider>
  );
};

export default App;
