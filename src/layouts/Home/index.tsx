import react, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  StyledHomeContent,
  StyledHomeContentText,
  StyledHomeSection,
  StyledHomeSlider,
  StyledHomeContentAnimated,
  StyledAnimatedTextContainer,
} from './styled';
import SwiperComponent from '../../components/swiper/Swiper';
import { StyledPrimaryTitle } from '../../styles';

const animatedTextValues = [
  'Automação e Manutenção Industrial',
  'Eletricidade e ITED',
  'Climatização',
  'Energias renováveis',
];

const AnimatedText = () => {
  const [visibleText, setVisibleText] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newVisibleTextIndex =
        visibleText === animatedTextValues.length - 1 ? 0 : visibleText + 1;

      setVisibleText(newVisibleTextIndex);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [visibleText]);

  return (
    <StyledAnimatedTextContainer>
      {/* <TransitionGroup className="teste"> */}
      {animatedTextValues.map((text, index) => (
        <CSSTransition
          key={text}
          timeout={500}
          classNames="teste"
          in={visibleText === index}
          mountOnEnter
          unmountOnExit
        >
          <StyledHomeContentAnimated $first={index === 0}>
            {text}
          </StyledHomeContentAnimated>
        </CSSTransition>
      ))}
      {/* </TransitionGroup> */}
    </StyledAnimatedTextContainer>
  );
};

const Home = () => {
  return (
    <StyledHomeSection>
      <StyledHomeContent>
        <StyledPrimaryTitle>ELECTROFLOW</StyledPrimaryTitle>
        <StyledHomeContentText>
          Exerce a atividade desde 2014, e contamos com uma equipa jovem e
          dinâmica com amplos conhecimentos da indústria, em diversas áreas de
          engenharia, em sintonia com as necessidades dos nossos clientes na
          RAM.
        </StyledHomeContentText>
        <StyledHomeContentText>
          Intervimos ao nível do projeto, montagem/execução e assistência
          técnica nas seguintes áreas de negócio:
          <AnimatedText />
        </StyledHomeContentText>
        <StyledHomeContentText>
          Nas áreas acima mencionadas comercializamos produtos de Marcas de
          referência, tanto para o setor industrial como comercial, com várias
          parcerias forjadas com grupos empresariais reconhecidos globalmente.
        </StyledHomeContentText>
      </StyledHomeContent>
      <StyledHomeSlider>
        <SwiperComponent />
      </StyledHomeSlider>
    </StyledHomeSection>
  );
};

export default Home;
