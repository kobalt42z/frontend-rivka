import React, { useEffect, useState } from 'react'

import { IF } from '../../special/if'
import Stepper3 from '../../Stepper/Stepper3'
import { SubmitHandler, useForm } from 'react-hook-form';

import { ArrowLeftIcon, ArrowRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { EditValues, Product } from '../../../interfaces';

import Select, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { ClassicInput } from '../../inputs/ClassicInput';
import { TextArea } from '../../inputs/TextArea';
import { Xsvg } from '../../../assets/X';
import { DarkVail } from '../../special/DarkVail';
import { ColorResult, SketchPicker } from 'react-color';
import ColorPiker from '../../ColorPicker/ColorPiker';
import { Tooltip } from 'flowbite-react';

interface props {
    closeAddProduct: () => void
    editMode?: boolean
    editValues?: Product

}

const AddProductsModal = ({ closeAddProduct, editMode, editValues }: props) => {
    //? react hook form : 
    const { setValue, register, handleSubmit, watch, formState: { errors, isValid } } = useForm<Product>();

    //?react hook form submition : 
    const onSubmit: SubmitHandler<Product> = data => {
        console.log(data);
        closeAddProduct();
    };


    // ? for react-select library:
    const animatedComponents = makeAnimated();


    const language = ["עברית", "צרפתית", "אנגלית", ""]
    const categorys = [
        { value: 'nails', label: "Nails" },
        { value: 'body', label: "Body" },
        { value: 'foot', label: "Feet" }
    ]

    // ? stepper 0he 1fr 2en 
    const [currentStep, setCurrentStep] = useState(0);

    // ? user chioce category :
    const [userChoice, setUserChoice] = useState<MultiValue<{
        value: string;
        label: string;
    }> | null>(null);

    //? color chosen in color picker 
    const [colors, setColors] = useState<string[]>([])
    const [showPicker, setShowPicker] = useState(false);

    const addColor = (color: ColorResult) => {
        setColors([...colors, color.hex])

    }
    const removeColor = (index: number) => {
        const updatedColors = colors.filter(((item, i) => i !== index))
        setColors(updatedColors)
    }
    const openPiker = () => {
        setShowPicker(true);
    }
    const closePiker = () => {
        setShowPicker(false);
    }



    // // ? edit mode  !not finished yet!
    // editMode && useEffect(() => {
    //     setValue('brand', editValues?.brand);


    // }, [])

    useEffect(() => {
        console.log(colors);

    }, [colors]);


    return (
        <>
            { }
            <DarkVail>
                <div dir='rtl' id="defaultModal" tabIndex={-1} aria-hidden="true" className=" flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        {/* Modal content */}
                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            {/*  Modal header */}

                            <div className="flex  justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">

                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeAddProduct} >
                                    <Xsvg />
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

                                            <ClassicInput
                                                labelTitle='שם  מוצר'
                                                language='עברית '
                                                type='text'
                                                placeholder='שם מוצר בעברית'
                                                useFromsParams={register('name', {
                                                    required: {
                                                        value: true,
                                                        message: 'נדרש שם מוצר אחד לפחות'
                                                    },
                                                    maxLength: {
                                                        value: 30,
                                                        message: ' נדרש שם מוצר עד 30 תווים '
                                                    }
                                                })}
                                                errorMessage={errors.name?.message}
                                            />
                                            <TextArea
                                                placeholder="תאור מוצר בעברית עד 100 תווים"
                                                labelTitle='תאור מוצר'
                                                language='בעברית'
                                                useFromsParams={register('description', {
                                                    required: {
                                                        value: true,
                                                        message: 'נדרש תאור מוצר בעברית לפחות '
                                                    },
                                                    maxLength: {
                                                        value: 100,
                                                        message: 'תיאור מוצר עד 100 תווים'
                                                    }

                                                })}
                                                errorMessage={errors.description?.message}
                                            />
                                        </section>
                                    </IF>

                                    {/* fr section */}
                                    <IF condition={currentStep >= 1} >
                                        <section className={currentStep == 1 ? 'block' : "hidden"}>


                                            <ClassicInput
                                                labelTitle='שם מוצר'
                                                language='צרפתית'
                                                type='text'
                                                placeholder='הכנס תאור מוצר בצרפתית '
                                                useFromsParams={
                                                    register('translated.fr.name', {
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'שם המוצר עד 30 תווים'
                                                        }
                                                    })}
                                                errorMessage={errors.translated?.fr?.name?.message}
                                            />
                                            <TextArea
                                                labelTitle='תאור מוצר '
                                                language='צרפתית'
                                                placeholder='description en francais '
                                                useFromsParams=
                                                {register('translated.fr.description', {
                                                    maxLength: {
                                                        value: 100,
                                                        message: 'תיאור מוצר עד 100 תווים'
                                                    }
                                                })}
                                                errorMessage={errors.translated?.fr?.description?.message}
                                            />
                                        </section>
                                    </IF>

                                    {/* en section !need to add on */}
                                    <IF condition={currentStep >= 2} >
                                        <section className={currentStep == 2 ? 'block' : "hidden"}>

                                            <ClassicInput
                                                labelTitle='שם מוצר באנגלית '
                                                language='אנגלית'
                                                type='text'
                                                placeholder='enter a product name in english'
                                                useFromsParams={register('translated.en.name', {
                                                    maxLength: {
                                                        value: 30,
                                                        message: 'שם המוצר עד 30 תווים'
                                                    }
                                                })}
                                                errorMessage={errors.translated?.en?.name?.message}

                                            />
                                            <TextArea
                                                labelTitle='תאור מוצר '
                                                language='אנגלית'
                                                placeholder='product description in english '
                                                useFromsParams={register('translated.en.description', {
                                                    maxLength: {
                                                        value: 100,
                                                        message: 'תיאור מוצר עד 100 תווים'
                                                    }
                                                })}
                                                errorMessage={errors.translated?.en?.description?.message}
                                            />
                                        </section>
                                    </IF>

                                    <div className='pb-5 flex justify-between'>

                                        <button type="button" className="w-[90px] flex items-center justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                            onClick={() => {
                                                if (currentStep > 0)
                                                    setCurrentStep(currentStep - 1)
                                            }}
                                        ><ArrowRightIcon className='w-5' />prev</button>

                                        <button type="button" className={`${currentStep == 2 && "hidden"} w-[90px] flex items-center justify-between focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
                                            onClick={() => {
                                                if (currentStep < 2)
                                                    setCurrentStep(currentStep + 1)
                                            }}
                                        >next<ArrowLeftIcon className='w-5' /> </button>
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <ClassicInput
                                        labelTitle=' מחיר קנייה - ₪'
                                        type='number'
                                        placeholder='₪500'
                                        useFromsParams={register('selling_price', {
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
                                        errorMessage={errors.selling_price?.message}

                                    />
                                    <ClassicInput
                                        labelTitle='מחיר בחנות - ₪'
                                        type='number'
                                        placeholder='₪500'
                                        useFromsParams={register('selling_price', {
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
                                        errorMessage={errors.selling_price?.message}

                                    />

                                    <ClassicInput
                                        labelTitle='חברה'
                                        type='text'
                                        placeholder='RivkaNakach'
                                        useFromsParams={register('brand', {
                                            required: {
                                                value: true,
                                                message: 'נא לספק שם-חברה תקינה'
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: 'שם-חברה אינו עולה על 20 תווים '
                                            }

                                        })}
                                        errorMessage={errors.brand?.message}

                                    />
                                    <ClassicInput
                                        labelTitle='הנחה - %'
                                        type='number'
                                        placeholder='%60'
                                        useFromsParams={register('reduction_p', {

                                            max: {
                                                value: 100,
                                                message: " הנחה באוחוזים בלבד (0-100)"
                                            },
                                            valueAsNumber: true,

                                        })}
                                        errorMessage={errors.reduction_p?.message}

                                    />
                                    <div>
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


                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מידות</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={categorys[0]}
                                            isMulti
                                            options={categorys}
                                            onChange={(choice) => setValue('categorys', choice.map(item => item.value))}
                                        />
                                    </div >




                                    <ClassicInput
                                        labelTitle='כמות'
                                        type='number'
                                        placeholder='54'
                                        useFromsParams={register('supply', {
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
                                        errorMessage={errors.supply?.message}
                                    />

                                    {showPicker && <ColorPiker closePiker={closePiker} addColor={addColor} />}

                                    <div className='flex flex-col items-center justify-center s'>
                                        <Tooltip content="לחץ על צבע על מנת להסירו מהרשימה">
                                            <label className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>צבעים :
                                            </label>
                                        </Tooltip>
                                        <div className='flex  '>

                                            {colors.length > 0 &&
                                                colors.map((item, id) => {
                                                    return (
                                                        <Tooltip content={`${item}`}>
                                                            <div key={id} className={`w-7 h-7 px-2 `} style={{ background: `${item}` }}
                                                                onClick={() => removeColor(id)}
                                                            ></div>
                                                        </Tooltip>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>


                                </div>
                                <div className="flex flex-row-reverse justify-between">
                                    <button
                                        onClick={openPiker}
                                        type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">הוסף צבע</button>

                                    <button type="submit" className="flex h-11 items-center justify-center px-2  text-sm font-medium text-white rounded-lg bg-green-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  focus:outline-none ">

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