import react from 'react';
import { PiSealCheckBold } from 'react-icons/pi';

import { StyledSecondaryTitle } from '../../styles';
import {
  StyledServicesContainer,
  StyledServiceItem,
  StyledServicesSection,
  StyledServiceImg,
  StyledServiceImgContainer,
  StyledServiceTitle,
  StyledServiceList,
  StyledServiceListItem,
  StyledServiceListDescription,
} from './styled';

const Services = () => {
  return (
    <StyledServicesSection>
      <StyledSecondaryTitle>Serviços</StyledSecondaryTitle>
      <StyledServicesContainer>
        <StyledServiceItem>
          <StyledServiceImgContainer>
            <StyledServiceImg />
          </StyledServiceImgContainer>
          <StyledServiceTitle>Gestão de Projetos</StyledServiceTitle>
          <StyledServiceList>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Elaboração de Estudo e Projetos de Aquecimento, Ar Condicionado
                e Ventilação
              </StyledServiceListDescription>
            </StyledServiceListItem>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Instalações Elétricas e ITED
              </StyledServiceListDescription>
            </StyledServiceListItem>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Energias renováveis
              </StyledServiceListDescription>
            </StyledServiceListItem>
          </StyledServiceList>
        </StyledServiceItem>

        <StyledServiceItem>
          <StyledServiceImgContainer>
            <StyledServiceImg />
          </StyledServiceImgContainer>
          <StyledServiceTitle>Gestão de Produção</StyledServiceTitle>
          <StyledServiceList>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Execução de obras
              </StyledServiceListDescription>
            </StyledServiceListItem>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Execução de remodelações
              </StyledServiceListDescription>
            </StyledServiceListItem>
          </StyledServiceList>
        </StyledServiceItem>

        <StyledServiceItem>
          <StyledServiceImgContainer>
            <StyledServiceImg />
          </StyledServiceImgContainer>
          <StyledServiceTitle>Gestão de Manutenção</StyledServiceTitle>
          <StyledServiceList>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Elaboração e Execução de Planos de Manutenção Preventiva e
                Preditiva
              </StyledServiceListDescription>
            </StyledServiceListItem>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Assistência Técnica e Manutenção Correctiva
              </StyledServiceListDescription>
            </StyledServiceListItem>
            <StyledServiceListItem>
              <PiSealCheckBold />
              <StyledServiceListDescription>
                Assistência Técnica
              </StyledServiceListDescription>
            </StyledServiceListItem>
          </StyledServiceList>
        </StyledServiceItem>
      </StyledServicesContainer>
    </StyledServicesSection>
  );
};

export default Services;
