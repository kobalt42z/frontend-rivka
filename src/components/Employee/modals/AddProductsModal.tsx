import React, { useEffect, useState } from 'react'
import DarkVail from '../../special/DarkVail'
import { IF } from '../../special/if'
import Stepper3 from '../../Stepper/Stepper3'
import { SubmitHandler, useForm } from 'react-hook-form';

import { ArrowLeftIcon, ArrowRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Product } from '../../../interfaces';
import { Dropdown } from 'flowbite-react';



const AddProductsModal = () => {


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
    const [currentStep, setCurrentStep] = useState(1);
    let stepData: descriptionInput[] = [];

    //? react hook form : 
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<Product>();

    const onSubmitStep: SubmitHandler<descriptionInput> = data => {
        stepData[currentStep] = data;
    }

    /*const onSubmit: SubmitHandler<Inputs> = data => {
        const finalShape: Product = {
            name: stepData[0].name,
            description: stepData[0].description,
            price_ils: data.price_ils,
            reduction_p: data.reduction_p,
            supply: data.supply,
            translated: {
                fr: stepData[1] ? stepData[1] : undefined,
                en: stepData[2] ? stepData[2] : undefined,
            }
        }

        console.log(finalShape);

    }*/

    const onSubmit: SubmitHandler<Product> = data => {
        console.log(data);

    };

    useEffect(() => {
        isValid && setCurrentStep(currentStep + 1)
    }, [isValid]);

    // const [itemDescriptions, setItemDescriptions] = useState<[]|null>(null)
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

                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
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
                                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product "
                                                    {...register('name', {
                                                        required: {
                                                            value: true,
                                                            message: 'נדרש תאור מוצר אחד לפחות'
                                                        },
                                                        maxLength: {
                                                            value: 30,
                                                            message: ' נדרש שם מוצר עד 30 תווים '
                                                        }
                                                    })}
                                                />
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="ItemDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">תאור מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        בעברית
                                                    </span>
                                                </label>
                                                <textarea id="ItemDescription" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product ItemDescription here"
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
                                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name"
                                                    {...register('translated.fr.name', {
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'שם המוצר עד 30 תווים'
                                                        }
                                                    })}
                                                />
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="ItemDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">תאור מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        צרפתית
                                                    </span>
                                                </label>
                                                <textarea id="ItemDescription" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product ItemDescription here"
                                                    {...register('translated.fr.description', {
                                                        maxLength: {
                                                            value: 100,
                                                            message: 'תיאור מוצר עד 100 תווים'
                                                        }
                                                    })}
                                                ></textarea>
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
                                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name"
                                                    {...register('translated.en.name', {
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'שם המוצר עד 30 תווים'
                                                        }
                                                    })}
                                                />
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="ItemDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">תאור מוצר
                                                    <span className='text-blue-500 px-1'>
                                                        אנגלית
                                                    </span>
                                                </label>
                                                <textarea id="ItemDescription" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product ItemDescription here"
                                                    {...register('translated.en.description', {
                                                        maxLength: {
                                                            value: 100,
                                                            message: 'תיאור מוצר עד 100 תווים'
                                                        }
                                                    })}
                                                ></textarea>
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
                                        <input type="text" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand"
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
                                    </div>

                                    <div>
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מחיר</label>
                                        <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999"
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
                                    </div>

                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">קטגוריה</label>
                                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Choose a country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>



                                    </div>


                                </div>
                                <button type="submit" className="text-black inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    Add new product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </DarkVail>
        </>
    )
}

export default AddProductsModal