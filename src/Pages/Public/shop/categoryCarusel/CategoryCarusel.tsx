import React, { useEffect, useRef } from 'react'
import CaruselItem from './CaruselItem'
import Carusel from '../../../../components/carusel/Carusel';

const CategoryCarusel = () => {
    const carusel = useRef<HTMLDivElement>(null)
  

    return (
        // <div className='flex my-5 space-x-3 overflow-x-scroll scroll-px-6 snap-proximity snap-x ' ref={carusel}>

        // </div>
        <Carusel
            // dealay={1000}
            firstObjectRef={carusel}
        >
            <CaruselItem 
            title='לק גל'
            url='https://plus.unsplash.com/premium_photo-1670537995423-4f1c8313fb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            ref={carusel} />
            <CaruselItem
            title='קרם לחות'
            url='https://plus.unsplash.com/premium_photo-1675896042153-9dc08f9c9599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            />
            <CaruselItem 
            title='מוצרי איפור'
            url='https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />
            <CaruselItem 
            title='אביזרים'
            url='https://images.unsplash.com/photo-1617220379475-420f5a8a20d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxzSU5wcDM4bkVRRXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
            />
            <CaruselItem 
            title='מוצרי שיער'
            url='https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xzSU5wcDM4bkVRRXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
            />
         
        </Carusel>

    )
}

export default CategoryCarusel