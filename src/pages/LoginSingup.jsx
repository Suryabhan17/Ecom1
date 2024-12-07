import React, { useRef } from 'react'
import './CSS/LoginSingup.css'

const LoginSingup = () => {
  const inputRef=useRef()
  function H(){
    
    inputRef.currentfocus()
    console.log(inputRef.current.value)
  }
  return (
    <div className='loginsinup'>
    <div className="loginsignup-container">
<h1>Sing Up</h1>
    <div className="loginsignup-fields">
     <input type="text" placeholder='Your Name' />
     <input  type="email" placeholder='Email Address' />
     <input type="password" placeholder='Password' />

    </div>
     <button onClick={H}>Continue</button>
     <p className="loginsignup-login">
      Already have an account ? <span> login here</span>
     </p>
     <div className="loginsignup-agree">
      <input type="checkbox" name='' id='' />
      <p> By continuing i agree to the  terms of use & privacy policy. </p>
     </div>
    </div>
      
    </div>
  )
}

export default LoginSingup
