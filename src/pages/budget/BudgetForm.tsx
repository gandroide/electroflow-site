import react from 'react';
import Form from '../../components/Form';
import { FormProps, InputProps } from '../../interfaces';
import {
  StyledBudgetFormContainer,
  StyledBudgetFormContent,
  StyledBudgetPageContainer,
} from './styled';
import emailjs from '@emailjs/browser';
import { StyledPrimaryTitle } from '../../styles';
import axios from 'axios';

const formInputs: InputProps[] = [
  {
    id: 'name',
    type: 'text',
    value: '',
    isRequired: true,
    label: 'Nome',
    hasError: false,
    errorMsg: '',
  },
  {
    id: 'email',
    type: 'text',
    value: '',
    isRequired: true,
    label: 'Email',
    hasError: false,
    errorMsg: '',
  },
  {
    id: 'morada',
    type: 'text',
    value: '',
    isRequired: true,
    label: 'Morada',
    hasError: false,
    errorMsg: '',
  },
  {
    id: 'zip-code',
    type: 'text',
    value: '',
    isRequired: true,
    label: 'Código Postal',
    hasError: false,
    errorMsg: '',
  },
  {
    id: 'localidade',
    type: 'text',
    value: '',
    isRequired: true,
    label: 'Localidade',
    hasError: false,
    errorMsg: '',
  },
  {
    id: 'install',
    type: 'text',
    value: '',
    isRequired: true,
    label: 'Localidade para instalação ou fornecimento',
    hasError: false,
    errorMsg: '',
  },
  {
    id: 'details',
    type: 'textarea',
    value: '',
    isRequired: true,
    label:
      'Insira informações úteis a ter em conta na elaboração do seu orçamento',
    hasError: false,
    errorMsg: '',
  },
];

export const BudgetForm = () => {
  const serviceId = 'service_yaj63pi';
  const templateId = 'template_s7jg1kl';
  const publicKey = 'MwjIzGM8lMjpEKNPb';

  const onSubmitCallback: FormProps['submitCallback'] = (inputs) => {
    console.log(inputs);

    const emailObj: {
      [key: string]: string;
    } = {};

    inputs.forEach((input) => {
      emailObj[input.id] = input.value;
    });

    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: emailObj,
      })
      .then((response: any) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <StyledBudgetPageContainer>
      <StyledBudgetFormContainer>
        <StyledPrimaryTitle>
          Peça-nos um orçamento preenchendo o formulário
        </StyledPrimaryTitle>
        <StyledBudgetFormContent>
          <Form inputs={formInputs} submitCallback={onSubmitCallback} />
        </StyledBudgetFormContent>
      </StyledBudgetFormContainer>
    </StyledBudgetPageContainer>
  );
};
