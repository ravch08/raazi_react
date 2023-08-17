import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { blogItems } from "../utils/data";
import { BlogItem } from "../utils/helper";

const Blog = () => {
  const blogItemsList = blogItems.map((blogItem) => (
    <SwiperSlide key={blogItem.id}>
      <BlogItem
        title={blogItem.title}
        badge={blogItem.badge}
        imgSrc={blogItem.imgSrc}
        description={blogItem.description}
      />
    </SwiperSlide>
  ));

  return (
    <section id="blog" aria-labelledby="Blog">
      <div className="container">
        <div className="heading">
          <span>Read the Latest</span>
          <h2>Blogs</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt voluptates
            laborum nulla reiciendis obcaecati facere.
          </p>
        </div>

        <Swiper
          init={true}
          loop={true}
          speed={2000}
          spaceBetween={50}
          slidesPerView={3}
          grabCursor={true}
          centeredSlides={false}
          breakpoints={{
            350: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {blogItemsList}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
