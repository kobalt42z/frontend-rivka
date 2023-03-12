import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import MainButtons from '../../components/buttons/MainButtons'
import LoginInput from '../../components/misc/LoginInput'

export const Forgot = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<{ email: string }>();
    const onsubmit = () => {
        // forgot password form logic here !
    };
    return (
        <div className="container flex justify-center items-center h-[75vh] ">
            <div className=' flex flex-col items-center  pt-10  space-y-5'>
                {/* registerbtn  */}
                <h2 className=" font-bold text-lg">Recover your password</h2>
                <p className="w-[70%]">
                    Please Provide your email address begin the account recovery process.
                </p>
                <form onSubmit={handleSubmit(onsubmit)} className="w-[70%] flex flex-col  justify-center-center pt-5 space-y-10">
                    <div>     <input placeholder={'כתובת מייל *'} type="text" className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${errors.email && "border-red-600"}`} {...register('email',
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
                        {errors.email && <p role={"alert"} className="text-red-600 capitalize">{errors.email?.message}</p>}</div>
                    <div className="">
                        <Link to={'/login'} className='capitalize underline text-base'   >חזרה לדף ההתחברות </Link>
                        <br />
                        <Link to={'/policy'} className='capitalize text-xs '>קראי עוד <span className="underline"> Privacy Policy </span> for further information</Link>
                    </div>

                    <MainButtons custom={'h-12 rounded-[50px] w-[70%] self-center text-black'} >שחזר ססמה </MainButtons>
                </form>

            </div>
        </div>
    )
}
