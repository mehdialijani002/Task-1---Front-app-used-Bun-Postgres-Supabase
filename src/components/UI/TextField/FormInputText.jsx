import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const FormInputText = ({
  name,
  control,
  label,
  maxLength,
  readOnly,
  rules,
  size = "medium",
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size={isMobile ? "small" : size}
          error={!!error}
          onChange={onChange}
          value={value || ""}
          fullWidth
          label={label}
          variant="outlined"
          inputProps={{ ...rest.inputProps, maxLength, readOnly }}
          inputRef={ref}
          {...rest}
        />
      )}
    />
  );
};
