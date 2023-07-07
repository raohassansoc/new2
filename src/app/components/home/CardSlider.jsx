"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const CardSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-w-[33.33%] h-52">
          <video
            autoPlay
            loop
            style={{ flex: "1 0 25%" }}
            className="h-full w-full"
          >
            <source src="/images/v1.webm" type="video/mp4" />
          </video>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CardSlider;
