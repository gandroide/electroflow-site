import react, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

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
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';

const AnimatedText = ({ visibleTextIndex }: { visibleTextIndex: number }) => {
  const { t } = useTranslation();

  const animatedTextValues = [
    t('translations.main.animatedText.1'),
    t('translations.main.animatedText.2'),
    t('translations.main.animatedText.3'),
    t('translations.main.animatedText.4'),
  ];

  return (
    <StyledAnimatedTextContainer>
      {animatedTextValues.map((text, index) => (
        <CSSTransition
          key={text}
          timeout={500}
          classNames="teste"
          in={visibleTextIndex === index}
          mountOnEnter
          unmountOnExit
        >
          <StyledHomeContentAnimated $first={index === 0}>
            {text}
          </StyledHomeContentAnimated>
        </CSSTransition>
      ))}
    </StyledAnimatedTextContainer>
  );
};

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const isHomeVisible = useIntersectionObserver({ ref: homeRef });
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <StyledHomeSection>
      <CSSTransition
        in={isHomeVisible}
        timeout={500}
        classNames="animated-home"
      >
        <StyledHomeContent ref={homeRef}>
          <StyledPrimaryTitle>ELECTROFLOW</StyledPrimaryTitle>
          <StyledHomeContentText>
            {t('translations.main.firstParagraph')}
          </StyledHomeContentText>
          <StyledHomeContentText>
            {t('translations.main.secondParagraph')}
            <AnimatedText visibleTextIndex={currentIndex} />
          </StyledHomeContentText>
          <StyledHomeContentText>
            {t('translations.main.thirdParagraph')}
          </StyledHomeContentText>
        </StyledHomeContent>
      </CSSTransition>
      <StyledHomeSlider>
        <SwiperComponent onSliderChange={(index) => setCurrentIndex(index)} />
      </StyledHomeSlider>
    </StyledHomeSection>
  );
};

export default Home;
