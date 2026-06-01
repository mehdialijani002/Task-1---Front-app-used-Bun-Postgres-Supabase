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
  Alert,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FormInputText } from "@/components/UI/TextField/FormInputText";
import { FormInputPassword } from "@/components/UI/TextField/FormInputPassword";
import { useAuth } from "@/hooks/useAuth";
import NextLink from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { showMessage } from "@/lib/snackBarService";

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

export default function PropertyManagerSignInComponent() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const auth = useAuth();
  const searchParams = useSearchParams();
  const activate = searchParams.get("activate");

  const onSubmit = (data) => {
    auth.PropertyManagerSignIn(data);
  };

  return (
    <Box sx={{ maxWidth: "494px", mx: "auto", px: 3 }}>
      <Typography variant="h3" color="text.primary" gutterBottom>
        Login as Property Manager
      </Typography>
      {/* {activate === "0" ? (
        <Alert
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
          variant="outlined"
          severity="info"
        >
          This account has already been activated. Please log in with your email
          and password
        </Alert>
      ) : (
       
      )} */}
      <Typography sx={{ mb: 2 }} variant="body1">
        Enter your email and password to continue
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
              href="/panel/property-manager-forget-password"
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
                auth.propertyManagerSignIn.isPending ? (
                  <CircularProgress color="inherit" size={18} />
                ) : null
              }
              fullWidth
              variant="contained"
              disabled={auth.propertyManagerSignIn.isPending}
              type="submit"
              size="large"
            >
              {auth.propertyManagerSignIn.isPending ? "Loging in..." : "Log in"}
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
