import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import MainButtons from '../../components/buttons/MainButtons'
import LoginInput from '../../components/misc/LoginInput'
import SelectLanguage from '../../components/misc/SelectLanguage'
import { RegisterInpute, user } from '../../interfaces'
const Register = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterInpute>();

    return (
        <div className='  container flex flex-col items-center min-h-[90vh] pt-10 mb-10 '>
            {/* registerbtn  */}
            <div className="flex uppercase text-xs justify-around w-[80%] py-10 text-black">
                <h2 className='font-bold text-base'>כבר יש לך חשבון?</h2>
                <Link to={'/login'}><h2 className='font-semibold underline text-base'>התחברי </h2></Link>
            </div>
            <h2 className="capitalize   text-xs w-[65%] text-center">מידע זה ישמש להזמנות עתידיות ומעקב אחר הזמנות ושרותים </h2>
            <form className="  w-[70%] flex flex-col  justify-center-center pt-10 space-y-10">


                <input type={"text"} placeholder={"שם פרטי *"} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 `}
                    {...register('firstName', {
                        required: {
                            value: true,
                            message: 'נדרש שם משתמש תקין'
                        },
                        maxLength: {
                            value: 10,
                            message: 'יותר מדי תווים בשדה זה'
                        },
                        pattern: {
                            value: /[a-zA-Z]/,
                            message: "שם מכיל אותיות בלבד"
                        }
                    })}
                />

                <input type={"text"} placeholder={"שם משפחה *"} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 `}
                    {...register('lastName', {
                        required: {
                            value: true,
                            message: 'נדרש שם משתמש תקין'
                        },
                        maxLength: {
                            value: 10,
                            message: 'יותר מדי תווים בשדה זה'
                        },
                        pattern: {
                            value: /[a-zA-Z]/,
                            message: "שם מכיל אותיות בלבד"
                        }
                    })}
                />


                <div className='w-full'>
                    <p className='pl-2 text-sm '>תאריך לידה:</p>
                    <input type={"Date"} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 w-full `} 
                    />
                </div>
                <input type={"text"} placeholder={" כתובת מייל * "} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 `} />
                <input type={"text"} placeholder={"ססמה * "} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 `} />
                <input type={"text"} placeholder={"ווידוא ססמה * "} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 `} />

                <div className='w-full'>
                    <p className='pl-2 text-sm '>שפה מועדפת</p>
                    <SelectLanguage />
                </div>


                <div className="pt-5 space-y-5 flex flex-col">


                    <Link to={'/policy'} className='capitalize text-sm '>עייני ב- <span className="underline"> תנאי השירות</span> למידע נוסף</Link>

                    <div className=" flex  space-x-3">
                        <input type="checkbox" className='ml-2' />
                        <p className='text-sm'>אני מעוניינת בקבלת עדכונים על מבצעים והטבות שלנו למייל </p>
                    </div>
                </div>

                <MainButtons custom={'h-10 rounded-[50px] w-[70%] self-center text-black font-semibold'} >צור חשבון</MainButtons>
            </form>

        </div>
    )
}

export default Register