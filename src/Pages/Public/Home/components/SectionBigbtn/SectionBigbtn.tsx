import React from 'react'
import { Link } from 'react-router-dom'
import './SectionBigbtn.css'
export const SectionBigbtn = () => {
    return (
        <>
            <div className='container flex flex-col lg:flex-row w-full  lg:items-center  lg:pt-5 lg:space-x-5 '>

                <div className="max-lg:[ start-wavey px-5 ] pt-10 lg:p-0 lg:w-1/3 ">
                    {/* <h2 className='text-center text-3xl py-10'>קטגוריות</h2> */}
                    <div className="BigTorim w-[100%] h-[280px]  ">
                        <div className='colorBloor w-[100%] h-[280px] flex justify-center items-center'>
                            <h2 className='text-3xl font-semibold text-white'>קביעת תורים</h2>
                        </div>
                    </div>

                </div>
                <Link to={"/shop"} className='lg:w-1/3'>
                    <div className=" w-[100%] max-lg:[ bg-wavy ] p-5 pt-10 h-[] lg:p-0 ">
                        <div className="BigShop w-[100%] h-[280px] ">
                            <div className='colorBloor w-[100%] h-[280px] flex justify-center items-center'>
                                <h2 className='text-3xl font-semibold text-white'>חנות אונליין</h2>
                            </div>
                        </div>
                    </div>
                </Link>


                <div className="px-5 pt-5 lg:p-0 lg:w-1/3">
                    <div className="BigAcademy w-full h-[280px]   ">
                        <div className='colorBloor w-full h-[280px] flex justify-center items-center'>
                            <h2 className='text-3xl font-semibold text-white'>אקדמיה</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
