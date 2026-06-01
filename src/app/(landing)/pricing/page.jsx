import { Box, Alert, Typography } from "@mui/material";
import Image from "next/image";

export const metadata = {
  title: "BizHome Solutions - Pricing",
  description: "Your one-stop solution for home services",
};
export default function Pricing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Image
          src="/images/landing/footerLogo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
      </Box>
      <Alert severity="info" sx={{ mb: 2, maxWidth: 400 }}>
        This page is under development
      </Alert>
      <Typography variant="h5" color="text.secondary">
        Coming Soon!
      </Typography>
    </Box>
  );
}
