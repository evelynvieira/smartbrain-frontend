import React, { useState } from 'react';
import { navigateTo } from '../Router/Router';
import { set } from '../../utils/auth';

const LoginForm = () => {
  const [data, setData] = useState({ password: "", username: "" });

  const onChangeData = event => setData({ ...data, [event.target.name]: event.target.value });

  const onSignIn = event => {
    console.log(data);
    set(data);
    navigateTo('/home');
  }

  return (
   <form className="login_form">
     <div>
       <p>Username</p>
       <input type="text" onChange={onChangeData} name="username" />
     </div>
     <div>
       <p>Password</p>
       <input type="password" onChange={onChangeData} name="password" />
     </div>
     <div className="login_form_actions">
       <button className="primary_button" type="button" onClick={onSignIn}>Sign in</button>
     </div>
   </form>
 );
}

export default LoginForm;