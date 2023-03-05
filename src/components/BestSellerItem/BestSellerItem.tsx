import React from 'react'
import './BestSellerItem.css'

interface BestSellerItemProps {
    url: string;
    alt: string;
    extraTitle?: string;
    title: string;
    price: string;
}
export const BestSellerItem = ({ url, alt, extraTitle, title, price }:BestSellerItemProps) => {


    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[80px] h-[80px] flex justify-center items-center bg-white p-2'>
                    <img src={url} alt={alt} className='max-h-[80px] max-w-[80px]' />
                </div>
                <h3 className='pt-1 w-13 font-semibold text-[#474A49] '>{extraTitle ? extraTitle : <br />}</h3>
                <h3 className='w-13  font-semibold text-[#474A49] '>{title}</h3>
                <h6 className='my-1'><i className="fa-solid fa-shekel-sign text-color"></i><span className='font-semibold pl-2   text-[#474A49]'>{price}</span></h6>
                <button className='mt-2 bg-[#474A49] p-1 '>הוספה לסל</button>
            </div>
        </>
    )
}
