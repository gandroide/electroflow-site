import react from 'react';
import {
  StyledSecondaryTitle,
  StyledSection,
  StyledTertiaryTtile,
} from '../../styles';
import {
  StyledContactUsContainer,
  StyledContactUsOverlay,
  StyledFormContainer,
} from './styled';

import Map from '../../assets/imgs/map.png';
import Form from '../../components/Form';
import { InputProps } from '../../interfaces';

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

const ContactUs = () => {
  return (
    <StyledSection>
      <StyledContactUsOverlay $background={Map} />
      <StyledContactUsContainer>
        <StyledSecondaryTitle>Contacte-nos</StyledSecondaryTitle>
        <StyledTertiaryTtile>
          Para mais informações sobre os nossos serviços, não hesite em
          contacte-nos preenchendo o formulário abaixo
        </StyledTertiaryTtile>
        <StyledFormContainer>
          <Form inputs={formInputs} />
        </StyledFormContainer>
      </StyledContactUsContainer>
    </StyledSection>
  );
};

export default ContactUs;
