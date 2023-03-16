import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'


interface props {
    useFromsParams: UseFormRegisterReturn
    labelTitle: string
    language: string
    placeholder?: string
    type: string
    className?: string
    errorMessage?: string
}

export const TextArea = ({labelTitle,language,type,useFromsParams,className,errorMessage,placeholder}:props) => {
    return (

        <div className="sm:col-span-2">
            <label htmlFor="ItemDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">תאור מוצר
                <span className='text-blue-500 px-1'>
                    {labelTitle}
                </span>
            </label>
            <textarea id="ItemDescription" rows={4} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errorMessage && 'border-red-500'} `} placeholder="תאור מוצר בעברית עד 100 תווים"
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
    )
}
