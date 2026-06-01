"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Typography,
  Link,
  Grid,
  CircularProgress,
} from "@mui/material";
import { FormInputText } from "@/components/UI/TextField/FormInputText";
import CheckEmail from "@/components/PANEL/auth/checkEmail/checkEmail";
import NextLink from "next/link";
import { usePostPropertyManagerForgetPassword } from "@/hooks/api/usePropertyManagerAuthApi";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function PropertyManagerForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [emailSend, setEmailSend] = useState(false);
  const PropertyManagerForgetPassowrd = usePostPropertyManagerForgetPassword();

  const onSubmit = (data) => {
    PropertyManagerForgetPassowrd.mutate(
      { ...data },
      {
        onSuccess: () => {
          setEmailSend(true);
        },
      }
    );
  };

  return (
    <>
      {emailSend ? (
        <CheckEmail
          showButton={false}
          userEmail={watch("email")}
          setEmailSend={setEmailSend}
          role="PropertyManager"
        />
      ) : (
        <Box sx={{ maxWidth: "494px", width: "100%", mx: "auto", px: 2 }}>
          <Typography variant="h3" color="text.primary" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Enter your email address to receive a link to reset your password
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                <Button
                  startIcon={
                    PropertyManagerForgetPassowrd.isPending ? (
                      <CircularProgress color="inherit" size={18} />
                    ) : null
                  }
                  fullWidth
                  variant="contained"
                  type="submit"
                  size="large"
                  disabled={PropertyManagerForgetPassowrd.isPending}
                >
                  {PropertyManagerForgetPassowrd.isPending
                    ? "Sending..."
                    : "Send Email"}
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Remembered? {""}
            <Link
              component={NextLink}
              href="/panel/property-manager-signin"
              underline="hover"
            >
              Log in
            </Link>
          </Typography>
        </Box>
      )}
    </>
  );
}
