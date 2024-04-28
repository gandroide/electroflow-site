import react, { FC, useEffect, useState } from 'react';
import SwiperComponent from '../components/swiper/Swiper';

import { InputProps } from '../interfaces';
import {
  StyledHomeContainer,
  StyledHomeSection,
  StyledPrimaryTitle,
  StyledSecondaryTitle,
  StyledSection,
  StyledText,
} from '../styles';

import Misson from '../layouts/Misson';
import Gallery from '../layouts/Gallery';
import Contacts from '../layouts/Contacts';
import ContactUs from '../layouts/ContactUs';
import Products from '../layouts/Products';
import Home from '../layouts/Home';
import Services from '../layouts/Services';

const homePageText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
  'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
];

const HomePage = ({ currentText }: { currentText: number }) => {
  return (
    <StyledHomeContainer>
      <StyledPrimaryTitle>Electroflow</StyledPrimaryTitle>
      <StyledText>{homePageText[currentText]}</StyledText>
    </StyledHomeContainer>
  );
};

const Main: FC = () => {
  const [currentText, setCurrentText] = useState(0);

  const changeTextHandler = (activeSliderIndex: number) => {
    setCurrentText(activeSliderIndex);
  };

  return (
    <>
      <Home />
      {/* <StyledHomeSection>
        <SwiperComponent onSliderChange={changeTextHandler} />
      </StyledHomeSection> */}
      {/* <div className="flex h-screen">
        <Card
          title="Quem somos"
          subtitle="Destacamo-nos como uma equipa jovem e dinâmica com amplos conhecimentos da indústria em questão, na generalidade com mais de 15 anos de experiência do ramo, e sensíveis às necessidades dos nossos Clientes."
          buttonText="Saiba mais"
        />
        <Card title="Oferta integrada " />
        <Card title="Áreas de intervenção" />
      </div>
      <div className="h-screen">cosas de la empresa! fotos y logros!</div> */}

      <Misson />
      <Services />

      <StyledSection>
        <StyledSecondaryTitle>Portfólio</StyledSecondaryTitle>
        <Gallery />
      </StyledSection>

      <Products />

      <StyledSection>
        <StyledSecondaryTitle>Equipa</StyledSecondaryTitle>
        <Contacts />
      </StyledSection>

      <ContactUs />

      {/* <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            background: '#e2e2e2',
            height: '60vh',
            width: '100%',
          }}
        >
          <h2>Contact us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            iusto nihil ipsam sapiente possimus doloribus enim porro inventore
            facere debitis tempore, numquam rerum iure cum voluptatibus quasi
            architecto mollitia praesentium.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            width: '60%',
            // height: '450px',
            position: 'absolute',
            bottom: '0',
            transform: 'translateY(-30%)',
            background: '#f5f5f5',
            boxShadow: '0px 0px 10px 5px #cbcbcb',
          }}
        >
          <div
            style={{
              padding: '48px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              Send us a message
            </h3>
            <div style={{ height: '100%', marginTop: 40 }}>
              <Form inputs={formInputs} />
            </div>
          </div>
          <div
            style={{
              background: 'blue',
              width: '35%',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              Contact information
            </h3>
            <div
              style={{
                margin: '40px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  marginBottom: '24px',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '28px',
                    marginRight: '12px',
                  }}
                >
                  <TfiLocationPin />
                </span>
                <p>Caminho do Pilar 19, 9000-653 Funchal</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginBottom: '24px',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    marginRight: '16px',
                  }}
                >
                  <TfiMobile />
                </span>
                <p>(+351) 963 048 614</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    marginRight: '16px',
                  }}
                >
                  <TfiEmail />
                </span>
                <p>eletroflow@eletroflow.pt</p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <span
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  marginRight: '8px',
                }}
              >
                <TfiFacebook />
              </span>
              <span
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TfiLinkedin />
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Main;
