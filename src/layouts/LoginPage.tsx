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
import { InformationCircleIcon } from '@heroicons/react/24/outline'

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
  const [networkERROR, setNetworkError] = useState(false)
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
        if (error.code === "ERR_NETWORK") setNetworkError(true);

      }
      throw error;
    }
  }

  useEffect(() => {
  }, [])



  return (
    <div className='container flex  flex-col items-center min-h-[75vh] pt-10 red '>
      {showError &&
        <Alert
          color="failure"
          icon={InformationCircleIcon}
        >
          <span>
            <span className="font-medium ">
              {" "} שגיאה !{" "}
            </span>
            {'  '}שם המשתמש או הססמה אינם נכונים.{" "}
          </span>
        </Alert>}
      {networkERROR &&
        <Alert
          color="failure"
          icon={InformationCircleIcon}
        >
          <span>
            <span className="font-medium">
              שגיאה!
            </span>
            {' '}השרת אינו זמין כעת אנא נסו מאוחר יותר{" "}
          </span>
        </Alert>}
      {/* registerbtn  */}
      <div className="flex uppercase text-base justify-around w-[80%] py-10 text-black">
        <h2 className='font-bold text-base '>איו לך חשבון ?</h2>
        <Link to={'/register'}><h2 className='font-semibold underline text-[14px]'>הירשמי עכשיו !</h2></Link>
      </div>
      <h2 className='font-bold text-lg'>התחברות :</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" pt-10 w-[70%] flex flex-col  justify-center-center  space-y-10">


        <div className='w-full'>
          <input placeholder={'כתובת מייל *'} type="text" className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${errors.email && "border-red-600"}`} {...register('email',
            {
              required: {
                value: true,
                message: 'דרושה כתובת מייל תקינה '
              },
              maxLength: {
                value: 50,
                message: " יותר מדי תווים בשדה זה "
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "כתובת המייל אינה תקינה"
              },
            }
          )} />
          {errors.email && <p role={"alert"} className="text-red-600 capitalize">{errors.email?.message}</p>}
        </div>
        <div className="w-full">
          <input type={"password"} placeholder={'ססמה *'} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${errors.email && "border-red-600"} `} {...register("password",
            {
              required: {
                value: true,
                message: "דרושה ססמא תקינה"
              },
              minLength: {
                value: 8,
                message: "ססמה באורך 8 תווים לפחות "
              },
              maxLength: {
                value: 16,
                message: "ססמה עד אורך 16 תווים בלבד! "
              }
            })} />
          {errors.password && <p role={"alert"} className="text-red-600 capitalize">{errors.password?.message}</p>}
        </div>
        <div className="pt-5">
          <Link to={'/forgot'} className='capitalize text-base font-bold underline '  >שחכתי ססמה...</Link>
          <br />
          <Link to={'/policy'} className='capitalize text-base '>עייני ב-<span className="underline">תנאי השימוש </span></Link>
        </div>

        <MainButtons custom={'h-12 rounded-[50px] w-[70%] self-center text-black text-lg'}  >התחברי</MainButtons>
      </form>

    </div>
  )
}
