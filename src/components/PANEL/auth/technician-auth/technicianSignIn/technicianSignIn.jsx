"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Typography,
  Divider,
  Grid,
  Link,
  CircularProgress,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FormInputText } from "@/components/UI/TextField/FormInputText";
import { FormInputPassword } from "@/components/UI/TextField/FormInputPassword";
import { useAuth } from "@/hooks/useAuth";
import NextLink from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { showMessage } from "@/lib/snackBarService";
import axiosInstance from "@/api/_instanceAxios";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function TechnicianSignIn() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const auth = useAuth();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE === "true";

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        return;
      }

      if (useSupabase) {
        showMessage(
          "Supabase email confirmation is handled locally. If your email is confirmed, sign in with your credentials.",
          "info",
        );
        return;
      }

      try {
        const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await axiosInstance.get(
          `${baseURL}/api/v1/technician/email/verify?token=${token}`,
        );

        showMessage("Verified successfully, now log in", "success");
      } catch (err) {
        showMessage("Verification failed or token expired.", "error");
      }
    };

    verifyEmail();
  }, [searchParams, useSupabase]);
  const onSubmit = (data) => {
    auth.TechnicianSignIn(data);
  };

  return (
    <Box sx={{ maxWidth: "494px", mx: "auto", px: 3 }}>
      <Typography variant="h3" color="text.primary" gutterBottom>
        Login as Technician
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        Not registered?{" "}
        <Link
          component={NextLink}
          href="/panel/technician-signup"
          underline="hover"
        >
          Sign up
        </Link>
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <FormInputText
              control={control}
              name="email"
              label="Email address"
              size="large"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormInputPassword
              control={control}
              name="password"
              label="Password"
              size="large"
            />
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ textAlign: "right", mt: -2 }}>
            <NextLink
              href="/panel/technician-forget-password"
              underline="none"
              variant="body2"
              color="black"
            >
              Forgot your password?
            </NextLink>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              startIcon={
                auth.technicianSignIn.isPending ? (
                  <CircularProgress color="inherit" size={18} />
                ) : null
              }
              fullWidth
              variant="contained"
              disabled={auth.technicianSignIn.isPending}
              type="submit"
              size="large"
            >
              {auth.technicianSignIn.isPending ? "Loging in..." : "Log in"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mt: 2, mb: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mx: 1.5 }}>
          OR
        </Typography>
      </Divider>

      <Typography
        sx={{
          mb: 1,
          letterSpacing: "0.4px",
          fontWeight: "400",
          lineHeight: "24px",
          fontSize: "0.75rem",
        }}
      >
        By clicking Continue to join or sign in,you agree to BizHome’s{" "}
        <Link component={NextLink} href="/privacy-policy" underline="hover">
          Privacy Policy
        </Link>
      </Typography>

      {/* <Button
        fullWidth
        variant="text"
        startIcon={<FcGoogle size={25} />}
        sx={{
          mt: 1,
          borderRadius: "8px",
          backgroundColor: "#ebecf0",
          padding: "12px 24px",
          textTransform: "none",
          fontWeight: 400,
          lineHeight: "24px",
          fontSize: "14px",
          color: "#000",
        }}
      >
        Continue with Google
      </Button> */}

      <Typography
        variant="caption"
        display="block"
        color="text.secondary"
        textAlign="center"
        sx={{ mt: 1 }}
      >
        We'll log you in or create an account if you're new
      </Typography>
    </Box>
  );
}
