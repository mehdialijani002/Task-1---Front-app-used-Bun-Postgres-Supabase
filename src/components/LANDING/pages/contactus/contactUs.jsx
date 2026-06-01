"use client";
import { Box, Typography, Stack, Card } from "@mui/material";
import { useState } from "react";
import { FaRegClock, FaPhoneVolume } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import ContactHelpUI from "./contactHelp";
import { MotionBox, slideInRight } from "@/components/LANDING/motion/motion";
import { PiBuildingOffice } from "react-icons/pi";

const options = [
  { label: "Landlord", value: "landlord" },
  { label: "Tenant", value: "tenant" },
  {
    label: "Property Management Company",
    value: "property_manager",
  },
  { label: "Technician", value: "technician" },
];

export default function ContactPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Box
      id="contact-top"
      sx={{ backgroundColor: "#F5F7F7", scrollMarginTop: "96px" }}
    >
      {!selectedOption ? (
        <Box maxWidth="650px" sx={{ py: 8, mx: { xs: 2, md: "auto" } }}>
          <Typography variant="h3" fontWeight={600} mb={4} textAlign="center">
            What would you like to contact us about?
          </Typography>

          <Stack spacing={2}>
            {options.map((option) => (
              <Card
                key={option.value}
                elevation={0}
                onClick={() => {
                  document
                    .getElementById("contact-top")
                    ?.scrollIntoView({ behavior: "smooth" });

                  setSelectedOption(option.value);
                }}
                sx={{
                  p: 2.2,
                  borderRadius: 2,
                  border: "1px solid #2372E580",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  "&:hover": { backgroundColor: "#F9FAFB" },
                  alignItems: "center",
                }}
              >
                <Typography fontWeight={500}>{option.label}</Typography>
                <FiChevronRight size={18} color="#2563EB" />
              </Card>
            ))}
          </Stack>
        </Box>
      ) : (
        <MotionBox {...slideInRight}>
          <ContactHelpUI
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={options}
          />
        </MotionBox>
      )}

      {/* CONTACT INFO */}
      <Box
        sx={{
          backgroundColor: "#14257A",
          color: "#fff",
          py: 8,
          transform: "translateZ(0)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" fontWeight={600} mb={4}>
            Contact Information
          </Typography>

          <Stack spacing={2}>
            <InfoRow
              icon={<PiBuildingOffice />}
              text="BizHome Solutions Inc."
              subText="Property Management Technology Platform"
            />

            <InfoRow icon={<LuMapPin />} text="Toronto, Ontario, Canada" />
            {/* <InfoRow
              icon={<FaPhoneVolume />}
              text="Call us (toll-free): 888-555-2417"
            /> */}
            {/* <InfoRow
              icon={<FaRegClock />}
              text="Monday – Friday: 8am – 6pm PT"
            /> */}
            <InfoRow icon={<GoMail />} text="contact@bizhomesolutions.com" />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

function InfoRow({ icon, text, subText }) {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box component="span" sx={{ fontSize: "1.2rem" }}>
        {icon}
      </Box>
      <Box>
        <Typography sx={{ lineHeight: 1.5, m: 0 }}>
          {text}
          {subText && (
            <Typography
              component="span"
              variant="caption"
              color="#C5C8D0"
              sx={{ display: "block", lineHeight: 1.1, m: 0 }}
            >
              {subText}
            </Typography>
          )}
        </Typography>
      </Box>
    </Box>
  );
}
