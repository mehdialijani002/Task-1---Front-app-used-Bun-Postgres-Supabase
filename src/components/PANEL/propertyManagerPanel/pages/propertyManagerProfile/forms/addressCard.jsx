"use client";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

export default function AddressCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Address
        </Typography>

        <Box
          sx={{
            border: "2px dashed #C1C7D0",
            borderRadius: 2,
            p: 4,
            m: 2,
            textAlign: "center",
            color: "text.secondary",
            bgcolor: "#FAFBFC",
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Image
              src="/images/panel/pm-map-profile.svg"
              alt="Location"
              width={82}
              height={82}
            />
          </Box>

          <Typography variant="body2" mb={1}>
            Please enter your address
          </Typography>

          <Button variant="text">+ Add</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
