import React from 'react'
import avatarPlaceHolder from '../../../../../assets/avatar.svg'

import ClassicHr from '../../../../../components/HR/ClassicHr'
import Rating from '../../../../../components/ratings/Rating'
const Comments = () => {
    return (
        <div className='w-full  text-shadow pb-5'>
            <div className='flex justify-between w-full'>
                <div className='flex items-center space-x-3 space-x-reverse'>
                    <img className="rounded-full h-[50px] w-[50px] bg-gray-300  bg-contain p-1" src={avatarPlaceHolder} />
                    <h2 className="text-lg">נעמי לוי</h2>
                </div>

                <div dir='ltr'>
                    <Rating avrage={4} />
                </div>

            </div>
            <p className='p-4'>ואוו פשוט מוש , מאז שאני מישתמשת בקרם יש לי עור חלק בטרוף!!!!!!!!!!</p>
            <h6 className='w-full text-right text-[#B8B8B8]'>14/05/20</h6>
            <ClassicHr />
        </div>
    )
}

export default Comments