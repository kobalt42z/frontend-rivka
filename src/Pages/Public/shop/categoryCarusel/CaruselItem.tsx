import React, { forwardRef, FC } from 'react'
import { useNavigate } from 'react-router-dom';
interface props {
    imageUrl: string;
    title: string;
}
const CaruselItem = forwardRef(({ title, imageUrl }: props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`shop/${title}`)} ref={ref} className='flex flex-col justify-center items-center flex-none snap-center'>
            <img src={imageUrl} alt={title} className='rounded-full h-[85px] w-[85px] drop-shadow-xl  ' />
            <h3 className='text-center capitalize py-1'>{title}</h3>
        </div>
    )
})

export default CaruselItem