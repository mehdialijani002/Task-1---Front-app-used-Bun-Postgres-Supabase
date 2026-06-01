"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Divider,
  Skeleton,
  Alert,
} from "@mui/material";
import { FormInputPassword } from "@/components/UI/TextField/FormInputPassword";
import {
  usePostPropertyManagerActivation,
  useGetPropertyManagerActivationVerifyToken,
} from "@/hooks/api/usePropertyManagerAuthApi";
import { FcGoogle } from "react-icons/fc";
import { showMessage } from "@/lib/snackBarService";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords do not match."),
});

export default function PropertyManagerActivationComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  const propertyManagerActivation = usePostPropertyManagerActivation();
  const token = searchParams.get("token");

  // Verify token
  const { data, isLoading, isError } =
    useGetPropertyManagerActivationVerifyToken(
      { token },
      {
        enabled: !!token,
        onSuccess: () => {
          showMessage(
            "Verified successfully. Please set your password.",
            "success"
          );
        },
      }
    );

  const onSubmit = (data) => {
    propertyManagerActivation.mutate(
      { ...data, token },
      {
        onSuccess: () => {
          router.replace("/panel/property-manager-signin?activate=true");
        },
      }
    );
  };

  // ✅ Loading state → Skeletons
  if (isLoading) {
    return (
      <Paper
        elevation={0}
        sx={{
          padding: { xs: "10px", md: "40px" },
          maxWidth: "457px",
          width: "100%",
          borderRadius: "24px",
        }}
      >
        <Skeleton variant="text" width="60%" height={40} />
        <Skeleton variant="text" width="80%" height={25} />
        <Box sx={{ mt: 3 }}>
          <Skeleton
            variant="rectangular"
            height={56}
            sx={{ mb: 2, borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            height={56}
            sx={{ mb: 2, borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            height={48}
            sx={{ mb: 2, borderRadius: 2 }}
          />
          <Divider sx={{ mb: 1 }}>
            <Typography color="textSecondary">OR</Typography>
          </Divider>
          <Skeleton
            variant="rectangular"
            height={48}
            sx={{ borderRadius: 2 }}
          />
        </Box>
      </Paper>
    );
  }

  // ✅ Error state → Alert UI
  if (isError) {
    return (
      <Box>
        <Paper
          elevation={0}
          sx={{
            padding: { xs: "10px", md: "40px" },
            maxWidth: "457px",
            width: "100%",
            borderRadius: "24px",
          }}
        >
          <Alert severity="error" sx={{ mb: 2 }}>
            Invalid or expired token. Please request a new activation link.
          </Alert>
          {/* <Button
            fullWidth
            variant="contained"
            onClick={() => router.push("/panel/property-manager-signin")}
          >
            Back to Sign In
          </Button> */}
        </Paper>
      </Box>
    );
  }

  // ✅ Main form
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          padding: { xs: "10px", md: "40px" },
          maxWidth: "457px",
          width: "100%",
          borderRadius: "24px",
        }}
      >
        <Typography variant="h5" color="text.primary">
          Create Your Password
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Your account with email user@example.com will be activated by setting
          a password
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={3}>
            <Grid item size={{ xs: 12 }}>
              <FormInputPassword
                control={control}
                name="password"
                label="Password"
                size="large"
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <FormInputPassword
                control={control}
                name="confirm_password"
                label="Confirm Password"
                size="large"
              />
            </Grid>
            <Grid item size={{ xs: 12 }} sx={{ mt: 0.5 }}>
              <Button
                startIcon={
                  propertyManagerActivation.isPending ? (
                    <Skeleton variant="circular" width={18} height={18} />
                  ) : null
                }
                fullWidth
                variant="contained"
                type="submit"
                size="large"
                disabled={propertyManagerActivation.isPending}
              >
                {propertyManagerActivation.isPending
                  ? "Setting Password ..."
                  : "Set Password"}
              </Button>
            </Grid>

            <Grid item size={{ xs: 12 }}>
              <Divider sx={{ mb: 1 }}>
                <Typography color="textSecondary">OR</Typography>
              </Divider>
              <Button
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
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
