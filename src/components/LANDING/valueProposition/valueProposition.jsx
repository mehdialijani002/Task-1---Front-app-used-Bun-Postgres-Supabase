"use client";
import { Box, Grid, Typography } from "@mui/material";
import { MotionBox, fadeInUp } from "@/components/LANDING/motion/motion";
import UserIcon1 from "@/assets/icons/card-pos.svg";
import UserIcon2 from "@/assets/icons/category.svg";
import UserIcon3 from "@/assets/icons/home-trend-up.svg";

import Image from "next/image";

const cardData = [
  {
    icon: <Image src={UserIcon1} alt="User Icon" width={28} height={29} />,
    title: "Tenant and Rent Payment Management",
    description:
      "Easily manage tenants, track payments, and keep everything organized.",
  },
  {
    icon: <Image src={UserIcon2} alt="User Icon" width={28} height={29} />,
    title: "Maintenance Requests with Predictive Analysis",
    description:
      "Stay ahead of issues with automated, predictive maintenance tools.",
  },
  {
    icon: <Image src={UserIcon3} alt="User Icon" width={28} height={29} />,
    title: "Financial Reports and Advanced Dashboards",
    description:
      "Receive job notifications and connect with landlords directly for repair jobs",
  },
];

export default function ValueProposition() {
  return (
    <Box sx={{ padding: { xs: "70px 13px", md: "100px 80px" } }}>
      <MotionBox {...fadeInUp}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "24px", md: "36px" },
            fontWeight: "700",
            lineHeight: { xs: "40px", md: "48px" },
            textAlign: "center",
            color: "black",
            marginBottom: "40px",
          }}
        >
          Value Proposition
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  outline: "0.5px solid #2372e5",
                  padding: "24px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "100%",
                  boxShadow: "0 10px 10px rgba(0,0,0,0.05)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#E9f1fd",
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  {card.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "18px" },
                    lineHeight: { xs: "32px", md: "36px" },
                    letterSpacing: "3%",
                    fontWeight: "500",
                    color: "#212121",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },

                    fontWeight: "400",
                    lineHeight: { xs: "28px", md: "32px" },
                    letterSpacing: "0.15px",
                    color: "#666666",
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </MotionBox>
    </Box>
  );
}
