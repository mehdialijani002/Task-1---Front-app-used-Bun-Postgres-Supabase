import AboutUs from "@/components/LANDING/pages/about-us/aboutUs";
import { Container, Typography, Box, Paper } from "@mui/material";

export const metadata = {
  title: "BizHome Solutions - About Us",
  description: "Your one-stop solution for home services",
};
export default function AboutUsPage() {
  return (
    <Box component="section" sx={{ py: 5, backgroundColor: "#f9fafb" }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: "start",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.94)), url('/images/landing/footerLogo.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
            About Us
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            BizHome Solutions is a Canadian property management platform built
            to simplify the way landlords, tenants, and service providers manage
            properties. We focus on creating a smooth, transparent, and
            intelligent experience for everyone involved in the rental and
            maintenance process.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            Our platform brings all essential tools into one place—repair
            requests, service scheduling, communication, payments, and property
            insights. With a clean design and smart automation, BizHome reduces
            manual work and helps properties run more efficiently.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            We are a growing team of developers, designers, and product
            innovators passionate about solving real challenges in the property
            management industry. By combining modern technology with practical
            workflows, we aim to transform how properties are managed and
            serviced.
          </Typography>

          <Typography variant="h6" fontWeight={600} sx={{ mt: 4, mb: 1 }}>
            Our Vision
          </Typography>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 3 }}>
            Make property management easier, faster, and smarter.
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Welcome to the future of property management.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Welcome to BizHome Solutions.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
