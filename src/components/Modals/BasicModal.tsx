import React, { FC } from 'react'
import { Xsvg } from '../../assets/X'
interface props {
    toggleClose: () => void
    title: string,
    children: React.ReactNode
}
const BasicModal: FC<props> = ({ title, toggleClose, children, }) => {
    return (
        <div dir='rtl' className="  absolute z-50   w-full md:inset-0 h-screen   ">


            <div className=" w-full   md:h-screen   bg-black bg-opacity-30 flex justify-center items-center box-shadow ">
                {/* Modal content */}
                <div className="  bg-white rounded-lg shadow p-5 w-1/2 ">
                    {/*  Modal header */}

                    <div className="flex justify-between items-center  mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">

                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={toggleClose} >
                            <Xsvg />
                            <span className="sr-only">Close modal</span>
                        </button>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default BasicModal