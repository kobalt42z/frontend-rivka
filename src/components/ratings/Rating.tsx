import React, { FC } from 'react'
import Star from './Star'

interface props {
  avrage: number
  showAvrage?: boolean
}

const Rating: FC<props> = ({ avrage, showAvrage }) => {
  return (
    <div className='flex items-center'>
      <div dir='ltr' className='flex'>
        <Star active={avrage >= 1} />
        <Star active={avrage >= 2} />
        <Star active={avrage >= 3} />
        <Star active={avrage >= 4} />
        <Star active={avrage >= 5} />

      </div>
      {showAvrage && <h2 className='mx-3'> {avrage.toFixed(1)}</h2>}
    </div>
  )
}

export default Rating