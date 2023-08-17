"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Box>
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full">
          <Box className="w-[100%]">
            <Image
              width={"1652"}
              height={"690"}
              src="/slide1.webp"
              alt="slider"
              className="w-full object-cover"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <Box className="w-[100%]">
            <Image
              width={"1652"}
              height={"690"}
              src="/slide1.webp"
              alt="slider"
              className="w-full object-cover"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <Box className="w-[100%]">
            <Image
              width={"1652"}
              height={"690"}
              src="/slide1.webp"
              alt="slider"
              className="w-full object-cover"
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;
