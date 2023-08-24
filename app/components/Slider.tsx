'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

import Img3 from '../../public/assets/shoes.jpg';
import Img4 from '../../public/assets/red-shoes.jpg';
import Img6 from '../../public/assets/black-shirt.jpg';
import Img7 from '../../public/assets/white-shoes.jpg';
import Image from 'next/image';

export const Slider = () => {
  return (
    <>
      <div className="margin-gap">
        <Swiper
          spaceBetween={30}
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="md:w-[90vw] md:h-[90vh] w-full mt-5 rounded-xl"
        >
          <SwiperSlide>
            <Image src={Img7} alt="" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Img3} alt="" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Img4} alt="" className="h-full w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Img6} alt="" sizes="100vh" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
