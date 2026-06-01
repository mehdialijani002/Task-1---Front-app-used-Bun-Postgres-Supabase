"use client";
import { Controller } from "react-hook-form";
import {
  Autocomplete,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useGetBookDemoDropdown } from "@/hooks/api/useBookDemoApi";
import { MobileDrawer } from "@/components/UI/MobileDrawer/MobileDrawer";
import { useViewportHeight } from "@/hooks/useViewportHeight";

export const PropertyTypeAutocomplete = ({
  name,
  control,
  label = "Property Type",
  size = "large",
  onChange,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const viewportHeight = useViewportHeight();

  const BookDemoQuery = useGetBookDemoDropdown();
  // Support both API and Supabase shapes
  const raw = BookDemoQuery?.data;
  let options = [];
  if (raw) {
    // Axios API shape: { data: { property_types: [...] } }
    if (raw?.data?.property_types) options = raw.data.property_types;
    // Supabase adapter: returns an array of { id, name }
    else if (Array.isArray(raw))
      options = raw.map((r) => ({ id: r.id, name: r.name }));
    // Sometimes wrapped: { property_types: [...] }
    else if (raw?.property_types) options = raw.property_types;
  }

  // Normalize to { label, value }
  options = options.map((o) => ({
    label: o.name || o.label || o.title || "",
    value: o.id ?? o.value ?? o.key ?? o.name,
  }));

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
            loading={BookDemoQuery?.isFetching}
            loadingText="Loading ..."
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
