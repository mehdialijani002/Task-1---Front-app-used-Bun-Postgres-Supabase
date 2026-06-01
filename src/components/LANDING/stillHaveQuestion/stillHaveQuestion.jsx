"use client";

import { Box, Button, Typography, Paper } from "@mui/material";

export default function StillHaveQuestion() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: "32px",
        mx: { sm: 0, md: 15 },
        textAlign: "center",
        backgroundColor: "#F8F8F8",
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "36px",
          color: "#535862",
        }}
        mb={1}
      >
        Still have questions?
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "500",
          fontSize: "1rem",
          lineHeight: "32px",
          letterSpacing: "0.4px",
        }}
        mb={3}
      >
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </Typography>
      <Button variant="outlined" size="large">
        Get in touch
      </Button>
    </Paper>
  );
}
