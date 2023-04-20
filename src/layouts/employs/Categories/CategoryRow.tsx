import { Dropdown } from 'flowbite-react'
import React, { FC } from 'react'
import { toggler } from 'sk-use-toggle/src'

interface props {
    imgURl: string

    categoryName: string
    description: string
    amountOfProducts: number
    createdAt: string
    lastUpdate: string

    toggleDeletion: toggler
}

const CategoryRow: FC<props> = ({ amountOfProducts, categoryName, createdAt, description, imgURl, lastUpdate,toggleDeletion }) => {
    return (
        <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className='flex justify-center '>
                    <img className=' w-10 h-6 ml-5' src={imgURl} alt={categoryName} />
                    {categoryName}
                </div>
            </th>
            <td className="px-4 py-3">{description}</td>
            <td className="px-4 py-3">{amountOfProducts}</td>
            <td className="px-4 py-3">{createdAt}</td>
            <td className="px-4 py-3">{lastUpdate}</td>
            <td className="px-4 py-3 flex items-center justify-end">
                <button id="xbox-series-x-dropdown-button" data-dropdown-toggle="xbox-series-x-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">

                </button>
                <Dropdown
                    label={<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>}
                    inline={true}
                    arrowIcon={false}
                    placement='left'

                    
                    >
                    <Dropdown.Item>
                        עריכה
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <span onClick={toggleDeletion} className="text-red-500">מחיקה </span>
                    </Dropdown.Item>
                  
                </Dropdown>
            </td>
        </tr>
    )
}

export default CategoryRow