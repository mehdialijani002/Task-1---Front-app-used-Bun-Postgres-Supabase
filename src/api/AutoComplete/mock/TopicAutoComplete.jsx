"use client";

import { Controller } from "react-hook-form";
import {
  Autocomplete,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MobileDrawer } from "@/components/UI/MobileDrawer/MobileDrawer";
import { useViewportHeight } from "@/hooks/useViewportHeight";

/** 🔹 Static TOPIC options */
const TOPIC_OPTIONS = [
  { label: "Technology", value: "technology" },
  { label: "Business", value: "business" },
  { label: "Marketing", value: "marketing" },
  { label: "Finance", value: "finance" },
  { label: "Healthcare", value: "healthcare" },
];

export const TopicAutocomplete = ({
  name,
  control,
  label = "Topic",
  size = "large",
  onChange,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const viewportHeight = useViewportHeight();

  const options = TOPIC_OPTIONS;

  const handleChange = (newValue, onFieldChange) => {
    const value = newValue?.value ?? newValue ?? null;
    onFieldChange(value);
    if (onChange) onChange(value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange: onFieldChange },
        fieldState: { error },
      }) =>
        isMobile ? (
          <MobileDrawer
            label={label}
            options={options}
            value={value}
            error={error}
            viewportHeight={viewportHeight}
            onChange={(val) => handleChange(val, onFieldChange)}
          />
        ) : (
          <Autocomplete
            options={options}
            getOptionLabel={(o) => o.label}
            value={options.find((o) => o.value === value) || null}
            size={size}
            fullWidth
            onChange={(_, val) => handleChange(val, onFieldChange)}
            noOptionsText="Empty !!"
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                size={size}
                fullWidth
                error={!!error}
                helperText={error?.message || ""}
              />
            )}
            {...rest}
          />
        )
      }
    />
  );
};
