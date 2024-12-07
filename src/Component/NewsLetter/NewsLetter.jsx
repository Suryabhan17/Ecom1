import React ,{useRef}from 'react'
import './NewsLetter.css'


function NewsLetter() {
  const inputRef=useRef()
  function h(){
    inputRef.current.focus()
    console.log(inputRef.current.value)

  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our wensletter and stay updated</p>
      <div>
        <input ref={inputRef} type="email" placeholder='your Email id' />
        <button onClick={h}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
