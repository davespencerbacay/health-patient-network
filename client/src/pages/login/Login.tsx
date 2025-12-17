import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { PRIMARY_COLOR } from "../../constants/constants";
import NotFoundImage from "/src/assets/undraw/1.svg";
import Logo from "../../assets/logo-white.png";
import "./Login.css";

// Reusable styles
const WHITE_COLOR = "#ffffff";
const WHITE_TRANSLUCENT = "rgba(255, 255, 255, 0.7)";

const inputSx = {
  color: WHITE_COLOR,
  "& .MuiInput-underline:before, & .MuiInput-underline:hover, & .MuiInput-underline:hover:before, & .MuiInput-underline:after":
    {
      borderBottomColor: WHITE_COLOR,
    },
};

const inputLabelSx = { color: WHITE_TRANSLUCENT };

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { username, password });
  };

  const renderPasswordAdornment = (
    <InputAdornment position="end">
      <IconButton
        onClick={handleTogglePassword}
        edge="end"
        size="small"
        sx={{ color: WHITE_COLOR }}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <div className="login-main-container">
      <Container className="container-wrapper">
        <div className="login-container">
          <Box className="login-left" sx={{ backgroundColor: PRIMARY_COLOR }}>
            <Box className="login-form-wrapper">
              <Box className="login-header">
                <img src={Logo} alt="Logo" />
                <Typography variant="h2" fontWeight={300}>
                  Login
                </Typography>
                <Typography variant="body2" className="login-subtitle">
                  Enter your account details
                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleLogin}
                className="login-form"
              >
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="login-input"
                  InputProps={{ sx: inputSx }}
                  InputLabelProps={{ sx: inputLabelSx }}
                />

                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  InputProps={{
                    sx: inputSx,
                    endAdornment: renderPasswordAdornment,
                  }}
                  InputLabelProps={{ sx: inputLabelSx }}
                />

                <Link className="forgot-password-link" to="/">
                  Forgot Password?
                </Link>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="login-button"
                  sx={{ backgroundColor: "#ffffff", color: PRIMARY_COLOR }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="login-right" sx={{ backgroundColor: WHITE_COLOR }}>
            <Box className="welcome-content">
              <Typography variant="h2" className="welcome-title">
                Welcome to
              </Typography>
              <Typography
                variant="h2"
                fontWeight={700}
                className="welcome-title"
              >
                HPN Portal
              </Typography>
              <Typography variant="body1" className="welcome-subtitle">
                Login to access your account
              </Typography>

              <Box className="illustration-container">
                <img src={NotFoundImage} alt="Login Illustration" width={400} />
              </Box>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Login;
