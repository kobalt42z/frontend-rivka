import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { Link, redirect, useNavigate } from 'react-router-dom'
import MainButtons from '../../components/buttons/MainButtons'
import LoginInput from '../../components/misc/LoginInput'
import LoginCredentials from '../../interfaces/auth.interface'
import { Alert } from 'flowbite-react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useJwtAuthMutation, useLoginMutation } from '../../features/API/Auth.Api'
import { FetchBaseQueryError } from '@reduxjs/toolkit/src/query'
import { TOKEN_KEYWORD, USER_KEYWORD } from '../../constant'
import { useDispatch } from 'react-redux'
import { setPayload, setToken, sign } from '../../features/Slices/Payload.slice'
import jwt_decode from 'jwt-decode'
import ErrorsAlerter from '../../components/errors/ErrorsAlerter'
  // provide type about fiealds
  ;
import { LoginInputs as Inputs } from '../../interfaces/'
import { lemailValidator, lpasswordValidator } from '../../validators'

export const LoginPage = () => {
  const [login, { isLoading, isError, isSuccess, error, data: userData }] = useLoginMutation()
  const [status, setStatus] = useState(0)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authMe, { isLoading: jwtLoading }] = useJwtAuthMutation()

  const onSubmit: SubmitHandler<Inputs> = async (data: LoginCredentials) => {
    try {
      const resp = await login(data).unwrap()
      localStorage.setItem(TOKEN_KEYWORD, resp.token)
      dispatch(setToken(resp.token));
      dispatch(setPayload(jwt_decode(resp.token)))
      dispatch(sign())


      navigate(-1)
    } catch (err: FetchBaseQueryError | any) {
      setStatus(err.status);
      throw err;
    }
  }






  return (
    <div className=' flex  flex-col items-center  min-h-[75vh] pt-10 red '>
      <ErrorsAlerter status={status} />
      <h2 className='font-bold text-lg'>: התחברות</h2>
      <div className="flex uppercase text-base justify-around  w-[80%] py-10 text-black">
        <Link to={'/register'}><h2 className='font-semibold underline text-[14px]'>! הירשמי עכשיו </h2></Link>
        <h2 className='font-bold text-base '>? איו לך חשבון </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" pt-10 w-[70%] lg:w-1/2 flex flex-col  justify-center-center  space-y-10">


        <div className='w-full '>
          <input placeholder={'כתובת מייל *'} type="text" className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${errors.email && "border-red-600"}`} {...register('email',
            lemailValidator
          )} />
          {errors.email && <p role={"alert"} className="text-red-600 capitalize">{errors.email?.message}</p>}
        </div>
        <div className="w-full">
          <input type={"password"} placeholder={'סיסמא *'} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${errors.email && "border-red-600"} `} {...register("password",
            lpasswordValidator)} />
          {errors.password && <p role={"alert"} className="text-red-600 capitalize">{errors.password?.message}</p>}
        </div>
        <div className="pt-5 text-right">
          <Link to={'/forgot'} className='capitalize text-base font-bold underline '  >...שחכתי סיסמא</Link>
          <br />
          <Link to={'/policy'} className='capitalize text-base '>עייני ב-<span className="underline">תנאי השימוש </span></Link>
        </div>

        <MainButtons custom={'h-12 rounded-[50px] w-[70%] lg:w-1/2 self-center text-black text-lg'}  >התחברי</MainButtons>
      </form>

    </div>
  )
}
