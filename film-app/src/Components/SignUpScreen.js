import React from 'react'
import './Stylesheets/Logos.css'
import './Stylesheets/FormSubmission.css'

function SignUpScreen() {
  return (
    <div>
      <a className="LogoTextLayout">
      <span className="LogoTextTypography">SIGN UP</span>
     </a>
      <a className='FormLayout'>
       <input className='UsernameStyle FormTypography' placeholder='Email' style={{textAlign:'center'}}/>
      </a>
      <a className='FormLayout'>
        <input className= 'FirstNameStyle FormTypography' placeholder='First Name' style={{textAlign:'center'}} />
      </a>
      <a className='FormLayout'>
        <input className= 'LastNameStyle FormTypography' placeholder='Last Name' style={{textAlign:'center'}} />
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

export default SignUpScreen
