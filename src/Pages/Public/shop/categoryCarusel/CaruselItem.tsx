import React, { forwardRef, FC } from 'react'
interface props {
    url: string;
    title:string;
}
const CaruselItem = forwardRef(({ title,url}: props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className='flex flex-col justify-center items-center flex-none snap-center'>
            <img src={url} alt={title} className='rounded-full h-[85px] w-[85px] drop-shadow-xl  ' />
            <h3 className='text-center capitalize py-1'>{title}</h3>
        </div>
    )
})

export default CaruselItem