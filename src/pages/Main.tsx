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
import { useTranslation } from 'react-i18next';

const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Home />
      <Misson />
      <Services />

      <StyledSection id="gallery">
        <StyledSecondaryTitle>Portfólio</StyledSecondaryTitle>
        <Gallery />
      </StyledSection>

      <Products />

      <StyledSection id="team">
        <StyledSecondaryTitle>
          {t('translations.header.team.title')}
        </StyledSecondaryTitle>
        <Contacts />
      </StyledSection>

      <ContactUs />
    </>
  );
};

export default Main;
