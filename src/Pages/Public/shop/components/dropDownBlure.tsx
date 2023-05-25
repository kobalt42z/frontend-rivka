import React, { useEffect, useState, FC } from 'react'
import MainButtons from '../../../../components/buttons/MainButtons'
import { XMarkIcon } from '@heroicons/react/24/outline'
import './shopItem.css'
import { UseToggle, toggler } from 'sk-use-toggle/src'
import { IF } from '../../../../components/special/if'
import ColorSpan from './colorSpan'
import SizeSpan from './sizeSpan'


interface props {
    toggleBlurMenu: toggler
}

const DropDownBlure: FC<props> = ({ toggleBlurMenu }) => {
    enum tab {
        size = "size",
        color = "color"
    }
    const [show, toggle] = useState<tab>(tab.color)
    const [selectedColor, setSelectedColor] = useState<string[]>([])
    const [selectedSize, setSelectedSize] = useState<string[]>([])
    const chooseColor = (color: string) => {
        const target = selectedColor.indexOf(color)
        if (target >= 0) return setSelectedColor(colors => {
            colors.splice(target, 1)
            return colors
        })
        setSelectedColor(colors => {
            return [...colors, color]
        })
    }
    const chooseSize = (size: string) => {
        const target = selectedSize.indexOf(size)
        if (target >= 0) return setSelectedSize(sizes => {
            sizes.splice(target, 1)
            return sizes
        })
        setSelectedSize(sizes => {
            return [...sizes, size]
        })


    }


    return (
        <div className=' '>
            <div className="  absolute drop-down-blure text-black  w-full z-10 h-[270px] flex flex-col items-center justify-around  top-0 left-0">
                <div className="flex justify-end w-full pr-2 pt-2  ">
                    <button onClick={toggleBlurMenu} ><XMarkIcon className="h-5" /></button>
                </div>
                <div className="w-[150px] min-h-[150px]  ">
                    <div className=" w-full h-10 flex  ">
                        <div className="w-1/2  flex flex-col justify-between h-8">
                            <h4 className=" text-base text-center" onClick={() => toggle(tab.size)}>מידה</h4>
                            <hr className={`bg-black ${show === tab.size ? 'h-2' : 'h-1'} border-0 `} />
                        </div>
                        <div className="w-1/2  flex flex-col justify-between h-8 ">
                            <h4 className=" text-base text-center" onClick={() => toggle(tab.color)}>צבע</h4>
                            <hr className={`bg-black ${show === tab.color ? 'h-2' : 'h-1'} border-0  `} />
                        </div>
                    </div>
                    <IF condition={show === tab.color}>
                        <div id='color' className="  grid grid-cols-4 grid-flow-row gap-2">
                            <ColorSpan color='red' chooseMe={chooseColor} />
                            <ColorSpan color='blue' chooseMe={chooseColor} />
                            <ColorSpan color='yellow' chooseMe={chooseColor} />
                            <ColorSpan color='green' chooseMe={chooseColor} />

                        </div>
                    </IF>
                    <IF condition={show === tab.size}>
                        <div id='size' className="  grid grid-cols-3 grid-flow-row gap-2">
                            <SizeSpan chooseMe={chooseSize} title='xs' />
                            <SizeSpan chooseMe={chooseSize} title='l' />
                            <SizeSpan chooseMe={chooseSize} title='m' />
                            <SizeSpan chooseMe={chooseSize} title='xl' />
                        </div>
                    </IF>
                </div>
                <MainButtons
                    ClickAction={() => {
                        console.log(selectedColor);
                    }}
                    custom={" w-[85px] h-[35px] text-black  mt-2  drop-shadow-lg "}>הוסף לסל</MainButtons>

            </div>
        </div>
    )
}

export default DropDownBlure