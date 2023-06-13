import React, { useState } from 'react'
import Rating from '../../../../../components/ratings/Rating'
import ClassicHr from '../../../../../components/HR/ClassicHr'
import avatarPlaceHolder from '../../../../../assets/avatar.svg'
import MainButtons from '../../../../../components/buttons/MainButtons'
import { Icon } from '@iconify/react'
import Star from '../../../../../components/ratings/Star'


interface props {

}
const AddCommentForm: React.FC<props> = ({ }) => {
   const [rate, setRate] = useState(0)
  return (
    <div className='w-full  text-shadow pb-5'>
      <div className='flex justify-between w-full'>
        <div className='flex items-center space-x-3 space-x-reverse'>
          <img className="rounded-full h-[50px] w-[50px] bg-gray-300  bg-contain p-1" src={avatarPlaceHolder} />
          <h2 className="text-lg">נעמי לוי</h2>
        </div>



      </div>
      <textarea className='w-full my-2 p-1'>ואוו פשוט מוש , מאז שאני מישתמשת בקרם יש לי עור חלק בטרוף!!!!!!!!!!</textarea>
      <div dir='ltr' className='flex flex-row-reverse justify-between'>
        <div className="flex">
          <button onClick={()=>setRate(1)}><Star active={rate >= 1} /></button>
          <button onClick={()=>setRate(2)}><Star active={rate >= 2} /></button>
          <button onClick={()=>setRate(3)}><Star active={rate >= 3} /></button>
          <button onClick={()=>setRate(4)}><Star active={rate >= 4} /></button>
          <button onClick={()=>setRate(5)}><Star active={rate >= 5} /></button>

        </div>
        < MainButtons custom=' flex items-center  px-2 py-0.5'>
          <Icon icon="bi:send-fill" className='mx-2 -rotate-90' />
          פרסמי
        </MainButtons>
      </div>
      <h6 className='w-full text-right text-[#B8B8B8]'>14/05/20</h6>
      <ClassicHr />
    </div>

  )
}

export default AddCommentForm