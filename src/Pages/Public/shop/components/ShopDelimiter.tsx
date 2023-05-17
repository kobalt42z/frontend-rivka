import React from 'react'


interface ShopDelimiterProps {
  imgUrl : string;
  title : string;
  children : React.ReactNode ;
}
const ShopDelimiter = ({imgUrl , title ,children}:ShopDelimiterProps) => {
  return (
    <div className='container flex flex-col items-center '>
        {/* {imgUrl &&<img src={imgUrl} alt={title} className=" h-[150px] w-[90%] my-5" />}
        <h3 className='underline text-base font-bold mb-10'>{title}</h3> */}
        <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-3 gap-y-10'>
            {children}
        </div>
    </div>
  )
}

export default ShopDelimiter