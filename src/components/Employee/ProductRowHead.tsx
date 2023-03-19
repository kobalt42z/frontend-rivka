import React, { MouseEventHandler, useState } from 'react'
import CrudBtn from './btns/CrudBtn'

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

interface ProductRowType {
    id: string;
    handleDeletClick: (id: string) => void;
    handleEditClick: (id: string) => void;
    onClick:()=>void;

    // row info :
    ImgUrl:string;
    productName: string;
    category: string;
    brand: string;
    price: number;
    supply: number;
    sellsInMonth: string;
    sellsInTotal: string;
    lastUpdate:string;

    
}

const ProductRowHead = ({ id, handleDeletClick, productName, brand, category, price, sellsInTotal, sellsInMonth, supply,lastUpdate,ImgUrl,onClick }: ProductRowType) => {
    const [editMode, setEditMode] = useState(false);
    return (

        <tr onClick={onClick} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={ImgUrl} alt={productName} className="w-auto h-8 mr-3" />
                <span className='pr-1'>{productName}</span>
            </th>
            <td className="px-4 py-2">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{category}</span>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {brand}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right">{price}</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right">{supply}
                <div className={`inline-block w-4 h-4 mr-2 ${supply<=15? "bg-red-700":"bg-green-700"} rounded-full`}></div>
            </td>

            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {sellsInMonth}
            </td>
            <td className="px-4 py-2">
            <div className="flex items-center">
                {sellsInTotal}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 
                    mr-2 text-gray-400" aria-hidden="true">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                   
                </div>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{lastUpdate}</td>
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
                        <CrudBtn color='red' onClick={() => handleDeletClick(id)}><TrashIcon className='h-[3vh] ' /></CrudBtn>
                        <CrudBtn color='gray' onClick={() =>handleDeletClick(id)}><PencilSquareIcon className='h-[3vh] ' /></CrudBtn>
                    </div>
                }



            </td>
        </tr>
    )
}

export default ProductRowHead