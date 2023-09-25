import React, {useState,useEffect} from 'react'
import { validEmail, validPassword } from '../utils/Regex';
import {auth} from '../utils/Firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Stylesheets/Logos.css'
import './Stylesheets/FormSubmission.css'

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidForm,setIsValidForm] = useState(false);

  useEffect(() => {
    if(isValidUsername  && isValidPassword){
      setIsValidForm(true);
    }
  }, [isValidUsername,isValidPassword])


  const handleUserName = (e) => {
    if(validEmail.test(e.target.value)){
      setIsValidUsername(true);
      setUsername(e.target.value);
    }
  }

   const handlePassword = (e) => {
    if(validPassword.test(e.target.value)){
      setIsValidPassword(true);
      setPassword(e.target.value);
    }
  }
  const login= (e) => {
    e.preventDefault();//Add tests for this function
    signInWithEmailAndPassword(auth,username,password)
    .then(() => {
      console.log('Signed In')
     })
   .catch((error) => {
     console.log(error);
   })
 }
  return (
    <div>
      <a className="LogoTextLayout">
      <span className="LogoTextTypography">LOGIN</span>
     </a>
     <a className='FormLayout'>
       <input type="text" data-testid="input-login-username" className='UsernameStyle FormTypography' placeholder='Email' style={{textAlign:'center'}} onChange = {handleUserName}/>
     </a>
     <a className='FormLayout'>
       <input type="Password" data-testid="input-login-password" className='PasswordStyle FormTypography' placeholder='Password' style={{textAlign:'center'}} onChange={handlePassword}/>
     </a>
     {
       isValidForm
       ?
      <a className='SubmitButtonLayout'>
        <button data-testid="login-submitbutton" className='SubmitButtonStyle SubmitButtonTypography' type="button" onClick={login}>
          Submit
        </button>
      </a>
      :
      <a className='SubmitButtonLayout'>
        <button data-testid="login-submitbutton" className='SubmitButtonStyle SubmitButtonTypography' type="button" disabled style={{ opacity: 0.5 }}>
          Submit
        </button>
      </a>
     }
     </div>
  )
}

export default LoginScreen
