import react from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
      //   path: '/budget',
      //   element: <BudgetForm />,
      // },
    ],
  },
]);
