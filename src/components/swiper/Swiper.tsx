import react, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import imagem1 from '../../../public/ManutencaoReparacao.jpg';
import imagem2 from '../../../public/instalacoes-eletricas.webp';
import imagem3 from '../../../public/sistema-climatizacao.webp';
import imagem4 from '../../../public/paineis-solares.jpg';

// Import Swiper styles
import 'swiper/css';
import { SwiperComponentProps } from '../../interfaces';

const SwiperComponent: FC<SwiperComponentProps> = ({ onSliderChange }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        onSliderChange(swiper.realIndex);
      }}
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
