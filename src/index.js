import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './css/index.css';
import Root from './routes/Root';
import Home from './routes/Home';
import Resume from './routes/Resume';

const basename = '/website';

const router = createBrowserRouter([
  {
    path: basename,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render (

    <RouterProvider router={router} />

);
