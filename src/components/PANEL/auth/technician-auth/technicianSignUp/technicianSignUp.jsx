"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Typography,
  Divider,
  Link,
  Grid,
  CircularProgress,
} from "@mui/material";
import NextLink from "next/link";

import { FormInputText } from "@/components/UI/TextField/FormInputText";
import { FormInputPassword } from "@/components/UI/TextField/FormInputPassword";
import { useRouter } from "next/navigation";
import { showMessage } from "@/lib/snackBarService";
import { usePostTechnicianSignUp } from "@/hooks/api/useTechnicianAuth";

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

export default function TechnicianSignUpForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const technicianSignUp = usePostTechnicianSignUp();

  const onSubmit = (data) => {
    technicianSignUp.mutate(
      { ...data },
      {
        onSuccess: () => {
          showMessage("Sign up successful. Please log in.", "success");
          router.push("/panel/technician-signin");
        },
      },
    );
  };

  return (
    <Box sx={{ maxWidth: "494px", mx: "auto", px: 3 }}>
      <Typography variant="h3" color="text.primary" gutterBottom>
        Sign up as Technician{" "}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        Already registered? {""}
        <Link
          component={NextLink}
          href="/panel/technician-signin"
          underline="hover"
        >
          Log in{" "}
        </Link>
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
            <FormInputPassword
              control={control}
              name="password"
              label="Password"
              size="large"
            />
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ my: -1 }}>
            <Typography
              sx={{
                mb: 1,
                letterSpacing: "0.4px",
                fontWeight: "400",
                lineHeight: "24px",
                fontSize: "0.75rem",
              }}
            >
              By clicking Continue to join or sign in, you agree to BizHome’s{" "}
              <Link
                component={NextLink}
                href="/privacy-policy"
                underline="hover"
              >
                Privacy Policy
              </Link>
              .
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              startIcon={
                technicianSignUp.isPending ? (
                  <CircularProgress color="inherit" size={18} />
                ) : null
              }
              fullWidth
              variant="contained"
              type="submit"
              disabled={technicianSignUp.isPending}
              size="large"
            >
              {!technicianSignUp.isPending
                ? " Agree & Join"
                : "Please wait ..."}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Divider sx={{ mt: 2, mb: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mx: 1.5 }}>
          OR
        </Typography>
      </Divider>

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
