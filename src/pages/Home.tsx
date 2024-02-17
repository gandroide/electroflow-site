import react, { FC } from "react"
import SwiperComponent from "../components/swiper/Swiper"
import Card from "../components/card/Card"

const Home: FC = () => {
  return (
    <>
      <SwiperComponent />
      <div className="flex h-screen">
        <Card
          title="Quem somos"
          subtitle="Destacamo-nos como uma equipa jovem e dinâmica com amplos conhecimentos da indústria em questão, na generalidade com mais de 15 anos de experiência do ramo, e sensíveis às necessidades dos nossos Clientes."
          buttonText="Saiba mais"
        />
        <Card title="Oferta integrada " />
        <Card title="Áreas de intervenção" />
      </div>
      <div className="h-screen">cosas de la empresa! fotos y logros!</div>
    </>
  )
}

export default Home
