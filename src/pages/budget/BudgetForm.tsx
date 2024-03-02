import react from 'react';
import Form from '../../components/Form';
import { InputProps } from '../../interfaces';
import { Container } from './styled';

export const BudgetForm = () => {
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
    {
      id: 'instalation',
      type: 'radio',
      options: [
        {
          isChecked: false,
          label: 'Residencial',
          value: 'residencial',
        },
        {
          isChecked: false,
          label: 'Comercial',
          value: 'comercial',
        },
      ],
      isRequired: true,
      label: 'Tipo de instalação',
      hasError: false,
      errorMsg: '',
    },
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
    {
      id: 'space1',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Espaço a climatizar 1',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
    },
    {
      id: 'area1',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Área (m2)',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
    },
    {
      id: 'space2',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Espaço a climatizar 2',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
    },
    {
      id: 'area2',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Área (m2)',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
    },
    {
      id: 'space3',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Espaço a climatizar 1',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
    },
    {
      id: 'area3',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Área (m2)',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
    },
    {
      id: 'space4',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Espaço a climatizar 1',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
    },
    {
      id: 'area4',
      type: 'text',
      value: '',
      isRequired: true,
      label: 'Área (m2)',
      hasError: false,
      errorMsg: '',
      columns: {
        sm: 6,
      },
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
  return (
    <Container>
      <Form inputs={formInputs} />
    </Container>
  );
};
