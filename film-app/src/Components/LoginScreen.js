import React from 'react'
import './Stylesheets/Logos.css'
import './Stylesheets/FormSubmission.css'

function LoginScreen() {
  return (
    <div>
      <a className="LogoTextLayout">
      <span className="LogoTextTypography">LOGIN</span>
     </a>
      <a className='FormLayout'>
       <input type="text" data-testid="input-login-username"className='UsernameStyle FormTypography' placeholder='Email' style={{textAlign:'center'}}/>
      </a>
      <a className='FormLayout'>
       <input type="text" data-testid="input-login-password"className='PasswordStyle FormTypography' placeholder='Password' style={{textAlign:'center'}}/>
      </a>
      <a className='SubmitButtonLayout'>
        <button className='SubmitButtonStyle SubmitButtonTypography' type="button">
          Submit
        </button>
      </a>
     </div>
  )
}

export default LoginScreen
