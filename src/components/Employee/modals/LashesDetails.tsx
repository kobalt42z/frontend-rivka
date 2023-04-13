import React, { FC, useState } from 'react'
import Select, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { Product } from '../../../interfaces';
import { UseFormSetValue } from 'react-hook-form';
import { DarkVail } from '../../special/DarkVail';
import { Xsvg } from '../../../assets/X';
import { toggler } from 'sk-use-toggle/src';

interface props {
    setValue: UseFormSetValue<Product>
    show?: boolean;
    toggle: toggler
}
interface option {
    value: string;
    label: string;

}

const LashesDetails: FC<props> = ({ setValue, show, toggle }) => {
    const animatedComponents = makeAnimated();


    const curves: option[] = [
        { value: 'C', label: "C" },
        { value: 'CC', label: "CC" },
        { value: 'D', label: "D" }
    ]
    const thickness: option[] = [
        { value: '0.07', label: '0.07' },
        { value: '0.10', label: '0.10' },
        { value: '0.12', label: '0.12' },
        { value: '0.15', label: '0.15' }
    ]


    return (
        <DarkVail>
            <div className='my-2 flex justify-center items-center w-full h-[100vh] fixed z-50' >
                <div className='  flex flex-col items-center bg-white p-5 rounded-md w-10/12 md:w-3/12'>

                    <div className="flex w-full justify-start">
                        {/* <div onClick={toggle}><Xsvg /></div> */}
                    </div>
                    <div className="flex flex-col justify-around items-center h-40 w-full ">
                        <div className='w-full' >
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">רמת עיקול</label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={curves[0]}
                                isMulti
                                options={curves}
                                onChange={(choice) => setValue('curves', choice.map(item => item.value))}
                            />
                        </div >
                        <div className='w-full'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">עובי</label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={thickness[0]}
                                isMulti
                                options={thickness}
                                onChange={(choice) => setValue('thickness', choice.map(item => item.value))}
                            />
                        </div >
                    </div>
                    <div className=' flex justify-evenly w-1/2 pt-5'  >
                        <button
                            onClick={toggle}
                            className=" w-16 flex h-11 items-center justify-center px-2  text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  focus:outline-none ">
                            סגור

                        </button>

                    </div>
                </div>
            </div>
        </DarkVail>
    )
}

export default LashesDetails