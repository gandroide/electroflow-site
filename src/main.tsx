import react from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Utils';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/translations';
import Footer from './components/Footer';
import Form from './components/Form';
import GlobalStyle from './styles';
import { FormProps } from './interfaces';
import { Grid, GridItem } from './components/Grid';

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
    <I18nextProvider i18n={i18n}>
      <main>
        <RouterProvider router={router} />
        <Footer />
      </main>
    </I18nextProvider>
    <GlobalStyle />
  </react.StrictMode>,
);
