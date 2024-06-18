import React from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'> 
        <h1>Sign Up</h1> 
        <div className='loginsignup-form'>                   
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />            
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup