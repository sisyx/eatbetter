import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Card from "./Card";

interface Props {
  data: {
    allowedFoods: string;
    description: string;
    howToImplement: string;
    id: number;
    name: string;
  }[];
}

const Sliders = (diets: Props) => {
  console.log(diets);

  return (
    <div data-aos="fade-up" className="mt-6 block space-y-8 sm:!hidden">
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
        {diets.data.slice(0, 10).map((data) => (
          <SwiperSlide>
            <Card data={data} />
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
        {diets.data.slice(10, 20).map((data) => (
          <SwiperSlide>
            <Card data={data} />
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
        {diets.data.slice(20, 30).map((data) => (
          <SwiperSlide>
            <Card data={data} />
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
        {diets.data.slice(30, 44).map((data) => (
          <SwiperSlide>
            <Card data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
