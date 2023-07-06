import React, { FC, useState } from 'react'

interface props {
    title: string;
    active: boolean;
    onClick?:React.MouseEventHandler<HTMLDivElement>
}
const SizeSpan: FC<props> = ({ active, title,onClick }) => {

    return (
        <div
            className={`min-w-[20px] h-[30px]  cursor-pointer  flex justify-center   items-center ${active ? " border-b-2 border-mainGreen drop-shadow-xl " : "  "}} `}
            onClick={onClick}
        >
            <h4 className={`text-base font-[Gisha]   ${active && "font-semibold"} text-center uppercase`}>{title}</h4>
        </div>
    )
}

export default SizeSpan