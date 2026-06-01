import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | BizHome Solutions",
  description: "We couldn't find the page you're looking for.",
};

export default function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        bgcolor: "#f9f9f9",
      }}
    >
      <Image
        src="/images/landing/footerLogo.svg"
        alt="BizHome Solutions Logo"
        width={100}
        height={100}
        style={{ marginBottom: 24 }}
      />

      <Typography variant="h3" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 400 }}
      >
        Sorry, the page you're looking for doesn't exist or has been moved.
      </Typography>

      <Link href="/" passHref>
        <Button variant="contained" color="primary" size="large">
          Back to Home
        </Button>
      </Link>
    </Box>
  );
}
