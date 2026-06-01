import ContactPage from "@/components/LANDING/pages/contactus/contactUs";
import { Box, Alert, Typography } from "@mui/material";
import Image from "next/image";

export const metadata = {
  title: "BizHome Solutions - Contact Us",
  description: "Your one-stop solution for home services",
};
export default function ContactUs() {
  return <ContactPage />;
}
