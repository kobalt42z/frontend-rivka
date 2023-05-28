import { SubmitHandler, useForm } from "react-hook-form";
import { useJwtAuthMutation, useLoginMutation } from "../../../features/API/Auth.Api";
import { LoginInputs } from "../../../interfaces";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginCredentials from "../../../interfaces/auth.interface";
import { AWS_ACCESS_KEYWORD, TOKEN_KEYWORD } from "../../../constant";
import { setPayload, setToken } from "../../../features/Slices/Payload.slice";
import jwt_decode from 'jwt-decode'
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import LoadingScreen from "../../../components/Loading/LoadingScreen";
import ErrorsAlerter from "../../../components/errors/ErrorsAlerter";
import { lemailValidator, lpasswordValidator } from "./Validators/";
import MainButtons from "../../../components/buttons/MainButtons";
import { Icon } from "@iconify/react";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from "../../../features/Slices/user.slice";

import avaterImg from '../../../assets/avatar.svg'

interface props {
  registerUrl: string;
  forgotUrl: string;
}

export const LoginPage: React.FC<props> = ({ forgotUrl, registerUrl }) => {
  const [login, { isLoading, isError, isSuccess, error, data: userData }] = useLoginMutation()
  const [status, setStatus] = useState(0)
  const [Authing, setAuthing] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const auth = getAuth()

  const signInWithGoogle = async () => {
    try {
      setAuthing(true);
      const resp = await signInWithPopup(auth, new GoogleAuthProvider())
      dispatch(setUser({
        uid: resp.user.uid,
        displayName: resp.user.displayName ?? 'ללא שם ',
        emailOrNumber: resp.user.email ?? resp.user.phoneNumber,
        photoURL: resp.user.photoURL ?? 'url to basic avatar !'
      }))
      console.log("fb:", resp);
      navigate('/');
    } catch (error) {
      setAuthing(false);
      console.log(error);
    }
  }

  const signInWithFacebook = async () => {
    try {
      setAuthing(true);
      const resp = await signInWithPopup(auth, new FacebookAuthProvider())
      dispatch(setUser({
        uid: resp.user.uid,
        displayName: resp.user.displayName ?? 'ללא שם ',
        emailOrNumber: resp.user.email ?? resp.user.phoneNumber,
        photoURL: resp.user.photoURL ?? 'url to basic avatar !'
      }))
      console.log("fb:", resp);

      navigate('/');
    } catch (error) {
      setAuthing(false);
      console.log(error);
    }
  }
  const classicSignIn = async (email: string, password: string) => {
    try {
      setAuthing(true);
      const resp = await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
      setAuthing(true);
    }
  }

  const onSubmit: SubmitHandler<LoginInputs> = async (data: LoginCredentials) => {
    try {
      console.log("wowow");


      navigate(-1)
    } catch (err: FetchBaseQueryError | any) {
      setStatus(err.status);
      throw err;
    }
  }






  return (Authing ? <LoadingScreen /> :
    <div className=' flex  flex-col items-center  min-h-[75vh] pt-10 red '>
      <ErrorsAlerter status={status} />
      <h2 className='font-bold text-lg'>: התחברות</h2>
      <div className="flex uppercase text-base justify-around  w-[80%] py-10 text-black">
        <Link to={registerUrl}><h2 className='font-semibold underline text-[14px]'>! הירשמי עכשיו </h2></Link>
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
          <Link to={forgotUrl} className='capitalize text-base font-bold underline '  >...שחכתי סיסמא</Link>
          <br />
          <Link to={'/policy'} className='capitalize text-base  '>עייני ב-<span className="underline">תנאי השימוש </span></Link>
        </div>
        <MainButtons submit disabled={Authing} custom={'  disabled:opacity-70  h-12 w-[250px] lg:w-1/2 self-center text-black text-lg'}  >התחברי</MainButtons>

      </form>
      <div className=" flex flex-col justify-center space-y-2 pt-2">
        <MainButtons disabled={Authing} ClickAction={signInWithGoogle} custom={' disabled:opacity-70  flex items-center h-12 justify-evenly w-[250px] lg:w-1/2 self-center text-black text-lg'}  >
          <Icon icon="logos:google" /> התחברי באמצעות </MainButtons>
        <MainButtons disabled={Authing} ClickAction={signInWithFacebook} custom={'disabled:opacity-70  flex items-center h-12 justify-evenly h-12 w-[250px] lg:w-1/2 self-center text-black text-lg'}  >
          <Icon icon="devicon:facebook" /> התחברי באמצעות </MainButtons>
      </div>
    </div>
  )
}
