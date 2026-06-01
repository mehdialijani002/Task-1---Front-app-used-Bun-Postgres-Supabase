import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
const LoadingSpinner = ({ sx }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",

        ...sx,
      }}
    >
      <Image
        src="/images/landing/footerLogo.svg"
        alt="Logo"
        width={199}
        height={171}
      />
      <CircularProgress size={60} disableShrink sx={{ mt: 6 }} />
    </Box>
  );
};

export default LoadingSpinner;
