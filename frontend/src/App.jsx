import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
//import components
import Layout from './layout.jsx';
import Home from './components/pages/Home.jsx';
import SignUp from './components/pages/Auth/User/Signup.jsx';
import Login from './components/pages/Auth/User/Login.jsx';
import { UserProvider } from './components/contexts/UserProvider.jsx';
import Drive from './components/pages/Drive.jsx';

//router
const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='/drive' element={<Drive />} />
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/auth/user/signup' element={<SignUp />} />
      <Route path='/auth/user/login' element={<Login />} />
    </>
  )
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
