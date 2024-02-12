import react from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="../../public/ManutencaoReparacao.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../plublic/AcDescMecatronica.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/Gearmotors.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/Conversores.jpg" />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default SwiperComponent
