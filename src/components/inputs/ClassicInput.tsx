import React from 'react'
import { FieldError, FieldErrors, UseFormRegisterReturn } from 'react-hook-form'
import { IF } from '../special/if'

interface props {
    useFromsParams: UseFormRegisterReturn
    labelTitle: string
    language?: string
    placeholder?: string
    type: string
    className?: string
    errorMessage?: string
}

export const ClassicInput = ({ labelTitle, type, placeholder, className, useFromsParams, language, errorMessage, }: props) => {
    return (
        <div>
            <label className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white `}>{labelTitle}
                <span className='text-blue-500 px-1 text-Base capitalize '>
                    {language}
                </span>
            </label>
            <input type={type} id="name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${className} ${errorMessage&& "border-red-500"}`}
                placeholder={placeholder}
                {...useFromsParams}
            />
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </div>
    )
}
