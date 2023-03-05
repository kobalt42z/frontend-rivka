import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { POSTlogin } from '../API'
import MainButtons from '../components/buttons/MainButtons'
import LoginInput from '../components/misc/LoginInput'
import LoginCredentials from '../interfaces/auth.interface'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { loginFailure, loginStart, loginSuccess } from '../store/loginSlice'
import axios, { AxiosError } from 'axios'
import { Alert } from 'flowbite-react'
import {InformationCircleIcon} from '@heroicons/react/24/outline'

// provide type about fiealds
type Inputs = {
  example: string,
  exampleRequired: string,
  email: string,
  password: string
};

export const LoginPage = () => {
  const authState = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()
  const [showError, setShowError] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data: LoginCredentials) => {
    console.log(data);
    try {
      dispatch(loginStart())
      const response = await POSTlogin(data);
      if (response) dispatch(loginSuccess(response.data));
      navigate('/')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(loginFailure(error.response?.data))
        if (error.response?.status === 403) setShowError(true);
      }
      throw error;
    }
  }

  useEffect(() => {
  }, [])



  return (
    <div className='container flex flex-col items-center min-h-[75vh] pt-10 '>
      {showError&&<Alert
        color="failure"
        icon={InformationCircleIcon}
      >
        <span>
          <span className="font-medium">
            wrong! 
          </span>
          {' '}one or more credential you provided is wrong.
        </span>
      </Alert>}
      {/* registerbtn  */}
      <div className="flex uppercase text-xs justify-around w-[80%] py-10 text-black">
        <h2 className='font-bold '>dont have an accont ?</h2>
        <Link to={'/register'}><h2 className='font-semibold underline'>register now !</h2></Link>
      </div>
      <h2 className="capitalize  text-xs">If you are already registered with Rivka Nakache, login here:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] flex flex-col  justify-center-center pt-10 space-y-10">


        <div className='w-full'>
          <input placeholder={'Email *'} type="text" className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${errors.email && "border-red-600"}`} {...register('email',
            {
              required: {
                value: true,
                message: 'email is required '
              },
              maxLength: {
                value: 50,
                message: " to many caracters... "
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: " must be a valid email"
              },
            }
          )} />
          {errors.email && <p role={"alert"} className="text-red-600 capitalize">{errors.email?.message}</p>}
        </div>
        <div className="w-full">
          <input type={"password"} placeholder={'Password *'} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0`} {...register("password",
            {
              required: {
                value: true,
                message: "password is required"
              },
              minLength: {
                value: 8,
                message: "password must be at least 8 characters "
              },
              maxLength: {
                value: 16,
                message: "password can be at most 16 caracters "
              }
            })} />
          {errors.password && <p role={"alert"} className="text-red-600 capitalize">{errors.password?.message}</p>}
        </div>
        <div className="pt-5">
          <Link to={'/forgot'} className='capitalize text-sm underline'  >Forgot your password ?</Link>
          <br />
          <Link to={'/policy'} className='capitalize text-xs '>Read the <span className="underline"> Privacy Policy </span> for further information</Link>
        </div>

        <MainButtons custom={'h-12 rounded-[50px] w-[70%] self-center text-black'}  >Login</MainButtons>
      </form>

    </div>
  )
}
