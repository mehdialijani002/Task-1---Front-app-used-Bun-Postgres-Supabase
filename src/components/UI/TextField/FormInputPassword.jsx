import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const FormInputPassword = ({
  name,
  control,
  label,
  rules,
  size = "medium",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          {...rest}
        />
      )}
    />
  );
};
