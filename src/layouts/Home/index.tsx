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

const AnimatedText = () => {
  const [visibleText, setVisibleText] = useState(0);
  const { t } = useTranslation();

  const animatedTextValues = [
    t('translations.main.animatedText.1'),
    t('translations.main.animatedText.2'),
    t('translations.main.animatedText.3'),
    t('translations.main.animatedText.4'),
  ];

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
    </StyledAnimatedTextContainer>
  );
};

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const isHomeVisible = useIntersectionObserver({ ref: homeRef });
  const { t } = useTranslation();

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
            <AnimatedText />
          </StyledHomeContentText>
          <StyledHomeContentText>
            {t('translations.main.thirdParagraph')}
          </StyledHomeContentText>
        </StyledHomeContent>
      </CSSTransition>
      <StyledHomeSlider>
        <SwiperComponent />
      </StyledHomeSlider>
    </StyledHomeSection>
  );
};

export default Home;
