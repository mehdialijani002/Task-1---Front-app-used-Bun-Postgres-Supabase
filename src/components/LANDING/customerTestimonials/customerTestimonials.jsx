"use client";

import { Box, Card, Typography, Avatar, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MotionBox, fadeInUp } from "@/components/LANDING/motion/motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Olivia Rhye",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/images/landing/Avatar.svg",
  },
  {
    name: "Olivia Rhye",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/images/landing/Avatar.svg",
  },
  {
    name: "Olivia Rhye",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/images/landing/Avatar.svg",
  },
  {
    name: "Olivia Rhye",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/images/landing/Avatar.svg",
  },
  {
    name: "Olivia Rhye",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/images/landing/Avatar.svg",
  },
  {
    name: "Olivia Rhye",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/images/landing/Avatar.svg",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <Box sx={{ py: 10, px: { xs: 1, md: 3 } }}>
      <MotionBox {...fadeInUp}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="black"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: "48px",
          }}
        >
          Customer Testimonials
        </Typography>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          onSwiper={setSwiperInstance}
          style={{ padding: "40px 0", paddingBottom: "40px" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  mx: 3,
                  padding: "24px",
                  textAlign: "center",
                  backgroundColor: "#F8F8F8",
                  boxShadow: "0 10px 10px rgba(0,0,0,0.05)",
                  borderRadius: "8px",
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  alt="avatar"
                  sx={{ width: 70, height: 70, mx: "auto", mb: 2 }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "1rem", md: "20px" },
                    lineHeight: { xs: "32px", md: "36px" },
                    color: "#252b37",
                  }}
                  gutterBottom
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "12px", md: "0.875rem" },
                  }}
                >
                  {testimonial.message}
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Dots + Buttons Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            mt: 4,
            mx: 3,
          }}
        >
          {/* Dots (custom pagination container) */}
          <Box
            className="custom-pagination"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          />

          {/* Navigation Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <IconButton
              ref={prevRef}
              color="info"
              aria-label="back Slide"
              sx={{
                backgroundColor: "#2372E514",
                width: "44px",
                height: "44px",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <IoIosArrowBack color="#2372E5" size={18} />
            </IconButton>

            <IconButton
              ref={nextRef}
              color="info"
              aria-label="Next Slide"
              sx={{
                backgroundColor: "#2372E514",
                width: "44px",
                height: "44px",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <IoIosArrowForward color="#2372E5" size={18} />
            </IconButton>
          </Box>
        </Box>

        {/* Custom Pagination Dots Styling */}
        <style jsx global>{`
          .custom-pagination {
            display: flex;
            align-items: center;
          }
          .custom-pagination .swiper-pagination-bullet {
            background-color: #2372e514;
            opacity: 1;
            width: 10px;
            height: 10px;
            border-radius: 6px;
            margin: 0 6px;
            transition: all 0.3s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #1976d2;
            width: 40px; /* Stretch width only for capsule shape */
            height: 8px; /* Same height as inactive dots */
            border-radius: 999px; /* Large border-radius for capsule shape */
          }
        `}</style>
      </MotionBox>
    </Box>
  );
}
