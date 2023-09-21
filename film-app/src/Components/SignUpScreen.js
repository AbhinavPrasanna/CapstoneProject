import React,{useEffect, useState} from 'react'
import { validEmail, validFirstName, validLastName, validPassword } from '../utils/Regex';
import './Stylesheets/Logos.css'
import './Stylesheets/FormSubmission.css'

function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidForm,setIsValidForm] = useState(false);
 
  useEffect(() => {
    if(isValidUsername && isValidFirstName && isValidLastName && isValidPassword){
      setIsValidForm(true);
    }
  }, [isValidUsername,isValidFirstName,isValidLastName,isValidPassword])


  const handleUserName = (e) => {
    if(validEmail.test(e.target.value)){
      setIsValidUsername(true);
      setUsername(e.target.value);
    }
  }

  const handleFirstName = (e) => {
    if(validFirstName.test(e.target.value)){
      setIsValidFirstName(true);
      setFirstname(e.target.value);
    }
  }

   const handleLastName = (e) => {
    if(validLastName.test(e.target.value)){
      setIsValidLastName(true);
      setLastname(e.target.value);
    }
  }

   const handlePassword = (e) => {
    if(validPassword.test(e.target.value)){
      setIsValidPassword(true);
      setPassword(e.target.value);
    }
  }
  return (
    <div>
      <a className="LogoTextLayout">
      <span className="LogoTextTypography">SIGN UP</span>
     </a>
      <a className='FormLayout'>
       <input type="email" data-testid = 'input-signup-username' className='UsernameStyle FormTypography' placeholder='Email' style={{textAlign:'center'}} onChange = {handleUserName}/>
      </a>
      <a className='FormLayout'>
        <input type="text" data-testid = 'input-signup-firstname' className= 'FirstNameStyle FormTypography' placeholder='First Name' style={{textAlign:'center'}} onChange = {handleFirstName} />
      </a>
      <a className='FormLayout'>
        <input type="text" data-testid='input-signup-lastname' className= 'LastNameStyle FormTypography' placeholder='Last Name' style={{textAlign:'center'}} onChange = {handleLastName} />
      </a>
      <a className='FormLayout'>
       <input type="password" data-testid='input-signup-password' className='PasswordStyle FormTypography' placeholder='Password' style={{textAlign:'center'}} onChange = {handlePassword}/>
      </a>
      {
        isValidForm 
        ?
      <a className='SubmitButtonLayout'>
        <button data-testid="signup-submitbutton" className='SubmitButtonStyle SubmitButtonTypography' type="button">
          Submit
        </button>
      </a>
      :
      <a className='SubmitButtonLayout'>
        <button data-testid="signup-submitbutton" className='SubmitButtonStyle SubmitButtonTypography' type="button" style={{ opacity: 0.5 }} disabled>
          Submit
        </button>
        </a>
      }
     </div>
  )
}

export default SignUpScreen
