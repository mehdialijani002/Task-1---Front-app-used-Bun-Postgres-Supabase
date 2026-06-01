import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function ConfirmationofDemo() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f8f9fa"
      mx={2}
      my={2}
    >
      <Paper
        elevation={1}
        sx={{
          maxWidth: 517,
          textAlign: "center",
          p: "40px",
          borderRadius: "10px",
        }}
      >
        <IoMdCheckmarkCircleOutline
          size={56}
          color="#0E965D"
          style={{ marginBottom: 10 }}
        />

        <Typography variant="h5" fontWeight="700" gutterBottom>
          Thank you for your request!
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={5}
          fontWeight="400"
          sx={{
            lineHeight: "28px",
            letterSpacing: "0.4px",
            textAlign: "center",
          }}
        >
          We’ve received your information successfully, and our team will get in
          touch with you soon to arrange the demo.
        </Typography>

        <Link href="/" passHref>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ maxWidth: "253px" }}
          >
            Back to Home
          </Button>
        </Link>
      </Paper>
    </Box>
  );
}
