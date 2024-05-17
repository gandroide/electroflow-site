import react from 'react';

import ServiceCard from '../../components/ServiceCard';

import Manutencao from '../../assets/imgs/services/manutencao.jpg';
import Producao from '../../assets/imgs/services/producao.jpg';
import Projectos from '../../assets/imgs/services/projectos.jpg';

import { StyledSecondaryTitle } from '../../styles';
import { StyledServicesContainer, StyledServicesSection } from './styled';
import { ServiceCardData } from '../../interfaces';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const servicesData: ServiceCardData[] = [
    {
      id: 1,
      img: Projectos,
      title: t('translations.header.services.firstService.title'),
      items: [
        {
          id: 1,
          text: t('translations.header.services.firstService.item1'),
        },
        {
          id: 2,
          text: t('translations.header.services.firstService.item2'),
        },
        {
          id: 3,
          text: t('translations.header.services.firstService.item3'),
        },
      ],
    },
    {
      id: 2,
      img: Producao,
      title: t('translations.header.services.secondService.title'),
      items: [
        {
          id: 1,
          text: t('translations.header.services.secondService.item1'),
        },
        {
          id: 2,
          text: t('translations.header.services.secondService.item2'),
        },
      ],
    },
    {
      id: 3,
      img: Manutencao,
      title: t('translations.header.services.thirdService.title'),
      items: [
        {
          id: 1,
          text: t('translations.header.services.thirdService.item1'),
        },
        {
          id: 2,
          text: t('translations.header.services.thirdService.item2'),
        },
        {
          id: 3,
          text: t('translations.header.services.thirdService.item3'),
        },
      ],
    },
  ];

  return (
    <StyledServicesSection id="services">
      <StyledSecondaryTitle>
        {t('translations.header.services.title')}
      </StyledSecondaryTitle>
      <StyledServicesContainer>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            title={service.title}
            items={service.items}
          />
        ))}
      </StyledServicesContainer>
    </StyledServicesSection>
  );
};

export default Services;
