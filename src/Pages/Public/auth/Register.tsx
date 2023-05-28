import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterInpute } from "../../../interfaces";
import { useState } from "react";
import { useSignUpMutation } from "../../../features/API/Auth.Api";
import { Link, useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import ErrorsAlerter from "../../../components/errors/ErrorsAlerter";
import { acceptTermsValidator, apartment, city, emailValidator, entrance, fullName, phoneValidator, postalCode, street, streetNumber } from "./Validators";
import FormError from "../../../components/misc/formError";
import SelectLanguage from "../../../components/misc/SelectLanguage";
import MainButtons from "../../../components/buttons/MainButtons";
import ClassicHr from "../../../components/HR/ClassicHr";
import { getAuth } from "firebase/auth";

// * complete you registeration page *

interface props {
    loginUrl: string;

}
const Register: React.FC<props> = ({ loginUrl }) => {

    const auth = getAuth();
    const { currentUser } = auth
    const { register, setError, handleSubmit, clearErrors, watch, setValue, formState: { errors } } = useForm<RegisterInpute>({
        defaultValues: {
            fullName: currentUser?.displayName ?? "",
            email: currentUser?.email ?? "",
            phone: currentUser?.phoneNumber ?? "",
        }
    });
    const [signUp, { isError, isLoading }] = useSignUpMutation()
    const [status, setStatus] = useState(0)
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<RegisterInpute> = async data => {
        console.log(data);

        try {

      
            delete data.acceptTerms
            data.phone = "+972" + data.phone;
            if (!data.selectedLanguage) data.selectedLanguage = "he";
           

        } catch (error: FetchBaseQueryError | any) {
            setStatus(error.status)
            console.log(error);
            throw error

        }

    };




    return (
        <div dir="rtl" className='   flex flex-col items-center min-h-[90vh] pt-10 mb-10 '>
            <ErrorsAlerter status={500} />

            <h1 className="text-center">השלמת פרטי משתמש</h1>
            <h2 className="capitalize   text-xs w-[65%] text-center">מידע זה ישמש למשלוחים וזימון תורים   </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="  w-[70%] flex flex-col  justify-center-center pt-10 space-y-10
            lg:w-1/2
            ">


                <div className="text-right">
                    <label htmlFor="" className="font-semibold">שם מלא</label>:
                    <input type={"text"} placeholder={"שם מלא "} className={` w-full bg-transparent border-0  border-b-2 focus:outline-none focus:border-t-0 
                    
                    ${errors.fullName && 'border-red-500'}
                    `}
                        {...register('fullName', fullName)}
                    />
                    <FormError error={errors.fullName} />
                </div>


                <div>
                    <label htmlFor="" className="font-semibold">טלפון</label>:
                    <div dir="ltr" className='flex items-center'>
                        <span className='border-b-2 border-gray-500 py-2 font-bold'>+972-</span>
                        <input type={"tel"} placeholder={" טלפון *"} className={`text-start w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0  px-0
                    ${errors.phone && 'border-red-500'}
                    `}

                            {...register('phone', phoneValidator)}
                        />
                    </div>
                    <FormError error={errors.phone} />
                </div>


                <div className='w-full'>
                    <label htmlFor="" className="font-semibold">תאריך</label>:
                    <input pattern="\d{4}-\d{2}-\d{2}" type={"date"} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 w-full ${errors.dateOfBirth && 'border-red-500'} `
                    }
                        {...register('dateOfBirth', {
                            valueAsDate: true,
                            required: {
                                value: true,
                                message: "נדרש תאריך לידה "
                            },
                            onBlur: (e) => {
                                let matchToRegex = e.target.value.match(/^([1-2]{1})([0|9]{1})([0-9]{1})([0-9]{1})-([0-9]{2})-([0-9]{2})$/gm)
                                if (!matchToRegex) setError('dateOfBirth', {
                                    type: "custom", message: "תאריךך לידה אינו תקין"
                                })
                                else {
                                    clearErrors('dateOfBirth')
                                    return matchToRegex[0]
                                }
                            }
                        })}

                    />
                    <FormError error={errors.dateOfBirth} />
                </div>
                <div>
                    <label htmlFor="" className="font-semibold">מייל</label>:
                    <input type={"text"} placeholder={" כתובת מייל  "} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.email && 'border-red-500'}
                    `}
                        {...register('email', emailValidator)}
                    />
                    <FormError error={errors.email} />
                </div>

                <div className="space-y-2 w-full ">
                    <h3 className=" text-base font font-semibold text-center text-shadow">פרטים למשלוח </h3>
                    <ClassicHr />
                </div>
                <div className="space-y-5">
                    <label htmlFor="" className="font-semibold m-0">כתובת</label>:
                    <div>
                        <input type={"text"} placeholder={"רחוב   "} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.street && 'border-red-500'}
                    `}
                            {...register('street', street)}
                        />
                        <FormError error={errors.street} />
                    </div>
                    <div className="grid grid-cols-3  gap-4">
                        <input type={"text"} placeholder={"מס בית"} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.stNum && 'border-red-500'}
                    `}
                            {...register('stNum', streetNumber)}
                        />

                        <input type={"text"} placeholder={"כניסה"} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.entrance && 'border-red-500'}
                    `}
                            {...register('entrance', entrance)}
                        />
                        <input type={"text"} placeholder={"דירה"} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.apartment && 'border-red-500'}
                    `}
                            {...register('apartment', apartment)}
                        />
                        <div className="col-span-3">
                            <FormError error={errors.stNum} />
                            <FormError error={errors.entrance} />
                            <FormError error={errors.apartment} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2  gap-4">
                        <input type={"text"} placeholder={"עיר"} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.city && 'border-red-500'}
                    `}
                            {...register('city', city)}
                        />

                        <input type={"text"} placeholder={"מיקוד"} className={`w-full bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 
                    ${errors.postalCode && 'border-red-500'}
                    `}
                            {...register('postalCode', postalCode)}
                        />
                        <FormError error={errors.city} />
                        <FormError error={errors.postalCode} />

                    </div>
                </div>






                {/* <div className='w-full text-right'>
                    <p className='pl-2 text-sm  '>שפה מועדפת</p>
                    <SelectLanguage onChange={(selected) => setValue('selectedLanguage', selected)} />
                </div> */}


                <div dir="ltr" className="pt-5 space-y-5 flex flex-col items-end">


                    <Link to={'/policy'} className='capitalize text-sm '>עייני ב- <span className="underline"> תנאי השירות</span> למידע נוסף</Link>

                    <div className=" flex  ">
                        <p className='text-sm text-right pr-2'>אני מעוניינת בקבלת עדכונים על מבצעים והטבות שלנו למייל </p>
                        <input type="checkbox" className='' />
                    </div>
                    <div className=" flex  space-x-3">
                        <p className='text-sm'>אני מסכים/ה ל-
                            <Link to={'/terms'}>
                                <span className='underline'>תנאי השירות</span>
                            </Link>
                        </p>
                        <input type="checkbox" className='ml-2'
                            {...register('acceptTerms', acceptTermsValidator)}
                        />
                    </div>
                    <FormError error={errors.acceptTerms} />
                </div>

                <MainButtons isLoading={isLoading} custom={'h-10 rounded-[50px] w-[70%] self-center text-black font-semibold lg:w-1/2 '} >צור חשבון</MainButtons>
            </form>

        </div>
    )
}

export default Register