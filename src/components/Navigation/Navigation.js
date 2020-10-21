import React from 'react';
import { isHome } from '../Router/Router';
import { clear } from '../../utils/auth';
import './Navigation.css';

const Navigation = () => (
    <nav>
      <a href="/register">Register</a>
      <a href="/login" onClick={() => clear()}>{isHome() ? 'Sign Out' : 'Sign In'}</a>
    </nav>
  );

export default Navigation;