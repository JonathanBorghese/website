import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider, Navigate } from 'react-router-dom';

import './css/index.css';
import SLPBlog from './routes/Blogs/SLP'
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import Resume from './routes/Resume';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        index: true
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'blog',
        element: <SLPBlog />
      }, 
      {
        path: '*',
        element: <Navigate to='/' />
      }
    ],
  }, { basename: process.env.PUBLIC_URL },
]);


ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

