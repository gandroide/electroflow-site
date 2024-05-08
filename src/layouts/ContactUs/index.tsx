import react from 'react';
import {
  StyledQuaternaryTitle,
  StyledSecondaryTitle,
  StyledSection,
  StyledTertiaryTtile,
} from '../../styles';
import {
  StyledContactUsContainer,
  StyledContactUsContent,
  StyledContactUsInformationContainer,
  StyledContactUsInformationContent,
  StyledContactUsInformationIcon,
  StyledContactUsInformationValue,
  StyledContactUsOverlay,
  StyledContactUsSection,
  StyledFormContainer,
  StyledTertiaryTitleContainer,
} from './styled';

import Map from '../../assets/imgs/map.png';
import Form from '../../components/Form';
import { InputProps } from '../../interfaces';
import { TfiEmail, TfiLocationPin, TfiMobile } from 'react-icons/tfi';

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
      md: 12,
      lg: 6,
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
      md: 12,
      lg: 6,
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

const ContactUs = () => {
  return (
    <StyledContactUsSection id="contact">
      <StyledContactUsOverlay $background={Map} />
      <StyledContactUsContainer>
        <StyledSecondaryTitle>Contacte-nos</StyledSecondaryTitle>
        <StyledTertiaryTitleContainer>
          <StyledTertiaryTtile>
            Para mais informações sobre os nossos serviços, não hesite em
            contactar-nos preenchendo o formulário abaixo
          </StyledTertiaryTtile>
        </StyledTertiaryTitleContainer>
      </StyledContactUsContainer>
      <StyledContactUsContent>
        <StyledFormContainer>
          <StyledQuaternaryTitle>Envie-nos uma mensagem</StyledQuaternaryTitle>
          <Form inputs={formInputs} />
        </StyledFormContainer>
        <StyledContactUsInformationContainer>
          <StyledQuaternaryTitle>Informação do contacto</StyledQuaternaryTitle>
          <StyledContactUsInformationContent>
            <StyledContactUsInformationIcon>
              <TfiLocationPin size={20} />
            </StyledContactUsInformationIcon>
            <StyledContactUsInformationValue>
              Caminho do Pilar 19, 9000-653 Funchal
            </StyledContactUsInformationValue>
          </StyledContactUsInformationContent>
          <StyledContactUsInformationContent>
            <StyledContactUsInformationIcon>
              <TfiMobile size={20} />
            </StyledContactUsInformationIcon>
            <StyledContactUsInformationValue>
              (+351) 963 048 614
            </StyledContactUsInformationValue>
          </StyledContactUsInformationContent>
          <StyledContactUsInformationContent>
            <StyledContactUsInformationIcon>
              <TfiEmail size={20} />
            </StyledContactUsInformationIcon>
            <StyledContactUsInformationValue>
              eletroflow@eletroflow.pt
            </StyledContactUsInformationValue>
          </StyledContactUsInformationContent>
        </StyledContactUsInformationContainer>
      </StyledContactUsContent>
    </StyledContactUsSection>
  );
};

export default ContactUs;
