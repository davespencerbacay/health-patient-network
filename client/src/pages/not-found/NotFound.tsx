import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "/src/assets/undraw/1.svg";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bfe7ff",
        px: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Illustration placeholder */}
        <Box
          sx={{
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={NotFoundImage} alt="notfound" width={600} />
        </Box>

        {/* Text Content */}
        <Box>
          <Typography variant="h1" sx={{ fontWeight: 700, color: "#2c3e50" }}>
            404
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, color: "#34495e" }}>
            Page Not Found
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
