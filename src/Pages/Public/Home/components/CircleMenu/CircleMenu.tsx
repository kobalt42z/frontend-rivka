import React from 'react'
import { Link } from 'react-router-dom'
import './CircleMenu.css'
const CircleMenu = () => {
  return (
    <>
      <div className="container flex justify-around py-10 px-3">
        <div className='flex flex-col items-center'>
          <div className={` h-[90px] w-[90px]   bg-white calendar`}></div>
          <h5 className='text font-semibold mt-1 text-[#474A49]'>קביעת תורים </h5>
        </div>
        <div className='flex flex-col items-center'>
          <div className={` h-[90px] w-[90px]  academy bg-white flex `}></div>
          <h5 className='text font-semibold mt-1 text-[#474A49]'>אקדמיה</h5>
        </div>
        <Link to={"/shop"}>
          <div className='flex flex-col items-center'>
            <div className={` rounded-full h-[90px] w-[90px]   bg-white flex `}>
              <div className='products w-[90px] h-[90px]'></div>
            </div>
            <h5 className='text font-semibold mt-1 text-[#474A49]'>חנות אונליין </h5>
          </div>
        </Link>

      </div>
    </>
  )
}

export default CircleMenu