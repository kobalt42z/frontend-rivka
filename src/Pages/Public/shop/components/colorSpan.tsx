import React, { FC, useState } from 'react'
interface props {
    color: string
    chooseMe: (color: string) => void
}
const ColorSpan: FC<props> = ({ chooseMe, color }) => {
    const [selected, setSelected] = useState<boolean>(false)
    return (
        <div
            className={`w-6 h-6 rounded-full ${selected && "border-4 border-black "} `}
            style={{ backgroundColor: color }}
            onClick={() => {
                chooseMe(color)
                setSelected(!selected)
            }}
        ></div>
    )
}

export default ColorSpan