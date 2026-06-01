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

/* ---------------- VALIDATION SCHEMA ---------------- */

const schema = yup.object().shape({
  company_name: yup
    .string()
    .required("Company Name is required!")
    .min(2, "Company Name must be at least 2 characters"),
  start_date: yup.string().required("Start Date is required!"),
});

/* ---------------- DEFAULT DATA ---------------- */

const initialData = {
  company_name: "Acme Corporation",
  start_date: "2021-04-01",
};

/* ---------------- COMPONENT ---------------- */

export default function CompanyInfoCard() {
  const [isEdit, setIsEdit] = useState(false);

  const { control, handleSubmit, reset, watch } = useForm({
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
    console.log("Saved company data:", data);
    setIsEdit(false);
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent sx={{ p: 3 }}>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Company Information</Typography>

          {isEdit ? (
            <Box>
              <Button onClick={handleCancel} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
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
        <Grid container spacing={4}>
          {/* COMPANY NAME */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText
                control={control}
                name="company_name"
                label="Company Name*"
              />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">Company Name</Typography>
                <Typography variant="bodyLarge">
                  {values.company_name}
                </Typography>
              </Box>
            )}
          </Grid>

          {/* START DATE */}
          <Grid item size={{ xs: 12, md: 4 }}>
            {isEdit ? (
              <FormInputText
                control={control}
                name="start_date"
                label="Start Date*"
              />
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="bodySmall">Start Date</Typography>
                <Typography variant="bodyLarge">{values.start_date}</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
