import React from 'react'
import MainButtons from '../../../../components/buttons/MainButtons'
import { XMarkIcon } from '@heroicons/react/24/outline'
import './shopItem.css'
const DropDownBlure = () => {
    return (
        <div className='relative'>
            <div className="absolute drop-down-blure text-black  w-full z-10 h-[270px] flex flex-col items-center justify-around ">
                <div className="flex justify-end w-full pr-2 pt-2 ">
                    <XMarkIcon className="h-5" />
                </div>
                <div className="w-[150px] min-h-[130px]  ">                                                                                                     
                    <div className=" w-full h-10 flex  ">
                        <div className="w-1/2  flex flex-col justify-between h-8">
                            <h4 className=" text-base text-center">מידה</h4>
                            <hr className="bg-black h-1 border-0" />
                        </div>
                        <div className="w-1/2  flex flex-col justify-between h-8 ">
                            <h4 className=" text-base text-center">צבע</h4>
                            <hr className="bg-black h-2 border-0 " />
                        </div>
                    </div>
                    <div id='color' className=" hidden grid grid-cols-4 grid-flow-row gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-300 "></div>
                        <div className="w-5 h-5 rounded-full bg-blue-300 border-2 border-black "></div>
                        <div className="w-5 h-5 rounded-full bg-yellow-300 "></div>
                        <div className="w-5 h-5 rounded-full bg-purple-300 "></div>
                        <div className="w-5 h-5 rounded-full bg-cyan-300 "></div>

                    </div>
                    <div id='size' className="  grid grid-cols-3 grid-flow-row gap-2">
                        <div className="w-[45px] h-[30px] rounded-full border-2 border-gray-500 flex justify-center items-center ">
                            <h4 className="text-base font-bold text-center">XS</h4>
                        </div>
                        <div className="w-[45px] h-[30px] rounded-full border-2 border-gray-500 flex justify-center items-center ">
                            <h4 className="text-base font-bold text-center">S</h4>
                        </div>
                        <div className="w-[45px] h-[30px] rounded-full border-2 border-gray-500 flex justify-center items-center ">
                            <h4 className="text-base font-bold text-center">M</h4>
                        </div>
                        <div className="w-[45px] h-[30px] rounded-full border-2 border-gray-500 flex justify-center items-center ">
                            <h4 className="text-base font-bold text-center">L</h4>
                        </div>
                        <div className="w-[45px] h-[30px] rounded-full border-2 border-gray-500 flex justify-center items-center ">
                            <h4 className="text-base font-bold text-center">XL</h4>
                        </div>
                        <div className="w-[45px] h-[30px] rounded-full border-2 border-gray-500 flex justify-center items-center ">
                            <h4 className="text-base font-bold text-center">XLL</h4>
                        </div>
                        <div className="w-[45px] h-[30px] rounded-full border-2 border-gray-500 flex justify-center items-center ">
                            <h4 className="text-base font-bold text-center">C</h4>
                        </div>
                    </div>
                </div>
                <MainButtons
                    ClickAction={()=>{}}
                    custom={" text-black  mt-2  drop-shadow-lg "}>הוסף לסל</MainButtons>

            </div>
        </div>
    )
}

export default DropDownBlure