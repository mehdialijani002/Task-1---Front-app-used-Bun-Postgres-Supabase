import Testimonials from "@/components/LANDING/customerTestimonials/customerTestimonials";
import FAQPage from "@/components/LANDING/frequentlyQuestion/frequentlyQyestion";
import HeroSection from "@/components/LANDING/hero/hero";
import KeyFeatures from "@/components/LANDING/keyFeatures/keyFeatures";
import WhoIsItForSection from "@/components/LANDING/sectionThree/sectionThree";
import StillHaveQuestion from "@/components/LANDING/stillHaveQuestion/stillHaveQuestion";
import Technician from "@/components/LANDING/technician/technisian";
import ValueProposition from "@/components/LANDING/valueProposition/valueProposition";
import { Box } from "@mui/material";

export const metadata = {
  title: "BizHome Solutions",
  description: "Your one-stop solution for home services",
};
export default function Landing() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <WhoIsItForSection />
      <KeyFeatures />
      <Technician />
      {/* <Testimonials /> */}
      <FAQPage />
      {/* <StillHaveQuestion /> */}
    </>
  );
}
