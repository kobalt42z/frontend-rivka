import { Carousel } from 'flowbite-react'
import React, { useEffect } from 'react'
import './OurOffreCarusel.css'
import example from '../../../../../assets/Rectangle 76.png'

const OurOffreCarusel = () => {
    const imges = [
        "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        " https://images.unsplash.com/photo-1633793566102-ee7793834059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1671492247768-74f54774dbb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        
    ]
    
    const texts = ['this is a new product', "new shiny boolshit! ", " awsome collection of things"]

    useEffect(() => {

    }, [])

    return (
        <div className=" md:my-10 container  w-full
        "
        >
            
                <Carousel className='md:hidden h-[30vh]'

                    slide={true}
                    slideInterval={2000}
        
                    
                >
                    {imges.map((item, i) => {
                        return (
                            <div className={`flex `}>
                                <img key={i} src={item} alt="carousel item"
                                    className='w-full' />

                            </div>
                        )
                    })}


                </Carousel>
            
            <img className='max-md:hidden' src={example} alt="" />


        </div>
    )
}

export default OurOffreCarusel