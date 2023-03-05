import React from 'react'
import { Link } from 'react-router-dom'
import './SectionBigbtn.css'
export const SectionBigbtn = () => {
    return (
        <>
            <div className='container flex flex-col   '>
                <div>
                    <div className="start-wavey px-5 pt-10  ">
                        {/* <h2 className='text-center text-3xl py-10'>קטגוריות</h2> */}
                        <div className="BigTorim w-[100%] h-[280px]  ">
                            <div className='colorBloor w-[100%] h-[280px] flex justify-center items-center'>
                                <h2 className='text-3xl font-semibold text-white'>קביעת תורים</h2>
                            </div>
                        </div>

                    </div>
                    <Link to={"/shop"}>
                        <div className=" w-[100%] bg-wavy p-5 pt-10 h-[]">
                            <div className="BigShop w-[100%] h-[280px] ">
                                <div className='colorBloor w-[100%] h-[280px] flex justify-center items-center'>
                                    <h2 className='text-3xl font-semibold text-white'>חנות אונליין</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="px-5 pt-5">
                    <div className="BigAcademy w-[100%] h-[280px]  ">
                        <div className='colorBloor w-[100%] h-[280px] flex justify-center items-center'>
                            <h2 className='text-3xl font-semibold text-white'>אקדמיה</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
