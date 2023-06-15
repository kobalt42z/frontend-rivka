import React from 'react'
import avatarPlaceHolder from '../../../../../assets/avatar.svg'

import ClassicHr from '../../../../../components/HR/ClassicHr'
import Rating from '../../../../../components/ratings/Rating'
import { CommentFromDB } from '../../../../../interfaces'
import { dateFormatter } from '../../../../../functions'

interface props {
    data: CommentFromDB
}
const Comments: React.FC<props> = ({ data }) => {
    return (
        <div className='w-full  text-shadow pb-5'>
            <div className='flex justify-between w-full'>
                <div className='flex items-center space-x-3 space-x-reverse'>
                    <img className="rounded-full h-[50px] w-[50px] bg-gray-300  bg-contain " src={data.user.imgUrl??avatarPlaceHolder} />
                    <h2 className="text-lg">{data.user.fullName}</h2>
                </div>

                <div dir='ltr'>
                    <Rating avrage={data.rating} />
                </div>

            </div>
            <p className='p-4'>{data.body}</p>
            <h6 className='w-full text-right text-[#B8B8B8]'>{dateFormatter(data.createdAt)}</h6>
            <ClassicHr />
        </div>
    )
}

export default Comments