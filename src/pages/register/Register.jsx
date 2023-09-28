import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className='login'>
    <div className='loginWrapper'>
        <div className='loginLeft'>
            <h3 className='loginLogo'>Lamasocial</h3>
            <span className='logoDesc'>Connect with friends and the world around you on Lamasocial</span>
        </div>
        <div className='loginRight'>
            <div className='loginBox'>
                <input placeholder='Username' className='loginInput'/>
                <input placeholder='Email' className='loginInput'/>
                <input placeholder='Password' className='loginInput'/>
                <input placeholder='Password Again' className='loginInput'/>
                <button className='loginButton' >Sign Up</button>
                <span className='loginForgot'>Forgot Password?</span>
                <button className='loginRegisterButton'>Log into your Account</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register