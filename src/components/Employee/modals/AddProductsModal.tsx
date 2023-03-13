import React, { useEffect, useState } from 'react'
import DarkVail from '../../special/DarkVail'
import { IF } from '../../special/if'
import Stepper3 from '../../Stepper/Stepper3'
import { SubmitHandler, useForm } from 'react-hook-form';

import { ArrowLeftIcon, ArrowRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Product } from '../../../interfaces';

import Select, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';


const AddProductsModal = ({ closeAddProduct }: { closeAddProduct: () => void }) => {


    type descriptionInput = {
        name: string,
        description: string,

    }
    type Inputs = {
        brand: string,
        price_ils: number,
        reduction_p: number,
        supply: number,
        categoryIds: string,
    };


    const language = ["עברית", "צרפתית", "אנגלית", ""]
    const categorys = [{ value: 'nails', label: "Nails" }, { value: 'body', label: "Body" }, { value: 'foot', label: "Feet" }]
    const [currentStep, setCurrentStep] = useState(0);
    let stepData: descriptionInput[] = [];

    //? react hook form : 
    const { setValue, register, handleSubmit, watch, formState: { errors, isValid } } = useForm<Product>();

    const animatedComponents = makeAnimated();



    const onSubmit: SubmitHandler<Product> = data => {
        console.log(data);
        closeAddProduct();
    };

    const [userChoice, setUserChoice] = useState<MultiValue<{
        value: string;
        label: string;
    }> | null>(null);


    return (
        <>
            { }
            <DarkVail>
                <div id="defaultModal" tabIndex={-1} aria-hidden="true" className=" flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        {/* Modal content */}
                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            {/*  Modal header */}

                            <div className="flex  justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">

                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeAddProduct} >
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    הוספת מוצר לחנות
                                </h3>
                            </div>

                            <div className="pb-5 ">
                                <Stepper3 currentStep={currentStep} finish={isValid} />
                            </div>


                            {/* Modal body */}
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="space-y-5">
                                    {/* he section */}
                                    <IF condition={currentStep >= 0} >
                                        <section className={currentStep == 0 ? 'block' : "hidden"}>
                                            <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">שם מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        עברית
                                                    </span>
                                                </label>
                                                <input type="text" id="name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.name && 'border-red-500'} `}
                                                    placeholder="שם מוצר בעברית"
                                                    {...register('name', {
                                                        required: {
                                                            value: true,
                                                            message: 'נדרש שם מוצר אחד לפחות'
                                                        },
                                                        maxLength: {
                                                            value: 30,
                                                            message: ' נדרש שם מוצר עד 30 תווים '
                                                        }
                                                    })}
                                                />
                                                {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="ItemDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">תאור מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        בעברית
                                                    </span>
                                                </label>
                                                <textarea id="ItemDescription" rows={4} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.description && 'border-red-500'} `} placeholder="תאור מוצר בעברית עד 100 תווים"
                                                    {...register('description', {
                                                        required: {
                                                            value: true,
                                                            message: 'נדרש תאור מוצר בעברית לפחות '
                                                        },
                                                        maxLength: {
                                                            value: 100,
                                                            message: 'תיאור מוצר עד 100 תווים'
                                                        }

                                                    })}
                                                ></textarea>
                                                {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                                            </div>
                                        </section>
                                    </IF>


                                    {/* fr section */}
                                    <IF condition={currentStep >= 1} >
                                        <section className={currentStep == 1 ? 'block' : "hidden"}>
                                            <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">שם מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        צרפתית
                                                    </span>
                                                </label>
                                                <input type="text" id="name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.translated?.fr?.name && 'border-red-500'} `}
                                                    {...register('translated.fr.name', {
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'שם המוצר עד 30 תווים'
                                                        }
                                                    })}
                                                />
                                                {errors.translated?.fr?.name && <p className='text-red-500'>{errors.translated?.fr?.name?.message}</p>}
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="ItemDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">תאור מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        צרפתית
                                                    </span>
                                                </label>
                                                <textarea id="ItemDescription" rows={4} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.translated?.fr?.description && 'border-red-500'} `} placeholder="Write product ItemDescription here"
                                                    {...register('translated.fr.description', {
                                                        maxLength: {
                                                            value: 100,
                                                            message: 'תיאור מוצר עד 100 תווים'
                                                        }
                                                    })}
                                                ></textarea>
                                                {errors.translated?.fr?.description && <p className='text-red-500'>{errors.translated?.fr?.description?.message}</p>}
                                            </div>
                                        </section>
                                    </IF>

                                    {/* en section !need to add on */}
                                    <IF condition={currentStep >= 2} >
                                        <section className={currentStep == 2 ? 'block' : "hidden"}>
                                            <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">שם מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        אנגלית
                                                    </span>
                                                </label>
                                                <input type="text" id="name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.translated?.en?.name && 'border-red-500'} `}
                                                    placeholder={"product name in english"}
                                                    {...register('translated.en.name', {
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'שם המוצר עד 30 תווים'
                                                        }
                                                    })}
                                                />
                                                {errors.translated?.en?.name && <p className='text-red-500'>{errors.translated?.en?.name?.message}</p>}
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="ItemDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">תאור מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        אנגלית
                                                    </span>
                                                </label>
                                                <textarea id="ItemDescription" rows={4} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.translated?.en?.description && 'border-red-500'} `}
                                                    placeholder="Write product ItemDescription here"
                                                    {...register('translated.en.description', {
                                                        maxLength: {
                                                            value: 100,
                                                            message: 'תיאור מוצר עד 100 תווים'
                                                        }
                                                    })}
                                                ></textarea>
                                                {errors.translated?.en?.description && <p className='text-red-500'>{errors.translated?.en?.description?.message}</p>}
                                            </div>
                                        </section>
                                    </IF>

                                    <div className='pb-5 flex justify-between'>

                                        <button type="button" className="w-[90px] flex items-center justify-between text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                            onClick={() => {
                                                if (currentStep > 0)
                                                    setCurrentStep(currentStep - 1)
                                            }}
                                        ><ArrowRightIcon className='w-5' />prev</button>

                                        <button type="button" className={`${currentStep == 2 && "hidden"} w-[90px] flex items-center justify-between text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                                            onClick={() => {
                                                if (currentStep < 2)
                                                    setCurrentStep(currentStep + 1)
                                            }}
                                        >next<ArrowLeftIcon className='w-5' /> </button>
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">


                                    <div >
                                        <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">חברה</label>
                                        <input type="text" id="brand" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.brand && 'border-red-500'} `} placeholder="RivkaNakach"
                                            {...register('brand', {
                                                required: {
                                                    value: true,
                                                    message: 'נא לספק שם-חברה תקינה'
                                                },
                                                maxLength: {
                                                    value: 20,
                                                    message: 'שם-חברה אינו עולה על 20 תווים '
                                                }

                                            })}
                                        />
                                        {errors.brand && <p className='text-red-500'>{errors.brand?.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מחיר - ₪</label>
                                        <input type="number" id="price" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.price_ils && 'border-red-500'} `} placeholder="₪500"
                                            {...register('price_ils', {
                                                required: {
                                                    value: true,
                                                    message: 'נא לספק מחיר תקין '
                                                },
                                                max: {
                                                    value: 1000000,
                                                    message: "מחיר לא תקין"
                                                },
                                                valueAsNumber: true,

                                            })}
                                        />
                                        {errors.price_ils && <p className='text-red-500'>{errors.price_ils?.message}</p>}
                                    </div>

                                    <div >
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">קטגוריה</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={categorys[0]}
                                            isMulti
                                            options={categorys}
                                            onChange={(choice) => setValue('categorys', choice.map(item => item.value))}
                                        />
                                    </div >
                                    <div className="">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">הנחה - %</label>
                                        <input type="number" id="price" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.reduction_p && 'border-red-500'} `} placeholder="%60"
                                            {...register('reduction_p', {

                                                max: {
                                                    value: 100,
                                                    message: " הנחה באוחוזים בלבד (0-100)"
                                                },
                                                valueAsNumber: true,

                                            })}
                                        />
                                        {errors.reduction_p && <p className='text-red-500'>{errors.reduction_p?.message}</p>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">כמות</label>
                                        <input type="number" id="price" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.supply && 'border-red-500'} `} placeholder="54"
                                            {...register('supply', {
                                                required: {
                                                    value: true,
                                                    message: 'יש להזין כמות מוצרים תקינה'
                                                },
                                                max: {
                                                    value: 100000,
                                                    message: "הכמות שהוכנסה אינה תקינה"
                                                },
                                                valueAsNumber: true,

                                            })}
                                        />
                                        {errors.supply && <p className='text-red-500'>{errors.supply?.message}</p>}
                                    </div>

                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-black rounded-lg bg-[var(--main-btn-color)] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  focus:outline-none ">

                                        הוספת מוצר
                                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DarkVail>
        </>
    )
}

export default AddProductsModal