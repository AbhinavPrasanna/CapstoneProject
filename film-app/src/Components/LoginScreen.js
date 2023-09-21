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
       <input className='UsernameStyle FormTypography' placeholder='Email' style={{textAlign:'center'}}/>
      </a>
      <a className='FormLayout'>
       <input className='PasswordStyle FormTypography' placeholder='Password' style={{textAlign:'center'}}/>
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
