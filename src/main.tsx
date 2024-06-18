import react from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Utils';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/translations';
import GlobalStyle from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

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
