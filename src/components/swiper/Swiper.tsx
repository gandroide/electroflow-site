import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      // onSlideChange={(swiper) => {
      //   console.log(swiper);
      //   onSliderChange(swiper.realIndex);
      // }}
      onSwiper={(swiper) => console.log(swiper)}
      loop
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide>
        <img src="../../public/ManutencaoReparacao.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/AcDescMecatronica.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/Gearmotors.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/Conversores.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
