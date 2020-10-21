import React, { useState } from 'react';

const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [matchingPass, setMatchingPass] = useState({ dirty: false, valid: false });

  const validateForm = () => {
    const { password, confirmPassword } = data;

    if (password !== "" && confirmPassword !== "") {
      setMatchingPass({ valid: false, dirty: true });
      if (password === confirmPassword) {
        setMatchingPass({ valid: true, dirty: true });
      } else setMatchingPass({ valid: false, dirty: true });
    } else setMatchingPass({ valid: false, dirty: false });
  }

  const onChangeForm = event => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const onRegister = event => {
    validateForm();

    if (matchingPass.valid) {
      console.log(data);
      setMatchingPass({ valid: false, dirty: false });
    }
  }

  return (
   <form className="register_form">
     <div>
       <p>Name</p>
       <input type="text" onChange={onChangeForm} name="name" />
     </div>
     <div>
       <p>Username</p>
       <input type="text" onChange={onChangeForm} name="username" />
     </div>
     <div>
       <p>Password</p>
       <input type="password" onChange={onChangeForm} onBlur={validateForm} name="password" />
       {matchingPass.dirty && !matchingPass.valid && (
         <p className="message-validator">Password does not match</p>
       )}
     </div>
     <div>
       <p>Confirm Password</p>
       <input type="password" onChange={onChangeForm} onBlur={validateForm} name="confirmPassword" />
       {matchingPass.dirty && !matchingPass.valid && (
         <p className="message-validator">Password does not match</p>
       )}
     </div>
     <div className="register_form_actions">
       <button className="primary_button" type="button" onClick={onRegister}>Register</button>
     </div>
   </form>
 );
}

export default RegisterForm;