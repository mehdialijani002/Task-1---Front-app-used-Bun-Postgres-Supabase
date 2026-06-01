"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
} from "@mui/material";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MotionBox, fadeInUp } from "@/components/LANDING/motion/motion";

const categories = [
  "General",
  "Landlords & Property Managers",
  "Tenants",
  "Technicians",
];

// Simple example FAQs mapped by category
const faqs = {
  General: [
    {
      question: "What is BizHome?",
      answer:
        "BizHome is an all-in-one property management platform that helps landlords, property managers, tenants, and technicians manage properties, maintenance requests, and payments more efficiently.",
    },
    {
      question: "Who can use BizHome?",
      answer:
        "Landlords, property managers, tenants, and technicians can all benefit from BizHome’s features.",
    },
    {
      question: "Is BizHome secure?",
      answer:
        "Yes, BizHome uses industry-standard security protocols to keep your information safe and secure.",
    },
  ],
  "Landlords & Property Managers": [
    {
      question: "How can landlords benefit from BizHome?",
      answer:
        "Landlords can manage multiple properties, collect rent online, and track maintenance easily.",
    },
    {
      question: "How can landlords benefit from BizHome?",
      answer:
        "Landlords can manage multiple properties, collect rent online, and track maintenance easily.",
    },
    {
      question: "How can landlords benefit from BizHome?",
      answer:
        "Landlords can manage multiple properties, collect rent online, and track maintenance easily.",
    },
  ],
  Tenants: [
    {
      question: "Can tenants submit maintenance requests?",
      answer:
        "Yes, tenants can easily submit maintenance requests through the BizHome portal.",
    },
  ],
  Technicians: [
    {
      question: "How do technicians receive tasks?",
      answer:
        "Technicians are notified via the app when maintenance requests are assigned to them.",
    },
  ],
};

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [expanded, setExpanded] = useState("panel0");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 6, px: 2, mb: 10 }}>
      <MotionBox {...fadeInUp}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#212121",
            fontSize: { xs: "24px", md: "36px" },
            lineHeight: { xs: "40px", md: "48px" },
            fontWeight: "700",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#666666",
            fontWeight: "500",
            fontSize: { xs: "1rem", md: "18px" },
            lineHeight: { xs: "32px", md: "36px" },
            letterSpacing: "3%",
            mt: 3,
          }}
        >
          Everything you need to know about the product
        </Typography>

        {/* Category Buttons */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={1}
          mt={4}
          mb={4}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant="text"
              onClick={() => setSelectedCategory(category)}
              sx={{
                color: selectedCategory === category ? "#1C5BB7" : "#666666",
                padding: "10px 14px 10px 14px",
                lineHeight: { xs: "24px", md: "32px" },
                fontSize: { xs: "13px", md: "16px" },
                textTransform: "none",
                mx: "22px",
                backgroundColor:
                  selectedCategory === category ? "#2372E514" : "transparent",
                fontWeight: selectedCategory === category ? "500" : "normal",
                "&:hover": {
                  color: "#1C5BB7",
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Stack>

        {/* FAQ Accordions */}
        {faqs[selectedCategory]?.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleAccordionChange(`panel${index}`)}
            defaultExpanded={index === 0}
            sx={{
              boxShadow: "none",
              mb: 1,
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <AiOutlineMinusCircle color="#1976d2" size={25} />
                ) : (
                  <MdOutlineAddCircleOutline color="#1976d2" size={25} />
                )
              }
              sx={{ "& .MuiAccordionSummary-content": { margin: "16px 0" } }}
            >
              <Typography
                fontWeight="500"
                sx={{
                  fontSize: { xs: "1rem", md: "18px" },
                  lineHeight: { xs: "32px", md: "36px" },
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#535862",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </MotionBox>
    </Box>
  );
}
