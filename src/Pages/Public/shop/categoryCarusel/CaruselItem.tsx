import React, { forwardRef, FC } from 'react'
import { useNavigate } from 'react-router-dom';
interface props {
    imageUrl: string;
    title: string;
    itemId?: string;
}
const CaruselItem = forwardRef(({ title, imageUrl, itemId }: props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`${itemId ?? title}?categoryName=${title}`)} ref={ref} className='flex flex-col justify-center items-center flex-none snap-center'>
            <img src={imageUrl} alt={title} className='rounded-full relative z-20 hover:scale-125 origin-top  h-[85px] w-[85px] drop-shadow-xl  ' />
            <h3 className='text-center capitalize py-1'>{title}</h3>
        </div>
    )
})

export default CaruselItem