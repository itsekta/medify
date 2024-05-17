import { Container, Box, Stack } from "@mui/material";
import AppHeader from "../../components/AppHeader/AppHeader";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchInput from "../../components/SearchCard/SearchInput";
import SearchCard from "../../components/SearchCard/SearchCard";
import CouponSection from "../../components/CouponsSection/CouponSection";
import SpecialisationSection from "../../components/SpecialisationSection/SpecialisationSection";
import DoctorSpecialists from "../../components/DoctorsCarousel/DoctorSpecialists";
import PatientCaring from "../../components/PatientCaring/PatientCaring";
import Blogs from "../../components/BlogSection/Blogs";
import CaringSection from "../../components/CaringSection/CaringSection";
import FAQSection from "../../components/FAQSection/FAQSection";
export default function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <AppHeader />
        <Container maxWidth="xl">
          <HeroSection />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchInput />
            <SearchCard />
          </Stack>
        </Container>
      </Box>
      <CouponSection />
      <SpecialisationSection />
      <DoctorSpecialists />
      <PatientCaring />
      <Blogs />
      <CaringSection />
      <FAQSection />
    </Box>
  );
}
