import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";

import aboutPageData from "./about.json";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function AboutUs() {
  const { whatWhyWhere, pledge, leadership } = aboutPageData;

  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 8 }}>
        <Box sx={{ mb: 2 }}>
          <Image
            src="/images/landing/footerLogo.svg"
            alt="hero"
            width={200}
            height={200}
          />
        </Box>
        <Typography variant="h2" fontWeight={600} gutterBottom>
          You’re never alone in your property management journey.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          At BizHome, our mission is to simplify how landlords, tenants, and
          property managers connect and manage their properties. We’re setting a
          new standard for trusted, seamless, and transparent property services
          that support every user at every step — from listing and renting to
          maintenance and payments.
        </Typography>
      </Container>

      {/* What / Why / Where Section */}
      <Grid container spacing={2} sx={{ mx: 10 }}>
        {whatWhyWhere.map((item, i) => (
          <Grid item size={{ xs: 12, md: 4 }} key={i}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "#F4F5F7",
                borderRadius: 2,
                height: "100%",
                padding: 3,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.03)",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Pledge Section */}
      <Box
        sx={{ mt: 10, py: 6, textAlign: "center", backgroundColor: "#F4F5F7" }}
      >
        <Typography variant="h2" fontWeight={600} gutterBottom>
          Our pledge to you
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 924, mx: "auto", mb: 4 }}
        >
          At BizHome, we’re landlords, tenants, property managers, and service
          professionals ourselves. That’s why we’re committed to making property
          management simple, transparent, and reliable — helping everyone find
          trusted solutions, manage properties efficiently, and connect with the
          right people when it matters most.
        </Typography>

        <Grid container spacing={2}>
          {pledge.map((item, i) => (
            <Grid item size={{ xs: 12 }} key={i}>
              <Paper sx={{ maxWidth: "1200px", mx: "auto", p: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{ mb: 2, display: "flex", alignItems: "center", mr: 2 }}
                  >
                    <Image
                      src={pledge.image}
                      alt={pledge.name}
                      width={120}
                      height={120}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      gap: 0,
                    }}
                  >
                    <Typography variant="body1" fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonial */}
      <Box
        sx={{ bgcolor: "#002766", color: "white", py: 3, textAlign: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mb: 5 }}>
            <BiSolidQuoteAltLeft size={60} color="#434D91" />
          </Box>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            sx={{ maxWidth: "1120px", mb: 2 }}
          >
            I just wanted to say thank you! Using BizHome has made managing my
            properties so much easier. The platform is intuitive, maintenance
            requests are handled quickly, and communication with tenants is
            smooth. I really appreciate the support and reliability you provide.
          </Typography>
          <Typography variant="body2" color="white">
            - A.R., Landlord & BizHome User
          </Typography>
        </Box>
      </Box>

      {/* Leadership Section */}
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Our leadership
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {leadership.map((leader, i) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ mb: 2 }}>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={120}
                      height={120}
                    />
                  </Box>
                  <Typography variant="body1" fontWeight={600}>
                    {leader.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {leader.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
