import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Home from './components/pages/Home.jsx';
import Auth from './components/pages/Auth.jsx';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Auth />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
