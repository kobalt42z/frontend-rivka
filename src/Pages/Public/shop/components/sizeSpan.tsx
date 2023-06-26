import React, { FC, useState } from 'react'

interface props {
    title: string;
    active: boolean;
    onClick?:React.MouseEventHandler<HTMLDivElement>
}
const SizeSpan: FC<props> = ({ active, title,onClick }) => {

    return (
        <div
            className={`w-[45px] h-[30px] rounded-full cursor-pointer  flex justify-center  box-shadow items-center ${active ? " border-2 border-black " : " border-2 border-gray-400 "}} `}
            onClick={onClick}
        >
            <h4 className="text-base font-bold text-center uppercase">{title}</h4>
        </div>
    )
}

export default SizeSpan