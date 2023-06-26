import React, { FC, useState } from 'react'

interface props {
    color: string;
    active: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
const ColorSpan: FC<props> = ({ color, active, onClick }) => {
    const [selected, setSelected] = useState<boolean>(false)
    return (
        <div
            className={`w-7 h-7 rounded-full flex items-center justify-center ${active && "border-2 border-black "} `}

            onClick={onClick}
        >
            <div
                className='rounded-full  h-5 w-5  '
                style={{ backgroundColor: color }}
            ></div>
        </div>

    )
}

export default ColorSpan