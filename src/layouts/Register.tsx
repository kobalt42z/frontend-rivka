import React from 'react'
import { Link } from 'react-router-dom'
import MainButtons from '../components/buttons/MainButtons'
import LoginInput from '../components/misc/LoginInput'
import SelectLanguage from '../components/misc/SelectLanguage'
const Register = () => {
    return (
        <div className='container flex flex-col items-center min-h-[90vh] pt-10 mb-10 '>
            {/* registerbtn  */}
            <div className="flex uppercase text-xs justify-around w-[80%] py-10 text-black">
                <h2 className='font-bold '>Already registered?</h2>
                <Link to={'/login'}><h2 className='font-semibold underline'>login </h2></Link>
            </div>
            <h2 className="capitalize  text-xs w-[65%] text-center">This space allows you to manage your personal information,
                e-Boutique orders, and news updates</h2>
            <form className="w-[70%] flex flex-col  justify-center-center pt-10 space-y-10">
                <LoginInput placeholder={'First Name *'} type="text" />
                <LoginInput placeholder={'Last Name *'} type="text" />

                <div className='w-full'>
                    <p className='pl-2 text-xs '>Date of birth:</p>
                    <LoginInput type="date" InjectClass={'w-full'} />
                </div>
                <LoginInput placeholder={'Email addres *'} type="email" />
                <LoginInput placeholder={'Password *'} type="password" />
                <LoginInput placeholder={'Confirm Password *'} type="password" />
                <div className='w-full'>
                    <p className='pl-2 text-xs '>Preferred Language</p>
                    <SelectLanguage />
                </div>

                
                <div className="pt-5 space-y-5 flex flex-col">
                    <Link to={'/forgotPassword'} className='capitalize text-sm underline'  >Forgot your password ?</Link>

                    <Link to={'/policy'} className='capitalize text-sm '>Read the <span className="underline"> Privacy Policy </span> for further information</Link>

                    <div className=" flex space-x-3"><input type="checkbox" />
                        <p className='text-sm'>I would also like to receive marketing information about Rivka Nakache’s products or services. We may send you this information using email, text, telephone, or post. We may also use your information to deliver personalized messages or advertising on social media or other digital platforms. You can ask us to stop marketing at any time.</p>
                    </div>
                </div>

                <MainButtons custom={'h-10 rounded-[50px] w-[70%] self-center text-black font-semibold'} >Create  accont</MainButtons>
            </form>

        </div>
    )
}

export default Register