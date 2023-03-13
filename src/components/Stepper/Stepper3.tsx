import React, { useState } from 'react'


import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface Stepper3types {
    steps?: string[3];
    currentStep: number ;
    finish :boolean
}

const Stepper3 = ({ steps, currentStep ,finish}: Stepper3types) => {

    
    return (
        <ol className="flex  items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className={`flex md:w-full items-center 
            ${currentStep == 0 && "text-blue-500"} ${currentStep > 0 && "text-green-500"} 
             dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                    עברית
                    {currentStep>= 1 && <CheckCircleIcon color='currentColor' className='w-5 mr-1' />}

                </span>
            </li>
            <li className={`flex md:w-full items-center
             ${currentStep == 1 && "text-blue-500"} ${currentStep > 1 && "text-green-500"} 
              dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                    צרפתית
                    {currentStep>= 2 && <CheckCircleIcon color='currentColor' className='w-5 mr-1' />}
                </span>
            </li>
            <li className={`flex md:w-full items-center
             ${currentStep == 2 && "text-blue-500"}  ${finish  && "text-green-500"} 
              `}>

                אנגלית
                {finish && <CheckCircleIcon color='currentColor' className='w-5 mr-1' />}
            </li>
        </ol>
    )
}

export default Stepper3