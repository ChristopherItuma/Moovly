import React from 'react'

const Login = () => {
  return (
    <div className='w-full bg-white h-[100vh] flex justify-center items-center'>
      <form action="">
        <input type="text" placeholder='enter your name' required/>
        <input type="email" placeholder='enter your email address' />
        <input type="passwprd" required placeholder='enter your password'/>
      </form>
    </div>
  )
}

export default Login