"use client";

import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation , Autoplay  } from 'swiper/modules';
export default function Dashboard() {
  return (
    <div>
        <div>
          <Swiper  navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper">
            <SwiperSlide>
              <div className="relative w-full h-[300px] md:h-[480px]">
                <Image
                  src="https://mandarine.com.vn/wp-content/uploads/2025/05/Kho%CC%82ng-gian-1024x682.jpg"
                  alt="Ảnh"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[300px] md:h-[480px]">
                <Image
                  src="https://mandarine.com.vn/wp-content/uploads/2025/05/featrue-image-2048x1366.jpg"
                  alt="Ảnh"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[300px] md:h-[480px]">
                <Image
                  src="https://mandarine.com.vn/wp-content/uploads/2025/05/Nha%CC%A3c-da%CC%82n-to%CC%A3%CC%82c-1024x683.jpg"
                  alt="Ảnh"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          

          </Swiper>

          <div className="absolute left-1/2 top-[20%] md:top-1/2 w-full -translate-x-1/2 md:-translate-y-1/2 z-10">
            <div className="text-center font-bold leading-tight text-white text-3xl text-[25px] md:text-[60px] px-4">
              Ăn uốn thả ga thỏa thích tại Restaurant
            </div>
          </div>
          
        </div>
    </div>
  )
}
