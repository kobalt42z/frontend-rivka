import React, { FC, useState } from 'react'
interface props {
    color: string
    chooseMe: (color: string) => void
}
const ColorSpan: FC<props> = ({ chooseMe, color }) => {
    const [selected, setSelected] = useState<boolean>(false)
    return (
        <div
            className={`w-7 h-7 rounded-full flex items-center justify-center ${selected && "border-2 border-black "} `}
           
            onClick={() => {
                chooseMe(color)
                setSelected(!selected)
            }}
        >
            <div 
            className='rounded-full  h-5 w-5  '
             style={{ backgroundColor: color }}
            ></div>
        </div>
        
    )
}

export default ColorSpan