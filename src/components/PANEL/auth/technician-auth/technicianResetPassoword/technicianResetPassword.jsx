"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Grid,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { FormInputPassword } from "@/components/UI/TextField/FormInputPassword";
import { usePostTechnicianResetPassword } from "@/hooks/api/useTechnicianAuth";

const schema = yup.object().shape({
  new_password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

export default function ResetPasswordComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const technicianResetPassword = usePostTechnicianResetPassword();
  const token = searchParams.get("token");

  const onSubmit = (data) => {
    technicianResetPassword.mutate(
      { ...data, token },
      {
        onSuccess: () => {
          router.replace("/panel/technician-signin");
        },
      }
    );
  };

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
          Set a New Password
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3.5 }}>
          Please choose a new password to secure your account.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={3}>
            <Grid item size={{ xs: 12 }}>
              <FormInputPassword
                control={control}
                name="new_password"
                label="New Password"
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
                  technicianResetPassword.isPending ? (
                    <CircularProgress color="inherit" size={18} />
                  ) : null
                }
                fullWidth
                variant="contained"
                type="submit"
                size="large"
                disabled={technicianResetPassword.isPending}
              >
                {technicianResetPassword.isPending
                  ? "Saving ..."
                  : "Save Password"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
