import React, { useEffect, useRef } from 'react'
import CaruselItem from './CaruselItem'
import Carusel from '../../../../components/carusel/Carusel';
import { useGetCategoriesSlistQuery } from '../../../../features/API/Category.Api';

const CategoryCarusel = () => {
    const carusel = useRef<HTMLDivElement>(null)
    const { isLoading, isSuccess, isError, error, data: categories } = useGetCategoriesSlistQuery(undefined)

    return (
        // <div className='flex my-5 space-x-3 overflow-x-scroll scroll-px-6 snap-proximity snap-x ' ref={carusel}>

        // </div>
        <Carusel
            // dealay={1000}
            firstObjectRef={carusel}
        >
            {categories &&

                categories.map((cat, i) => {
                    console.log(cat);
                    
                    if (i == 1) return (<CaruselItem
                        title={cat.name}
                        itemId={cat.id}
                        imageUrl={cat.imgUrl}
                        ref={carusel} />)
                    else return (<CaruselItem
                        title={cat.name}
                        itemId={cat.id}
                        imageUrl={cat.imgUrl}
                     />)
                })
            }


            <CaruselItem
                title='לק גל'
                imageUrl='https://plus.unsplash.com/premium_photo-1670537995423-4f1c8313fb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                ref={carusel} />


        </Carusel>

    )
}

export default CategoryCarusel