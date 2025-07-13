import {Autoplay, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {ProductCard} from "./ProductCard.jsx";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/free-mode";
import "./DefaultSwiper.scss"

export function DefaultSwiper() {
  return (
    <Swiper className="default-swiper"
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            spaceBetween={5}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true
            }}
            breakpoints={{
              1200: {
                slidesPerView: 5,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 5
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 5
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 5
              },
              300: {
                slidesPerView: 2,
                spaceBetween: 5
              }
            }}
            loop={true}
            slidesPerView={5}>
      <SwiperSlide>
        <ProductCard
          type="normal-adaptive-product-card default-width-product-card"
          img="/resourses/maincontent/appleIphone2.png"
          title="Мобільний телефон Apple iPhone 13 Pro Max 256 GB Sierra Blue"
          previousPrice="47 499" price="46 499" priceStyle="discount"/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          type="normal-adaptive-product-card default-width-product-card"
          img="/resourses/maincontent/ps5.png"
          title="Ігрова приставка PS5 PlayStation 5 Digital Edition"
          price="17 899"/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          type="normal-adaptive-product-card default-width-product-card"
          img="/resourses/maincontent/philipsCoffeeMachine.png"
          title="Кавомашина PHILIPS Series 2200 EP2235/40"
          price="17 499" previousPrice="17 999" priceStyle="discount"/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          type="normal-adaptive-product-card default-width-product-card"
          img="/resourses/maincontent/ps5.png"
          title="Ігрова приставка PS5 PlayStation 5 Digital Edition"
          price="17 899" priceStyle="discount"/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          type="normal-adaptive-product-card default-width-product-card"
          img="/resourses/maincontent/ps5.png"
          title="Ігрова приставка PS5 PlayStation 5 Digital Edition"
          price="17 899" priceStyle="discount"/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          type="normal-adaptive-product-card default-width-product-card"
          img="/resourses/maincontent/ps5.png"
          title="Ігрова приставка PS5 PlayStation 5 Digital Edition"
          price="17 899" priceStyle="discount"/>
      </SwiperSlide>
    </Swiper>
  );
}