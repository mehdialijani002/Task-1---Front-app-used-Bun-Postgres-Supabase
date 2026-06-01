"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiEdit } from "react-icons/fi";

import { FormInputText } from "@/components/UI/TextField/FormInputText";
import { phoneRegExp } from "@/utils/functions";

/* ---------------- VALIDATION SCHEMA ---------------- */

const schema = yup.object().shape({
  last_name: yup
    .string()
    .required("Last Name is required!")
    .min(2, "Last Name must be at least 2 characters long"),
  first_name: yup
    .string()
    .required("First Name is required!")
    .min(2, "First Name must be at least 2 characters long"),
  birth_date: yup.string().required("Birth Date is required!"),
  email_address: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  phone_number: yup
    .string()
    .required("Phone Number is required!")
    .matches(phoneRegExp, "Phone number is not valid for Canada"),
  role: yup.string().required("Role is required!"),
});

/* ---------------- DEFAULT DATA ---------------- */

const initialData = {
  first_name: "John",
  last_name: "Doe",
  birth_date: "1995-06-12",
  email_address: "john.doe@email.com",
  phone_number: "+16471234567",
  role: "Developer",
};

/* ---------------- COMPONENT ---------------- */

export default function PersonalInfoCard() {
  const [isEdit, setIsEdit] = useState(false);

  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: initialData,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const values = watch();

  const handleEdit = () => setIsEdit(true);

  const handleCancel = () => {
    reset(initialData);
    setIsEdit(false);
  };

  const onSubmit = (data) => {
    console.log("Saved data:", data);
    setIsEdit(false);
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent sx={{ p: 3 }}>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Personal Information</Typography>

          {isEdit ? (
            <Box>
              <Button onClick={handleCancel} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button
                color="success"
                variant="contained"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </Box>
          ) : (
            <Button startIcon={<FiEdit />} onClick={handleEdit}>
              Edit
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* CONTENT */}
        <Grid container spacing={3}>
          {/* LAST NAME */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText
                control={control}
                name="last_name"
                label="Last Name*"
              />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">Last Name</Typography>
                <Typography variant="bodyLarge">{values.last_name}</Typography>
              </Box>
            )}
          </Grid>

          {/* FIRST NAME */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText
                control={control}
                name="first_name"
                label="First Name*"
              />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">First Name</Typography>
                <Typography variant="bodyLarge">{values.first_name}</Typography>
              </Box>
            )}
          </Grid>

          {/* BIRTH DATE */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText
                control={control}
                name="birth_date"
                label="Birth Date*"
              />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">Birth Date</Typography>
                <Typography variant="bodyLarge">{values.birth_date}</Typography>
              </Box>
            )}
          </Grid>

          {/* EMAIL */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText
                control={control}
                name="email_address"
                label="Email Address*"
              />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">Email Address</Typography>
                <Typography variant="bodyLarge">
                  {values.email_address}
                </Typography>
              </Box>
            )}
          </Grid>

          {/* PHONE */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText
                control={control}
                name="phone_number"
                label="Phone Number*"
              />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">Phone Number</Typography>
                <Typography variant="bodyLarge">
                  {values.phone_number}
                </Typography>
              </Box>
            )}
          </Grid>

          {/* ROLE */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText control={control} name="role" label="Role*" />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">Role</Typography>
                <Typography variant="bodyLarge">{values.role}</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
