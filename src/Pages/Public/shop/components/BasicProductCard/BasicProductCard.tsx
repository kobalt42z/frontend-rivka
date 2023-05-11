import React from 'react'
import { Link } from 'react-router-dom'

interface BasicProductCardProps {
    description:string ;
    subDescription:string; 
    url:string; 
    price:string;
}

export const BasicProductCard = ({ description, subDescription, url, price }:BasicProductCardProps) => {
    return (
        <div className="text-[var(--main-text-color)] w-[35vh] h-[53vh] bg-white border border-gray-200 rounded-lg  shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
                <img className="p-8 rounded-t-lg" src={url} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <Link to="#">
                    <h5 className=" text-center  text-xl font-semibold tracking-tight  dark:text-white">{description}</h5>
                    <h6 className='text-center font-thin text-lg'>{subDescription}</h6>

                </Link>
                <br />
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#474A49] dark:text-white">₪{price}</span>
                    <Link to="#" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Add to cart</Link>
                </div>
            </div>
        </div>

    )
}
