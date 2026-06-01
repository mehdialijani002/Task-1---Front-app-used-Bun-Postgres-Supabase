"use client";

import { Typography, Button, Link, Paper, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import { usePostTechnicianForgetPassword } from "@/hooks/api/useTechnicianAuth";
import { usePostPropertyManagerForgetPassword } from "@/hooks/api/usePropertyManagerAuthApi";
import { showMessage } from "@/lib/snackBarService";

export default function CheckEmail({
  showButton,
  userEmail,
  setEmailSend,
  role,
}) {
  const technicianResetPassowrd = usePostTechnicianForgetPassword();
  const propertyManagerResetPassowrd = usePostPropertyManagerForgetPassword();

  // Map roles to their respective reset password services
  const resetPasswordServices = {
    technician: technicianResetPassowrd.mutate,
    PropertyManager: propertyManagerResetPassowrd.mutate,
  };

  const handleResendEmail = () => {
    const mutateFn = resetPasswordServices[role];

    if (!mutateFn) {
      showMessage("Invalid role provided.", "error");
      return;
    }

    mutateFn(
      { email: userEmail },
      {
        onSuccess: () => showMessage("Email sent to you again.", "info"),
        onError: () =>
          showMessage("Failed to send email. Try again later.", "error"),
      }
    );
  };

  return (
    <Paper
      elevation={0}
      sx={{
        padding: "32px",
        maxWidth: "458px",
        width: "100%",
        borderRadius: "24px",
      }}
    >
      <Image
        src="/images/panel/checkEmail.svg"
        alt="Check your email"
        width={80}
        height={80}
      />
      <Typography variant="h5" gutterBottom>
        Check your email
      </Typography>
      <Typography variant="subtitleSmall" color="text.secondary">
        We've sent a link to{" "}
        <strong>{userEmail || "<<email not found>>"}</strong>
        <br />
        Check your inbox and follow the instructions.
      </Typography>

      {showButton && (
        <Button
          component={NextLink}
          href="/panel/signin?welcome=true"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Back to Login
        </Button>
      )}

      <Divider sx={{ mt: 4, mb: 2 }} />
      <Typography variant="body2">
        Did not receive the email?{" "}
        <Link href="#" underline="hover" onClick={handleResendEmail}>
          Resend Email
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Wrong Email Address?{" "}
        <Link
          underline="hover"
          sx={{ cursor: "pointer" }}
          onClick={() => setEmailSend(false)}
        >
          Change Email Address
        </Link>
      </Typography>
    </Paper>
  );
}
