import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { Alert } from 'flowbite-react'
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import MainButtons from '../../components/buttons/MainButtons'
import ErrorsAlerter from '../../components/errors/ErrorsAlerter'
import FormError from '../../components/misc/formError'
import LoginInput from '../../components/misc/LoginInput'
import SelectLanguage from '../../components/misc/SelectLanguage'
import { useSignUpMutation } from '../../features/API/Auth.Api'
import { languages, RegisterInpute, user } from '../../interfaces'
const Register = () => {


    const { register, setError, handleSubmit,clearErrors, watch, setValue, formState: { errors } } = useForm<RegisterInpute>();
    const [signUp, { isError, isLoading }] = useSignUpMutation()
    const [status, setStatus] = useState(0)
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<RegisterInpute> = async data => {
        console.log(data);
       
        try {

            delete data.Cpassword
            delete data.acceptTerms
            data.phone = "+972" + data.phone;
            if (!data.selectedLanguage) data.selectedLanguage = "he";
            const response = await signUp(data).unwrap()
            navigate('/login')

        } catch (error: FetchBaseQueryError | any) {
            setStatus(error.status)
            console.log(error);
            throw error

        }

    };

    


    return (
        <div className='  container flex flex-col items-center min-h-[90vh] pt-10 mb-10 '>
            <ErrorsAlerter status={status} />

            {/* registerbtn  */}
            {/* registerbtn  */}
            <div className="flex uppercase text-xs justify-around w-[80%] py-10 text-black">
                <h2 className='font-bold text-base'>כבר יש לך חשבון?</h2>
                <Link to={'/login'}><h2 className='font-semibold underline text-base'>התחברי </h2></Link>
            </div>
            <h2 className="capitalize   text-xs w-[65%] text-center">מידע זה ישמש להזמנות עתידיות ומעקב אחר הזמנות ושרותים </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="  w-[70%] flex flex-col  justify-center-center pt-10 space-y-10">


                <div className="">
                    <input type={"text"} placeholder={"שם פרטי *"} className={` w-full bg-transparent border-0  border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.firstName && 'border-red-500'}
                    `}
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
                                value: /[a-zA-Zא-ת]/,
                                message: "שם מכיל אותיות בלבד"
                            }
                        })}
                    />
                    <FormError error={errors.firstName} />
                </div>

                <div>
                    <input type={"text"} placeholder={"שם משפחה *"} className={` w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.lastName && 'border-red-500'}
                    `}
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
                                value: /[a-zA-Zא-ת]/,
                                message: "שם מכיל אותיות בלבד"
                            }
                        })}
                    />
                    <FormError error={errors.lastName} />
                </div>
                <div>
                    <div className='flex flex-row-reverse items-center'>
                        <span className='border-b-2 border-gray-500 py-2 font-bold'>-972+</span>
                        <input type={"tel"} placeholder={" טלפון *"} className={`text-end w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0  px-0
                    ${errors.phone && 'border-red-500'}
                    `}

                            {...register('phone', {
                                required: {
                                    value: true,
                                    message: 'נדרש מספר טלפון תקין'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'יותר מדי תווים בשדה זה'
                                },
                                pattern: {
                                    value: /^([0-9]{10})$/gm,
                                    message: "מספר הטלפון אינו תקין"
                                },
                            })}
                        />
                    </div>
                    <FormError error={errors.phone} />
                </div>


                <div className='w-full'>
                    <p className='pl-2 text-sm '>תאריך לידה:</p>
                    <input pattern="\d{4}-\d{2}-\d{2}" type={"date"} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 w-full ${errors.dateOfBirth && 'border-red-500'} `
                    }
                        {...register('dateOfBirth', {
                            valueAsDate: true,
                            required: {
                                value: true,
                                message: "נדרש תאריך לידה "
                            },
                            // pattern: {
                            //     value: /^([1-2]{1})([0|9]{1})([0-9]{1})([0-9]{1})-([0-9]{2})-([0-9]{2})$/gm,
                            //     message: "התאריך שהוזן אינו תקין"
                            // },
                            onBlur:(e)=>{
                                let matchToRegex = e.target.value.match(/^([1-2]{1})([0|9]{1})([0-9]{1})([0-9]{1})-([0-9]{2})-([0-9]{2})$/gm)
                                if(!matchToRegex) setError('dateOfBirth',{
                                    type:"custom",message:"תאריךך לידה אינו תקין"
                                })
                                else{ 
                                    clearErrors('dateOfBirth')
                                    return matchToRegex[0]
                                }
                                
                            }

                        })}

                    />
                    <FormError error={errors.dateOfBirth} />
                </div>
                <div>
                    <input type={"text"} placeholder={" כתובת מייל * "} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.email && 'border-red-500'}
                    `}
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'נדרשת כתובת מייל'
                            },
                            maxLength: {
                                value: 50,
                                message: "יותר מדיי תווים בשדה זה"
                            },
                            pattern: {
                                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
                                message: "כתובת המייל אינה תקינה"
                            }
                        })}
                    />
                    <FormError error={errors.email} />
                </div>

                <div>
                    <input type={"password"} placeholder={"סיסמא * "} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.password && 'border-red-500'}
                    `}
                        {...register('password', {
                            required: {
                                value: true,
                                message: "נדרשת סיסמא תקינה"
                            },
                            maxLength: {
                                value: 16,
                                message: "סיסמא עד 16 תווים"
                            },
                            minLength: {
                                value: 8,
                                message: "סיסמא לפחות 8 תווים"
                            }
                        })}
                    />
                    <FormError error={errors.password} />
                </div>

                <div>
                    <input type={"password"} placeholder={"ווידוא סיסמא * "} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                     ${errors.Cpassword && 'border-red-500'}
                    `}
                        {...register('Cpassword', {
                            required: {
                                value: true,
                                message: 'שדה זה נדרש'
                            },
                            validate: {
                                pwdMatch: (value, formValue) =>
                                    value === formValue.password || "ססמה אינה תואמת "
                            }
                        })}
                    />
                    <FormError error={errors.Cpassword} />
                </div>

                <div className='w-full'>
                    <p className='pl-2 text-sm '>שפה מועדפת</p>
                    <SelectLanguage onChange={(selected) => setValue('selectedLanguage', selected)} />
                </div>


                <div className="pt-5 space-y-5 flex flex-col">


                    <Link to={'/policy'} className='capitalize text-sm '>עייני ב- <span className="underline"> תנאי השירות</span> למידע נוסף</Link>

                    <div className=" flex  space-x-3">
                        <input type="checkbox" className='ml-2' />
                        <p className='text-sm'>אני מעוניינת בקבלת עדכונים על מבצעים והטבות שלנו למייל </p>
                    </div>
                    <div className=" flex  space-x-3">
                        <input type="checkbox" className='ml-2'
                            {...register('acceptTerms', {
                                required: {
                                    value: true,
                                    message: "יש לאשר את תנאי השימוש"
                                }
                            })}
                        />
                        <p className='text-sm'>אני מסכים/ה ל- <Link to={'/terms'}><span className='underline'>תנאי השירות</span></Link></p>

                    </div>
                    <FormError error={errors.acceptTerms} />
                </div>

                <MainButtons isLoading={isLoading} custom={'h-10 rounded-[50px] w-[70%] self-center text-black font-semibold'} >צור חשבון</MainButtons>
            </form>

        </div>
    )
}

export default Register