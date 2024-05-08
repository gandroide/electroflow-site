import react from 'react';

import ServiceCard from '../../components/ServiceCard';

import Manutencao from '../../assets/imgs/services/manutencao.jpg';
import Producao from '../../assets/imgs/services/producao.jpg';
import Projectos from '../../assets/imgs/services/projectos.jpg';

import { StyledSecondaryTitle } from '../../styles';
import { StyledServicesContainer, StyledServicesSection } from './styled';
import { ServiceCardData } from '../../interfaces';

const servicesData: ServiceCardData[] = [
  {
    id: 1,
    img: Projectos,
    title: 'Gestão de Projetos',
    items: [
      {
        id: 1,
        text: 'Elaboração de Estudo e Projetos de Aquecimento, Ar Condicionado e Ventilação',
      },
      {
        id: 2,
        text: 'Instalações Elétricas e ITED',
      },
      {
        id: 3,
        text: 'Energias renováveis',
      },
    ],
  },
  {
    id: 2,
    img: Producao,
    title: 'Gestão de Produção',
    items: [
      {
        id: 1,
        text: 'Execução de obras',
      },
      {
        id: 2,
        text: 'Execução de remodelações',
      },
    ],
  },
  {
    id: 3,
    img: Manutencao,
    title: 'Gestão de Manutenção',
    items: [
      {
        id: 1,
        text: 'Elaboração e Execução de Planos de Manutenção Preventiva e Preditiva',
      },
      {
        id: 2,
        text: 'Assistência Técnica e Manutenção Correctiva',
      },
      {
        id: 3,
        text: 'Assistência Técnica',
      },
    ],
  },
];

const Services = () => {
  return (
    <StyledServicesSection id="services">
      <StyledSecondaryTitle>Serviços</StyledSecondaryTitle>
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
