import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProductDto } from "../../../../../../interfaces";
import { FC, useState } from "react";
import Stepper3 from "../../../../../../components/Stepper/Stepper3";
import { IF } from "../../../../../../components/special/if";
import { ClassicInput } from "../../../../../../components/inputs/ClassicInput";
import { TextArea } from "../../../../../../components/inputs/TextArea";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { descriptionValidator, productNameValidator } from "../../Validators/addProduct.validator";

interface props {
    register :UseFormRegister<ProductDto>
    errors:FieldErrors<ProductDto>
    isValid:boolean
}

const TranslationForm:FC<props> = ({ register, errors,isValid }) => {
    const [currentStep, setCurrentStep] = useState(0);
    return (<>
        <div className="pb-5 ">
            <Stepper3 currentStep={currentStep} finish={isValid} />
        </div>
        <div className="space-y-5">
            {/* he section */}

            <IF condition={currentStep >= 0} >
                <section className={currentStep == 0 ? 'block' : "hidden"}>

                    <ClassicInput
                        labelTitle='שם  מוצר'
                        language='עברית '
                        type='text'
                        placeholder='שם מוצר בעברית'
                        useFromsParams={register('name', productNameValidator)}
                        errorMessage={errors.name&&errors.name.message}
                    />
                    <TextArea
                        placeholder="תאור מוצר בעברית עד 100 תווים"
                        labelTitle='תאור מוצר'
                        language='בעברית'
                        useFromsParams={register('description', descriptionValidator)}
                        errorMessage={errors.description&&errors.description?.message}
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
                            register('translations.fr.name', {
                                maxLength: {
                                    value: 30,
                                    message: 'שם המוצר עד 30 תווים'
                                },
                            })}
                        errorMessage={errors.translations&&errors.translations?.fr?.name?.message}
                    />
                    <TextArea
                        labelTitle='תאור מוצר '
                        language='צרפתית'
                        placeholder='description en francais '
                        useFromsParams=
                        {register('translations.fr.description', {
                            maxLength: {
                                value: 100,
                                message: 'תיאור מוצר עד 100 תווים'
                            }
                        })}
                        errorMessage={errors.translations?.fr?.description&&errors.translations.fr.description.message}
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
                        useFromsParams={register('translations.en.name', {
                            maxLength: {
                                value: 30,
                                message: 'שם המוצר עד 30 תווים'
                            }
                        })}
                        errorMessage={errors.translations?.en?.name?.message&&errors.translations?.en?.name?.message}

                    />
                    <TextArea
                        labelTitle='תאור מוצר '
                        language='אנגלית'
                        placeholder='product description in english '
                        useFromsParams={register('translations.en.description', {
                            maxLength: {
                                value: 100,
                                message: 'תיאור מוצר עד 100 תווים'
                            }
                        })}
                        errorMessage={errors.translations?.en?.description?.message&&errors.translations?.en?.description?.message}
                    />
                </section>
            </IF>


            <div className='pb-5 flex justify-between'>

                <button type="button" className="w-[90px] flex items-center justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => {
                        if (currentStep > 0)
                            setCurrentStep(currentStep - 1)
                    }}
                ><ArrowRightIcon className='w-5' />הקדם</button>



                <button type="button" className={`${currentStep == 2 && "hidden"} w-[90px] flex items-center justify-between focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
                    onClick={() => {
                        if (currentStep < 2)
                            setCurrentStep(currentStep + 1)
                    }}
                >הבא<ArrowLeftIcon className='w-5' /> </button>
            </div>
        </div>
    </>
    )
}

export default TranslationForm