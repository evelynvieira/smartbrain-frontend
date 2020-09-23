import React from 'react';
import Home from '../Home/Home';

const component = {
  '/register': <div>Register</div>,
  '/login': <div>Login</div>,
  '/home': <Home />
}

const Router =  () => {
  const href = window.location.pathname;

  return (
    <>
      {component[href]}
    </>
  )
}

export default Router;