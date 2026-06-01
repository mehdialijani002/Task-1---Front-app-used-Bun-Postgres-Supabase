"use client";
import { useState } from "react";
import {
  SwipeableDrawer,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Puller = styled("div")(({ theme }) => ({
  width: 52,
  height: 6,
  backgroundColor: theme.palette.grey[400],
  borderRadius: 12,
  position: "absolute",
  top: 10,
  left: "calc(50% - 26px)",
}));

export const MobileDrawer = ({
  label,
  options,
  value,
  error,
  viewportHeight,
  onChange,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState(value);

  const handleConfirm = () => {
    onChange(tempSelected);
    setDrawerOpen(false);
  };

  return (
    <>
      <TextField
        value={options.find((o) => o.value === value)?.label || ""}
        onClick={() => setDrawerOpen(true)}
        label={label}
        fullWidth
        size="small"
        helperText={error?.message || ""}
        error={!!error}
        InputProps={{ readOnly: true }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            maxHeight: viewportHeight,
            pb: "env(safe-area-inset-bottom)",
          },
        }}
      >
        <Puller />
        <Box sx={{ p: 2, pt: 4 }}>
          <Typography variant="h6">Select Property Type</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            This helps us customize your experience
          </Typography>
          <Divider sx={{ my: 1 }} />
          <RadioGroup
            value={tempSelected ?? value ?? ""}
            onChange={(e) => setTempSelected(e.target.value)}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Box>
      </SwipeableDrawer>
    </>
  );
};
