import React, { useState } from 'react'
import CrudBtn from './btns/CrudBtn'

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

interface ProductRowType {
    id: string;
    handleDeletClick:(id:string)=>void;
}

const ProductRow = ({ id,handleDeletClick }:ProductRowType) => {
    const [editMode, setEditMode] = useState(false);
    return (

        <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="w-4 px-4 py-3">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src="https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091" alt="iMac Front Image" className="w-auto h-8 mr-3" />
                <span className='pr-1'> קרם לחות לידיים </span>
            </th>
            <td className="px-4 py-2">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Desktop PC</span>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                    95
                </div>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.47</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.47</td>

            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    1.6M
                </div>
            </td>
            <td className="px-4 py-2">$3.2M</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Just now</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white ">

                {editMode ?
                    <div className='flex flex-row-reverse justify-evenly'>
                        <CrudBtn color='red' onClick={() => setEditMode(false)}>
                            <XMarkIcon className='h-[3vh] ' />
                        </CrudBtn>
                        <CrudBtn color='green'><CheckIcon className='h-[3vh] ' /></CrudBtn>
                    </div>
                    :
                    <div className='flex flex-row-reverse justify-evenly'>
                        <CrudBtn color='red' onClick={()=>handleDeletClick(id)}><TrashIcon className='h-[3vh] ' /></CrudBtn>
                        <CrudBtn color='gray' onClick={() => setEditMode(true)}><PencilSquareIcon className='h-[3vh] ' /></CrudBtn>
                    </div>
                }



            </td>
        </tr>
    )
}

export default ProductRow