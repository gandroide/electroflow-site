import react from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Utils';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/translations';
import Form from './components/Form';
import GlobalStyle from './styles';
import { FormProps } from './interfaces';
import Modal from './components/Modal';
import PrivacyPolicy from './layouts/PrivacyPolicy';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const inputs: FormProps['inputs'] = [
  {
    id: '1',
    label: 'Teste 1',
    type: 'text',
    value: '',
    hasError: true,
    errorMsg: '',
    isRequired: true,
    columns: {
      sm: 6,
    },
  },
  {
    id: '2',
    label: 'Teste 2',
    type: 'textarea',
    value: '',
    hasError: true,
    errorMsg: '',
    isRequired: true,
    columns: {
      sm: 6,
    },
  },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <react.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </react.StrictMode>,
);
