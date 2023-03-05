import React, { FormEventHandler } from 'react'
import { Link } from 'react-router-dom'
import MainButtons from '../components/buttons/MainButtons'
import LoginInput from '../components/misc/LoginInput'
import { login } from '../Services/undex'

export const LoginPage = () => {


 
  return (
    <div className='container flex flex-col items-center min-h-[75vh] pt-10 '>
      {/* registerbtn  */}
      <div className="flex uppercase text-xs justify-around w-[80%] py-10 text-black">
        <h2 className='font-bold '>dont have an accont ?</h2>
        <Link to={'/register'}><h2 className='font-semibold underline'>register now !</h2></Link>
      </div>
      <h2 className="capitalize  text-xs">If you are already registered with Rivka Nakache, login here:</h2>
      <form  className="w-[70%] flex flex-col  justify-center-center pt-10 space-y-10">
        <LoginInput placeholder={'Email *'} type="text" />
        <LoginInput placeholder={'Password *'} type="password" />

        <div className="pt-5">
          <Link to={'/forgot'} className='capitalize text-sm underline'  >Forgot your password ?</Link>
          <br />
          <Link to={'/policy'} className='capitalize text-xs '>Read the <span className="underline"> Privacy Policy </span> for further information</Link>
        </div>
        
        <MainButtons custom={'h-12 rounded-[50px] w-[70%] self-center text-black'} ClickAction={()=>login({email:"chmouel2690@gmail.com",password:"helloworld!"})} >Login</MainButtons>
      </form>

    </div>
  )
}
