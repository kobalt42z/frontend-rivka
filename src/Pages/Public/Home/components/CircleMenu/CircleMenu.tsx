import React from 'react'
import { Link } from 'react-router-dom'
import './CircleMenu.css'
import { AcademicCapIcon, CalendarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
const CircleMenu = () => {
  return (
    <>
      <div className="md:hidden container flex justify-center py-10 px-3">
        <div className=' flex w-[90%] justify-between text-center'>

          <Link to={'/shop'}>
            <div className='flex flex-col items-center w-[82px]'>
              <div className="rounded-full flex justify-center items-center h-[60px] w-[60px] border-2 border-mainGreen">
                <ShoppingCartIcon className="h-8 w-8 text-mainGreen" />
              </div>
              <h4 className=' min-w-[70px] '>חנות אונליין</h4>
              <hr className="h-[2px] box-shadow w-full  bg-mainGreen border-0 dark:bg-gray-700" />
            </div>
          </Link>

          <div className='flex flex-col items-center w-[82px]'>
            <div className="rounded-full flex justify-center items-center h-[60px] w-[60px] border-2 border-mainGreen">
              <AcademicCapIcon className='h-8 w-8 text-mainGreen' />
            </div>
            <h4 className=' min-w-[70px] '>אקדמיה</h4>
            <hr className="h-[2px] box-shadow w-full  bg-mainGreen border-0 dark:bg-gray-700" />
          </div>
          <div className='flex flex-col items-center w-[82px]'>
            <div className="rounded-full flex justify-center items-center h-[60px] w-[60px] border-2 border-mainGreen">
              <CalendarIcon className="h-8 w-8 text-mainGreen" />
            </div>
            <h4 className=' min-w-[70px]  bg-main'>זימון תורים</h4>
            <hr className="h-[2px] box-shadow w-full  bg-mainGreen border-0 dark:bg-gray-700" />
          </div>

        </div>

      </div>
    </>
  )
}

export default CircleMenu