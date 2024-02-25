import react, { FC } from 'react';
import SwiperComponent from '../components/swiper/Swiper';
import Card from '../components/card/Card';

import {
  TfiEmail,
  TfiLocationPin,
  TfiMobile,
  TfiFacebook,
  TfiLinkedin,
} from 'react-icons/tfi';

import Form from '../components/Form';
import { InputProps } from '../interfaces';

const formInputs: InputProps[] = [
  {
    id: 'name',
    label: 'Nome',
    value: '',
    hasError: false,
    errorMsg: '',
    isRequired: true,
    type: 'text',
    columns: {
      sm: 6,
    },
  },
  {
    id: 'email',
    label: 'Email',
    value: '',
    hasError: false,
    errorMsg: '',
    isRequired: true,
    type: 'text',
    columns: {
      sm: 6,
    },
  },
  {
    id: 'message',
    label: 'Mensagem',
    value: '',
    hasError: false,
    errorMsg: '',
    isRequired: true,
    type: 'textarea',
  },
];

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

      <section
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
      </section>
    </>
  );
};

export default Home;
