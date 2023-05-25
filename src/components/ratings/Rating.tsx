import React ,{FC}from 'react'
import Star from './Star'

interface props {
    avrage: number
}

const Rating:FC<props>= ({avrage}) => {
    return (
  <div className='flex items-center'>
          <div  dir='ltr' className='flex'>
            <Star active={ avrage >= 1 } />
            <Star active={ avrage >= 2 } />
            <Star active={ avrage >= 3 } />
            <Star active={ avrage >= 4 } />
            <Star active={ avrage >= 5 } />
          
        </div>
         
  </div>
    )
}

export default Rating