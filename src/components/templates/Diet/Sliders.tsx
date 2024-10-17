import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { diets } from "../../../utils/data";
import Card from "./Card";

const Sliders = () => {
  return (
    <div className="block sm:!hidden space-y-8 mt-6">
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination]}
        className="mySwiper"
      >
        {diets.slice(0, 10).map((data) => (
          <SwiperSlide>
            <Card {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {diets.slice(10, 20).map((data) => (
          <SwiperSlide>
            <Card {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {diets.slice(20, 30).map((data) => (
          <SwiperSlide>
            <Card {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {diets.slice(30, 44).map((data) => (
          <SwiperSlide>
            <Card {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
