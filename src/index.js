import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './css/index.css';
import Blog from './routes/Blog'
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import Resume from './routes/Resume';

const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL + '/',
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
      {
        path: 'blog',
        element: <Blog />
      }
    ],
  }, { basename: '' },
]);

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
