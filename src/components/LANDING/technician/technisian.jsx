"use client";

import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { MotionBox, fadeInUp } from "@/components/LANDING/motion/motion";
import Link from "next/link";

export default function Technician() {
  return (
    <Box sx={{ px: { xs: 2, md: 15 }, py: { xs: 6, md: 8 } }}>
      <MotionBox {...fadeInUp}>
        <Grid container spacing={{ xs: 5, md: 12 }} alignItems="center">
          {/* Image Section */}
          <Grid item size={{ md: 6, xs: 12 }} order={{ xs: 1, md: 2 }}>
            <Image
              src="/images/landing/Group 5.svg"
              alt="People collaborating"
              layout="responsive"
              width={609}
              height={576}
            />
          </Grid>

          {/* Text Section */}
          <Grid item size={{ md: 6, xs: 12 }} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "15px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "28px", md: "32px" },
                  lineHeight: "48px",
                }}
                variant="h5"
                color="black"
                gutterBottom
              >
                Are You a Technician?
              </Typography>
              <Box
                sx={{
                  mb: { xs: 1, md: 2 },
                  backgroundColor: "#2372E50A",
                  padding: "4px 12px 4px 10px",
                  borderRadius: "16px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: { xs: "0.875rem", md: "16px" },
                    fontWeight: "500",
                    color: "#1C5BB7",
                  }}
                  variant="body1"
                >
                  <GoDotFill size={13} />
                  Start Receiving Jobs Today - No Monthly Fee!
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "0.875rem", md: "18px" },
                  lineHeight: "36px",
                  fontWeight: "500",
                  letterSpacing: "3%",
                }}
                variant="body1"
                color="#212121"
              >
                Sign Up Now and Get Your First Job Within Days
              </Typography>
              <Button
                variant="contained"
                component={Link}
                href="/panel/technician-signup"
                sx={{
                  backgroundColor: "#1976d2",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "10px 20px",
                }}
              >
                Join as a Technician - Free
              </Button>
            </Box>
          </Grid>
        </Grid>
      </MotionBox>
    </Box>
  );
}
