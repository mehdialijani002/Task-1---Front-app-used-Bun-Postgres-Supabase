"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import { FormInputText } from "@/components/UI/TextField/FormInputText";
import { PropertyTypeAutocomplete } from "@/api/AutoComplete/PropertyTypeAutocomplete";
import { usePostBookDemo } from "@/hooks/api/useBookDemoApi";
import { phoneRegExp } from "@/utils/functions";
import ConfirmationofDemo from "./ConfirmationofDemo";
import { useSnackbar } from "@/context/SnackBarContext";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("First Name is required!")
    .min(2, "First Name must be at least 2 characters long"),
  last_name: yup
    .string()
    .required("Last Name is required!")
    .min(2, "Last Name must be at least 2 characters long"),
  phone_number: yup
    .string()
    .required("Phone Number is required!")
    .matches(phoneRegExp, "Phone number is not valid for Canada"),
  company_name: yup.string().required("Company Name is required!"),
  email_address: yup
    .string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Email must include a valid domain (e.g., .com, .net, .org)"
    ),
});

const defaultValues = {
  first_name: "",
  last_name: "",
  phone_number: "",
  company_name: "",
  email_address: "",
  property_type: "",
};

export default function FormDemoComponent() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const bookDemo = usePostBookDemo();
  const { showMessage } = useSnackbar();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const onSubmit = (data) => {
    bookDemo.mutate(
      { ...data },
      {
        onSuccess: () => {
          setShowConfirmation(true);
        },
      }
    );
  };

  return (
    <>
      {!showConfirmation ? (
        <Paper
          sx={{
            maxWidth: "650px",
            mx: "auto",
            p: { xs: "15px", md: "40px" },
            borderRadius: "16px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h5" color="text.primary">
            Request a Free Demo{" "}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Complete the form and our experts will call you to set up your demo
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormInputText
                  control={control}
                  name="first_name"
                  label="First Name*"
                  size="large"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormInputText
                  control={control}
                  name="last_name"
                  label="Last Name*"
                  size="large"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormInputText
                  control={control}
                  name="email_address"
                  label="Email*"
                  size="large"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormInputText
                  control={control}
                  name="phone_number"
                  label="Phone number*"
                  size="large"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <FormInputText
                  control={control}
                  name="company_name"
                  label="Company Name*"
                  size="large"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <PropertyTypeAutocomplete
                  control={control}
                  name="property_type"
                  label="Property Type"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  startIcon={
                    bookDemo.isPending ? (
                      <CircularProgress color="inherit" size={18} />
                    ) : null
                  }
                  fullWidth
                  variant="contained"
                  disabled={bookDemo.isPending}
                  type="submit"
                  size="large"
                >
                  {bookDemo.isPending ? "Sending Request ..." : "Send Request"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      ) : (
        <ConfirmationofDemo />
      )}
    </>
  );
}
