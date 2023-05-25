import React, { FC, useState } from 'react'

interface props {
    title: string;
    chooseMe: (size: string) => void;

}
const SizeSpan: FC<props> = ({ chooseMe, title }) => {
    const [selected, setSelected] = useState(false)
    return (
        <div
            className={`w-[45px] h-[30px] rounded-full  flex justify-center  box-shadow items-center ${selected ? " border-2 border-black " : " border-2 border-gray-400 "}} `}
            onClick={() => {
                chooseMe(title)
                setSelected(!selected)
            }}
        >
            <h4 className="text-base font-bold text-center uppercase">{title}</h4>
        </div>
    )
}

export default SizeSpan