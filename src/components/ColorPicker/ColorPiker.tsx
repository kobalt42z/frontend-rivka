import React, { FC, useEffect, useState } from 'react'
import { SketchPicker, ColorResult, Color, PhotoshopPicker } from 'react-color'
import { DarkVail } from '../special/DarkVail';

interface props {
    closePiker: () => void;
    addColor: (color: ColorResult) => void;
}


const ColorPiker: FC<props> = ({ addColor, closePiker }) => {
    const [currentPick, setCurrentPick] = useState<Color>("#FFFF")
    const [finalPick, setFinalPick] = useState<ColorResult>()

   
    const handleChange = (color: ColorResult) => {
        setCurrentPick(color.hex);
    }





    const handleFinalChange = (color: ColorResult) => {
        setFinalPick(color)
    }

    const applyFinalPick = () => {
        if(finalPick)addColor(finalPick)
        else console.log('error while picking');
        closePiker();
    }

    return (


        <div className=' flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full '>
            <PhotoshopPicker

                color={currentPick}
                onChange={handleChange}
                onChangeComplete={handleFinalChange}
                onAccept={applyFinalPick}
                onCancel={closePiker}


            />

            
        </div>

    )
}

export default ColorPiker