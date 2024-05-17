import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import imagem1 from '../../../public/ManutencaoReparacao.jpg';
import imagem2 from '../../../public/AcDescMecatronica.png';
import imagem3 from '../../../public/Gearmotors.jpg';
import imagem4 from '../../../public/Conversores.png';

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
        <img src={imagem1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagem2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagem3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagem4} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
