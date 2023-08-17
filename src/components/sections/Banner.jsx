import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { bannerItems } from "../utils/data";
import { BannerItem } from "../utils/helper";

const Banner = () => {
  const bannerItemsList = bannerItems.map((bannerItem) => (
    <SwiperSlide key={bannerItem.id}>
      <BannerItem
        imgSrc={bannerItem.imgSrc}
        title1={bannerItem.title1}
        title2={bannerItem.title2}
        btnText={bannerItem.btnText}
      />
    </SwiperSlide>
  ));

  return (
    <section id="banner" aria-labelledby="Banner Sliders">
      <div className="container">
        <Swiper
          init={true}
          loop={true}
          speed={2000}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {bannerItemsList}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
