import react, { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import Quadros from '../../assets/imgs/products/quadros.png';
import Motoredutores from '../../assets/imgs/products/motoredutor.jpg';
import Bombas from '../../assets/imgs/products/bombas.jpg';
import Avac from '../../assets/imgs/products/avac.jpg';
import Paineis from '../../assets/imgs/products/paineis.jpeg';

import {
  StyledProductsSwiperContainer,
  StyledProductContainer,
  StyledProductContent,
  StyledProductDescription,
  StyledProductDescriptionContainer,
  StyledProductImage,
  StyledProductImageContainer,
  StyledProductName,
  StyledProductsSection,
  StyledProductLink,
  StyledProductModalContainer,
  StyledProductModalImage,
  StyledProductModalImageContainer,
  StyledProductModalText,
  StyledProductModalContent,
} from './styled';
import { StyledSecondaryTitle, StyledTertiaryTtile } from '../../styles';
import Modal from '../../components/Modal';

const productsData = [
  {
    id: 2,
    title: 'Quadros elétricos',
    carousel: `Como quadristas certificados pela HAGER, a ELECTROFLOW
    projeta, fabrica e monta quadros elétricos, tanto de
    potência como de comando, de acordo com as especificações do
    cliente, e utilizando componentes dos mais prestigiados
    fabricantes. Um quadro elétrico, ou de distribuição, é um
    equipamento elétrico destinado a receber energia elétrica de
    uma ou mais fontes de alimentação e distribui-las a um ou
    mais circuitos. Destinado a abrigar um ou mais dispositivos
    de proteção e/ou manobra e a conexão de condutores elétricos
    interligados a eles, a fim de distribuir a energia elétrica
    aos diversos circuitos. Em qualquer instalação elétrica,
    devemos saber como realizar os procedimentos correspondentes
    à execução de um projeto elaborado previamente, em
    conformidade com as especificações previstas na NBR 5410
    (norma que regulamenta as instalações elétricas em baixa
    tensão) e NR-10 (segurança em instalações e serviços em
    eletricidade).`,
    modal: [
      `Como quadristas certificados pela HAGER, a ELECTROFLOW projeta, fabrica e monta quadros elétricos, tanto de potência como de comando, de acordo com as especificações do cliente, e utilizando componentes dos mais prestigiados fabricantes.`,
      `Um quadro elétrico, ou de distribuição, é um equipamento elétrico destinado a receber energia elétrica de uma ou mais fontes de alimentação e distribui-las a um ou mais circuitos. Destinado a abrigar um ou mais dispositivos de proteção e/ou manobra e a conexão de condutores elétricos interligados a eles, a fim de distribuir a energia elétrica aos diversos circuitos.`,
      `Em qualquer instalação elétrica, devemos saber como realizar os procedimentos correspondentes à execução de um projeto elaborado previamente, em conformidade com as especificações previstas na NBR 5410 (norma que regulamenta as instalações elétricas em baixa tensão) e NR-10 (segurança em instalações e serviços em eletricidade).`,
    ],
    image: Quadros,
  },
  {
    id: 3,
    title: 'Motores elétricos, motoredutores e variadores',
    carousel: `Nesta gama de produtos somos distribuidores exclusivos da
    SEW. O sistema modular de motorredutores SEW está orientado
    para uma panóplia de áreas de aplicação. Seleccione o
    accionamento ideal para si, entre os motorredutores
    standard, de sistema de suporte suspenso elétrico,
    servomotoredutores, motoredutores de ajuste, em aço
    inoxidável ou à prova de explosão. A gama de funções
    compacta, o manuseamento simples e uma integração rápida na
    aplicação são características que distinguem os conversores
    de frequência MOVITRAC® LTE-B. Estão disponíveis em 3
    tamanhos na gama de potências de 0,37 kW até 7,5 kW para as
    tensões de alimentação de 115 V, 230 V e 400 V. Concebido e
    desenvolvido para o controlo da velocidade de motores
    assíncronos sem encoder, o conversor realiza de forma fiável
    as suas aplicações de transporte simples. Especialmente em
    pequenos tranportadores modulares, em ventiladores e bombas.`,
    modal: [
      `Nesta gama de produtos somos distribuidores exclusivos da SEW.`,
      `O sistema modular de motorredutores SEW está orientado para uma panóplia de áreas de aplicação. Seleccione o accionamento ideal para si, entre os motorredutores standard, de sistema de suporte suspenso elétrico, servomotoredutores, motoredutores de ajuste, em aço inoxidável ou à prova de explosão.`,
      `A gama de funções compacta, o manuseamento simples e uma integração rápida na aplicação são características que distinguem os conversores de frequência MOVITRAC® LTE-B. Estão disponíveis em 3 tamanhos na gama de potências de 0,37 kW até 7,5 kW para as tensões de alimentação de 115 V, 230 V e 400 V. Concebido e desenvolvido para o controlo da velocidade de motores assíncronos sem encoder, o conversor realiza de forma fiável as suas aplicações de transporte simples. Especialmente em pequenos tranportadores modulares, em ventiladores e bombas.`,
    ],
    image: Motoredutores,
  },
  {
    id: 4,
    title: 'Bombas e sistemas hidropressores',
    carousel: `Fornecemos todo o tipo de bombas para abastecimento
    doméstico, industrial, piscina, rega ou qualquer outro tipo
    de situação. A escolha do tipo de bomba de água ou de outro
    fluído requer conhecer o caudal e a pressão pretendida no
    ponto mais desfavorável, seja para abastecimento doméstico,
    industrial, piscina, rega ou qualquer outro tipo de
    situação. Como principais parceiros temos as Marcas CAPRARI
    e a EBARA.`,
    modal: [
      `Fornecemos todo o tipo de bombas para abastecimento doméstico, industrial, piscina, rega ou qualquer outro tipo de situação. A escolha do tipo de bomba de água ou de outro fluído requer conhecer o caudal e a pressão pretendida no ponto mais desfavorável, seja para abastecimento doméstico, industrial, piscina, rega ou qualquer outro tipo de situação.  Como principais parceiros temos as Marcas CAPRARI e a EBARA.`,
      `Para obter uma cotação para o seu caso, contacte-nos com a seguinte informação:`,
    ],
    image: Bombas,
  },
  {
    id: 5,
    title: 'Equipamentos de AVAC',
    carousel: `Nesta área de negócio somos distribuidores e de assistência
    técnica aprovados das Marcas DAIKIN, SAMSUNG e TOYOTOMI.
    O aquecimento, ventilação e ar condicionado (AVAC) refere-se
    a uma gama de equipamentos que tem como finalidade
    climatizar diversos ambientes para, assim, garantir o
    conforto térmico desses espaços. Nesse sentido, além de
    proporcionar uma temperatura agradável, o sistema AVAC é
    responsável por filtrar o ar e eliminar bactérias, mofos e
    fungos do ambiente em que está inserido. Os equipamentos de
    AVAC também podem vir integrados com sistema de gestão e
    poupança energética.`,
    modal: [
      `Nesta área de negócio somos distribuidores e de assistência técnica aprovados das Marcas DAIKIN, SAMSUNG e TOYOTOMI.`,
      `O aquecimento, ventilação e ar condicionado (AVAC) refere-se a uma gama de equipamentos que tem como finalidade climatizar diversos ambientes para, assim, garantir o conforto térmico desses espaços. Nesse sentido, além de proporcionar uma temperatura agradável, o sistema AVAC é responsável por filtrar o ar e eliminar bactérias, mofos e fungos do ambiente em que está inserido. Os equipamentos de AVAC também podem vir integrados com sistema de gestão e poupança energética.`,
    ],
    image: Avac,
  },
  {
    id: 6,
    title: `Paíneis fotovoltaicos`,
    carousel: `A energia solar fotovoltaica é a energia obtida através da
    conversão direta da luz em eletricidade por meio do efeito
    fotovoltaico. A célula fotovoltaica, um dispositivo
    fabricado com material semicondutor, é a unidade fundamental
    desse processo de conversão. Este tipo de energia usa-se
    para alimentar uma grande variedade de aplicativos e
    aparelhos autónomos, para abastecer refúgios ou moradias
    isoladas da rede elétrica e para produzir eletricidade a
    grande escala através de redes de distribuição. Devido à
    crescente demanda de energias renováveis, a fabricação de
    células solares e instalações fotovoltaicas tem avançado
    consideravelmente nos últimos anos.`,
    modal: [
      `A energia solar fotovoltaica é a energia obtida através da conversão direta da luz em eletricidade por meio do efeito fotovoltaico. A célula fotovoltaica, um dispositivo fabricado com material semicondutor, é a unidade fundamental desse processo de conversão.`,
      `Este tipo de energia usa-se para alimentar uma grande variedade de aplicativos e aparelhos autónomos, para abastecer refúgios ou moradias isoladas da rede elétrica e para produzir eletricidade a grande escala através de redes de distribuição. Devido à crescente demanda de energias renováveis, a fabricação de células solares e instalações fotovoltaicas tem avançado consideravelmente nos últimos anos.`,
    ],
    image: Paineis,
  },
];

type ProductCardProps = {
  title: string;
  carousel: string;
  modal: string[];
  image: string;
};

const ProductCard: FC<ProductCardProps> = ({
  title,
  carousel,
  modal,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModalHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <StyledProductContainer>
        <StyledProductImageContainer>
          <StyledProductImage src={image} />
        </StyledProductImageContainer>
        <StyledProductContent>
          <StyledProductName>{title}</StyledProductName>
          <StyledProductDescriptionContainer>
            <StyledProductDescription>{carousel}</StyledProductDescription>
          </StyledProductDescriptionContainer>
          <StyledProductLink onClick={onOpenModalHandler}>
            Saber mais
          </StyledProductLink>
        </StyledProductContent>
      </StyledProductContainer>
      <Modal closeCallback={() => setIsOpen(false)} isOpen={isOpen}>
        <StyledProductModalContainer>
          <StyledProductModalImageContainer>
            <StyledProductModalImage src={image} />
          </StyledProductModalImageContainer>
          <StyledProductModalContent>
            <StyledTertiaryTtile>{title}</StyledTertiaryTtile>
            {modal.map((text, index) => (
              <StyledProductModalText key={index}>
                {text}
              </StyledProductModalText>
            ))}
          </StyledProductModalContent>
        </StyledProductModalContainer>
      </Modal>
    </>
  );
};

const Products = () => {
  return (
    <StyledProductsSection id="products">
      <StyledSecondaryTitle>Produtos</StyledSecondaryTitle>
      <StyledProductsSwiperContainer>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop
          pagination
          breakpoints={{
            992: {
              slidesPerView: 2,
            },
            1350: {
              slidesPerView: 3,
            },
            2000: {
              slidesPerView: 4,
            },
          }}
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                title={product.title}
                carousel={product.carousel}
                modal={product.modal}
                image={product.image}
              />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <StyledProductContainer>
              <StyledProductImageContainer>
                <StyledProductImage src={Quadros} />
              </StyledProductImageContainer>
              <StyledProductContent>
                <StyledProductName>Quadros elétricos</StyledProductName>
                <StyledProductDescriptionContainer>
                  <StyledProductDescription>
                    Como quadristas certificados pela HAGER, a ELECTROFLOW
                    projeta, fabrica e monta quadros elétricos, tanto de
                    potência como de comando, de acordo com as especificações do
                    cliente, e utilizando componentes dos mais prestigiados
                    fabricantes. Um quadro elétrico, ou de distribuição, é um
                    equipamento elétrico destinado a receber energia elétrica de
                    uma ou mais fontes de alimentação e distribui-las a um ou
                    mais circuitos. Destinado a abrigar um ou mais dispositivos
                    de proteção e/ou manobra e a conexão de condutores elétricos
                    interligados a eles, a fim de distribuir a energia elétrica
                    aos diversos circuitos. Em qualquer instalação elétrica,
                    devemos saber como realizar os procedimentos correspondentes
                    à execução de um projeto elaborado previamente, em
                    conformidade com as especificações previstas na NBR 5410
                    (norma que regulamenta as instalações elétricas em baixa
                    tensão) e NR-10 (segurança em instalações e serviços em
                    eletricidade).
                  </StyledProductDescription>
                </StyledProductDescriptionContainer>
                <StyledProductLink to="">Saber mais</StyledProductLink>
              </StyledProductContent>
            </StyledProductContainer>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductContainer>
              <StyledProductImageContainer>
                <StyledProductImage src={Motoredutores} />
              </StyledProductImageContainer>
              <StyledProductContent>
                <StyledProductName>
                  Motores elétricos, motoredutores e variadores
                </StyledProductName>
                <StyledProductDescriptionContainer>
                  <StyledProductDescription>
                    Nesta gama de produtos somos distribuidores exclusivos da
                    SEW. O sistema modular de motorredutores SEW está orientado
                    para uma panóplia de áreas de aplicação. Seleccione o
                    accionamento ideal para si, entre os motorredutores
                    standard, de sistema de suporte suspenso elétrico,
                    servomotoredutores, motoredutores de ajuste, em aço
                    inoxidável ou à prova de explosão. A gama de funções
                    compacta, o manuseamento simples e uma integração rápida na
                    aplicação são características que distinguem os conversores
                    de frequência MOVITRAC® LTE-B. Estão disponíveis em 3
                    tamanhos na gama de potências de 0,37 kW até 7,5 kW para as
                    tensões de alimentação de 115 V, 230 V e 400 V. Concebido e
                    desenvolvido para o controlo da velocidade de motores
                    assíncronos sem encoder, o conversor realiza de forma fiável
                    as suas aplicações de transporte simples. Especialmente em
                    pequenos tranportadores modulares, em ventiladores e bombas.
                  </StyledProductDescription>
                </StyledProductDescriptionContainer>
                <StyledProductLink to="">Saber mais</StyledProductLink>
              </StyledProductContent>
            </StyledProductContainer>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductContainer>
              <StyledProductImageContainer>
                <StyledProductImage src={Bombas} />
              </StyledProductImageContainer>
              <StyledProductContent>
                <StyledProductName>
                  Bombas e sistemas hidropressores
                </StyledProductName>
                <StyledProductDescriptionContainer>
                  <StyledProductDescription>
                    Fornecemos todo o tipo de bombas para abastecimento
                    doméstico, industrial, piscina, rega ou qualquer outro tipo
                    de situação. A escolha do tipo de bomba de água ou de outro
                    fluído requer conhecer o caudal e a pressão pretendida no
                    ponto mais desfavorável, seja para abastecimento doméstico,
                    industrial, piscina, rega ou qualquer outro tipo de
                    situação. Como principais parceiros temos as Marcas CAPRARI
                    e a EBARA.
                  </StyledProductDescription>
                </StyledProductDescriptionContainer>
                <StyledProductLink to="">Saber mais</StyledProductLink>
              </StyledProductContent>
            </StyledProductContainer>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductContainer>
              <StyledProductImageContainer>
                <StyledProductImage src={Avac} />
              </StyledProductImageContainer>
              <StyledProductContent>
                <StyledProductName>Equipamentos de AVAC</StyledProductName>
                <StyledProductDescriptionContainer>
                  <StyledProductDescription>
                    Nesta área de negócio somos distribuidores e de assistência
                    técnica aprovados das Marcas DAIKIN, SAMSUNG e TOYOTOMI.
                    O aquecimento, ventilação e ar condicionado (AVAC) refere-se
                    a uma gama de equipamentos que tem como finalidade
                    climatizar diversos ambientes para, assim, garantir o
                    conforto térmico desses espaços. Nesse sentido, além de
                    proporcionar uma temperatura agradável, o sistema AVAC é
                    responsável por filtrar o ar e eliminar bactérias, mofos e
                    fungos do ambiente em que está inserido. Os equipamentos de
                    AVAC também podem vir integrados com sistema de gestão e
                    poupança energética.
                  </StyledProductDescription>
                </StyledProductDescriptionContainer>
                <StyledProductLink to="">Saber mais</StyledProductLink>
              </StyledProductContent>
            </StyledProductContainer>
          </SwiperSlide>
          <SwiperSlide>
            <StyledProductContainer>
              <StyledProductImageContainer>
                <StyledProductImage src={Paineis} />
              </StyledProductImageContainer>
              <StyledProductContent>
                <StyledProductName>Paíneis fotovoltaicos</StyledProductName>
                <StyledProductDescriptionContainer>
                  <StyledProductDescription>
                    A energia solar fotovoltaica é a energia obtida através da
                    conversão direta da luz em eletricidade por meio do efeito
                    fotovoltaico. A célula fotovoltaica, um dispositivo
                    fabricado com material semicondutor, é a unidade fundamental
                    desse processo de conversão. Este tipo de energia usa-se
                    para alimentar uma grande variedade de aplicativos e
                    aparelhos autónomos, para abastecer refúgios ou moradias
                    isoladas da rede elétrica e para produzir eletricidade a
                    grande escala através de redes de distribuição. Devido à
                    crescente demanda de energias renováveis, a fabricação de
                    células solares e instalações fotovoltaicas tem avançado
                    consideravelmente nos últimos anos.
                  </StyledProductDescription>
                </StyledProductDescriptionContainer>
                <StyledProductLink to="">Saber mais</StyledProductLink>
              </StyledProductContent>
            </StyledProductContainer>
          </SwiperSlide> */}
        </Swiper>
      </StyledProductsSwiperContainer>
    </StyledProductsSection>
  );
};

export default Products;
