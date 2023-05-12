import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './css/index.css';
import Root from './routes/Root';
import Home from './routes/Home';
import Resume from './routes/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
  },
  {
    basename: '',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render (

    <RouterProvider router={router} />

);
