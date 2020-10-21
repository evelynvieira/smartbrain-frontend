import React from 'react';
import LoginForm from '../Login/LoginForm';
import Home from '../Home/Home';
import RegisterForm from '../Register/RegisterForm';
import { isAuthenticated } from '../../utils/auth';

const BASE_URL = window.location.origin;

const component = {
  '/register': <RegisterForm />,
  '/login': <LoginForm />,
  '/home': <Home />,
}

const navigateTo = (path) => window.location.href = `${BASE_URL}${path}`

const isHome = () => window.location.pathname === '/home';

const Router =  () => {
  const { pathname } = window.location;
  if(!isAuthenticated() && isHome()) navigateTo('/login');

  return (
    <>
      {component[pathname]}
    </>
  )
}

export { navigateTo, isHome };
export default Router;