import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.module.css";

// import required modules
import { Autoplay } from "swiper/modules";

const imgs = [
  { path: "/src/assets/img-banner/1.webp" },
  { path: "/src/assets/img-banner/2.jpg" },
  { path: "/src/assets/img-banner/3.jpg" },
  { path: "/src/assets/img-banner/4.jpg" },
  { path: "/src/assets/img-banner/5.jpg" },
  { path: "/src/assets/img-banner/6.jpg" },
];


export const SliderBanner = () => {
  return (
    <div className="sm:w-[450px] sm:h-[350px] w-[300px] h-[300px] rounded-md">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        // className="mySwiper"
      >
        {imgs.map((img) => (
          <SwiperSlide key={img.path}>
            <img
              src={img.path}
              className="object-cover sm:w-[450px] sm:h-[350px] w-[300px] h-[300px] rounded-md"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
