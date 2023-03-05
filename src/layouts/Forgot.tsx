import React from 'react'
import { Link } from 'react-router-dom'
import MainButtons from '../components/buttons/MainButtons'
import LoginInput from '../components/misc/LoginInput'

export const Forgot = () => {
    return (
        <div className="container flex justify-center items-center h-[75vh] ">
            <div className=' flex flex-col items-center  pt-10  space-y-5'>
                {/* registerbtn  */}
                <h2 className=" font-bold text-lg">Recover your password</h2>
                <p className="w-[70%]">
                    Please Provide your email address begin the account recovery process.
                </p>
                <form className="w-[70%] flex flex-col  justify-center-center pt-5 space-y-10">
                    <LoginInput placeholder={'Email *'} type="text" />
                    <div className="">
                        <Link to={'/login'} className='capitalize text-sm underline'  >back to login</Link>
                        <br />
                        <Link to={'/policy'} className='capitalize text-xs '>Read the <span className="underline"> Privacy Policy </span> for further information</Link>
                    </div>

                    <MainButtons custom={'h-12 rounded-[50px] w-[70%] self-center text-black'} >recover password</MainButtons>
                </form>

            </div>
        </div>
    )
}
