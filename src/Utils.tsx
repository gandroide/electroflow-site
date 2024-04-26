import react from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Services from './pages/Services';
import Company from './pages/Company';
import Header from './components/Header';
import Main from './pages/Main';
import { BudgetForm } from './pages/budget/BudgetForm';
import Root from './pages/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      // {
      //   path: '/services',
      //   element: <Services />,
      // },
      // {
      //   path: '/company',
      //   element: <Company />,
      // },
      {
        path: '/budget',
        element: <BudgetForm />,
      },
    ],
  },
]);
