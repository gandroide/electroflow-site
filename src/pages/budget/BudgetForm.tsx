import react, { useRef } from 'react';
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

export const BudgetForm = () => {
  const form = useRef();

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
      label: 'Código-Postal',
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
    // {
    //   id: 'instalation',
    //   type: 'radio',
    //   options: [
    //     {
    //       isChecked: false,
    //       label: 'Residencial',
    //       value: 'residencial',
    //     },
    //     {
    //       isChecked: false,
    //       label: 'Comercial',
    //       value: 'comercial',
    //     },
    //   ],
    //   isRequired: true,
    //   label: 'Tipo de instalação',
    //   hasError: false,
    //   errorMsg: '',
    // },
    // {
    //   id: 'budgetType',
    //   type: 'radio',
    //   value: '',
    //   isRequired: true,
    //   label: 'Informação para orçamento',
    //   hasError: false,
    //   errorMsg: '',
    // },
    // {
    //   id: 'budgetType',
    //   type: 'radio',
    //   value: '',
    //   isRequired: true,
    //   label: 'Informação para orçamsddsento',
    //   hasError: false,
    //   errorMsg: '',
    // },
    // {
    //   id: 'budgetType',
    //   type: 'radio',
    //   value: '',
    //   isRequired: true,
    //   label: 'Informação para oaddrçamento',
    //   hasError: false,
    //   errorMsg: '',
    // },
    {
      id: 'install',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Localidade para instalação ou fornecimento',
      hasError: false,
      errorMsg: '',
    },
    // {
    //   id: 'space1',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Espaço a climatizar 1',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
    // {
    //   id: 'area1',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Área (m2)',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
    // {
    //   id: 'space2',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Espaço a climatizar 2',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
    // {
    //   id: 'area2',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Área (m2)',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
    // {
    //   id: 'space3',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Espaço a climatizar 1',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
    // {
    //   id: 'area3',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Área (m2)',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
    // {
    //   id: 'space4',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Espaço a climatizar 1',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
    // {
    //   id: 'area4',
    //   type: 'text',
    //   value: '',
    //   isRequired: true,
    //   label: 'Área (m2)',
    //   hasError: false,
    //   errorMsg: '',
    //   columns: {
    //     sm: 6,
    //   },
    // },
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

  // const sendEmail = (e: any) => {
  //   e.preventDefault();
  // falta acrescentar as envs e criar o serviço no site de emailjs
  // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
  // };

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
