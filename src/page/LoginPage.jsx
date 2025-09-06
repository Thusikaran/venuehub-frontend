import React from 'react'
import logo from '../assets/logo.png'

const LoginPage = () => {
  return (
    <div>
        <img src={logo} alt="" />
        <div>
            <p>Continue With</p>
            <div>Google</div>
            <div>FaceBook</div>
            <div>Apple</div>
        </div>
    </div>
  )
}

export default LoginPage