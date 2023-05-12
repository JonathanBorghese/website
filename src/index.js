import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './css/index.css';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import Resume from './routes/Resume';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '', 
        element: <Home />
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  }, { basename: process.env.PUBLIC_URL },
]);

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
