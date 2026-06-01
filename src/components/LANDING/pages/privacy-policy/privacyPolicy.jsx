"use client";

import { Box, Typography, Paper, styled, Link } from "@mui/material";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  maxWidth: "1220px",
  width: "100%",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "#ffffff",
  boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 16px 32px rgba(0,0,0,0.15)",
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, "40px"),
  },
}));

export default function PrivacyPolicyHeader() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2.5, md: 0 },
        backgroundColor: "#f8f8f8",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      {/* HEADER */}
      <StyledPaper sx={{ flexDirection: "row" }} elevation={8}>
        <Box sx={{ flex: 1, maxWidth: { md: "70%" } }}>
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
            BizHome Solutions – Privacy Policy
          </Typography>

          <Typography variant="body1" color="text.secondary" fontWeight={500}>
            Effective Date: 2025-11-01
          </Typography>

          <Typography
            variant="body1"
            mt={3}
            lineHeight="28px"
            letterSpacing="0.4px"
          >
            BizHome Solutions Inc. ("BizHome", "we", "our", "us") is committed
            to protecting your privacy and ensuring that your personal
            information is handled securely and responsibly. This Privacy Policy
            explains how we collect, use, process, store, share, and safeguard
            your information when you interact with our website, platform, and
            related services. By accessing or using BizHome, you acknowledge
            that you have read and understood this Policy.
          </Typography>
        </Box>

        <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "block" } }}>
          <Image
            src="/images/landing/privacyShield.svg"
            alt="Privacy Shield"
            width={220}
            height={260}
            style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            priority
          />
        </Box>
      </StyledPaper>

      {/* SECTION 1 – WHO WE ARE */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          1. Who We Are
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          BizHome is a Canadian technology platform providing digital property
          management tools for landlords, tenants, property managers, and
          service providers.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          Under Canadian privacy regulations (PIPEDA):
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1" color="text.secondary">
              BizHome acts as the Data Controller for information you provide
              directly on our website or during account creation.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="text.secondary">
              BizHome acts as a Data Processor for property managers, landlords,
              or businesses who use BizHome to manage their own customer or
              tenant data.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="text.secondary">
              When landlords or organizations submit personal data about
              tenants, technicians, or staff, they are responsible for ensuring
              lawful collection and appropriate disclosure.
            </Typography>
          </li>
        </Box>
      </StyledPaper>

      {/* SECTION 2 – INFORMATION WE COLLECT */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          2. Information We Collect
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We collect only the information required to deliver secure, efficient,
          and personalized property management services.
        </Typography>

        {/* 2.1 Information You Provide */}
        <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
          2.1 Information You Provide
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1" color="text.secondary">
              <strong>Account & Profile Data:</strong> Name, phone number,
              email, company name, role, password (encrypted), and profile
              details.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="text.secondary">
              <strong>Property & Tenant Information:</strong> Lease agreements,
              documents, repair images, inspections, AI diagnostics, and
              tenant/technician submissions.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="text.secondary">
              <strong>Payment & Financial Information:</strong> Billing details,
              transaction history, rent payments. We do not store full credit
              card numbers.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="text.secondary">
              <strong>Communications:</strong> Messages, support tickets,
              technician–tenant communication.
            </Typography>
          </li>
        </Box>

        {/* 2.2 Info Automatically Collected */}
        <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
          2.2 Information Collected Automatically
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1" color="text.secondary">
              <strong>Technical Data:</strong> IP address, device, OS, browser,
              region.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="text.secondary">
              <strong>Usage Data:</strong> Pages visited, time spent, log files,
              crash reports.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="text.secondary">
              <strong>Cookies & Tracking:</strong> Authentication, preferences,
              analytics, security, performance.
            </Typography>
          </li>
        </Box>

        {/* 2.3 Third-Party Info */}
        <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
          2.3 Information From Third Parties
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1">Payment processors</Typography>
          </li>
          <li>
            <Typography variant="body1">
              Identity verification services
            </Typography>
          </li>
          <li>
            <Typography variant="body1">Cloud hosting providers</Typography>
          </li>
          <li>
            <Typography variant="body1">
              Property management partners
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Public records and listing databases
            </Typography>
          </li>
        </Box>
      </StyledPaper>

      {/* SECTION 3 – WHY WE PROCESS DATA */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          3. Why We Process Your Data
        </Typography>

        <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
          3.1 Contractual Necessity
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1">
              Account creation and management
            </Typography>
          </li>
          <li>
            <Typography variant="body1">Payment handling</Typography>
          </li>
          <li>
            <Typography variant="body1">Maintenance coordination</Typography>
          </li>
          <li>
            <Typography variant="body1">Communication between users</Typography>
          </li>
          <li>
            <Typography variant="body1">AI-powered diagnostics</Typography>
          </li>
        </Box>

        <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
          3.2 Legitimate Interests
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1">Platform improvement</Typography>
          </li>
          <li>
            <Typography variant="body1">Fraud prevention</Typography>
          </li>
          <li>
            <Typography variant="body1">Security monitoring</Typography>
          </li>
          <li>
            <Typography variant="body1">User experience enhancement</Typography>
          </li>
        </Box>

        <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
          3.3 Legal Obligations
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1">Financial reporting</Typography>
          </li>
          <li>
            <Typography variant="body1">
              Compliance with Canadian laws
            </Typography>
          </li>
          <li>
            <Typography variant="body1">Responding to court orders</Typography>
          </li>
        </Box>

        <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
          3.4 Consent
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography variant="body1">Marketing emails</Typography>
          </li>
          <li>
            <Typography variant="body1">Optional cookies</Typography>
          </li>
          <li>
            <Typography variant="body1">Some analytics tools</Typography>
          </li>
        </Box>
      </StyledPaper>

      {/* SECTION 4 – HOW WE USE YOUR INFORMATION */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          4. How We Use Your Information
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography>Operate the BizHome platform and services</Typography>
          </li>
          <li>
            <Typography>Notifications, reminders, communication</Typography>
          </li>
          <li>
            <Typography>Rent collection and invoicing</Typography>
          </li>
          <li>
            <Typography>Analytics and feature improvement</Typography>
          </li>
          <li>
            <Typography>Security, fraud prevention</Typography>
          </li>
        </Box>
      </StyledPaper>

      {/* SECTION 5 – SHARING INFORMATION */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          5. Sharing Your Information
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          We do not sell user data. We only share information with:
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography>Authorized service providers</Typography>
          </li>
          <li>
            <Typography>Property managers / landlords</Typography>
          </li>
          <li>
            <Typography>
              Government authorities when legally required
            </Typography>
          </li>
          <li>
            <Typography>
              During mergers or acquisitions under confidentiality
            </Typography>
          </li>
        </Box>
      </StyledPaper>

      {/* SECTION 6 – DATA RETENTION */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          6. Data Retention
        </Typography>
        <Typography>
          We retain data only as necessary for service delivery, legal
          compliance, and security. When data is no longer required, it is
          securely deleted or anonymized.
        </Typography>
      </StyledPaper>

      {/* SECTION 7 – YOUR RIGHTS */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          7. Your Rights
        </Typography>
        <Box component="ul" sx={{ pl: 4, my: 1 }}>
          <li>
            <Typography>Request access to your information</Typography>
          </li>
          <li>
            <Typography>Request correction</Typography>
          </li>
          <li>
            <Typography>Object to processing</Typography>
          </li>
          <li>
            <Typography>Withdraw consent</Typography>
          </li>
          <li>
            <Typography>Request a data record</Typography>
          </li>
          <li>
            <Typography>File a privacy complaint</Typography>
          </li>
        </Box>
      </StyledPaper>

      {/* SECTION 8 – DATA SECURITY */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          8. Data Security
        </Typography>
        <Typography>
          BizHome applies enterprise-level security including encryption,
          firewalls, role-based access, continuous monitoring, vulnerability
          testing, and strict internal controls.
        </Typography>
      </StyledPaper>

      {/* SECTION 9 – THIRD-PARTY LINKS */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          9. Third-Party Links
        </Typography>
        <Typography>
          BizHome may include links to external websites. We are not responsible
          for their privacy practices.
        </Typography>
      </StyledPaper>

      {/* SECTION 10 – CHANGES */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          10. Changes to This Policy
        </Typography>
        <Typography>
          We may update this Privacy Policy periodically. Continued use of
          BizHome indicates acceptance of the updated policy.
        </Typography>
      </StyledPaper>

      {/* SECTION 11 – CONTACT */}
      <StyledPaper elevation={8}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          11. Contact Us
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2 }}>
          For privacy questions or data requests, contact:
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IoLocationSharp size={20} /> Toronto, Ontario, Canada
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MdOutlineMail size={20} />
          <Link href="mailto:support@bizhomesolutions.com">
            support@bizhomesolutions.com
          </Link>
        </Box>
      </StyledPaper>
    </Box>
  );
}
