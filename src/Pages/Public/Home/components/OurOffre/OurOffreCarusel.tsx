import { Carousel } from 'flowbite-react'
import React, { useEffect } from 'react'
import './OurOffreCarusel.css'

const OurOffreCarusel = () => {
    const imges = [
       "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      " https://images.unsplash.com/photo-1633793566102-ee7793834059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
       "https://images.unsplash.com/photo-1671492247768-74f54774dbb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    ]
    const texts=['this is a new product',"new shiny boolshit! " ," awsome collection of things"]

    useEffect(() => {

    }, [])

    return (
        <div className=" container  h-[50vh] w-full
        "
        >

            <Carousel

                slide={true}
                slideInterval={2000}

                leftControl=""
                rightControl=""
            >
                {imges.map((item, i) => {
                    return (
                        <div className={`flex ${i%2===0 && 'flex-row-reverse'}`}>
                            <img key={i} src={item} alt="carousel item"
                               className='h-[40vh] lg:h-[50vh] lg:w-1/2'  />
                            <div className='max-lg:hidden  w-1/2 h-[50Vh] flex justify-center items-center 
                            bg-black bg-opacity-10
                            '>
                                <p className='text-black  text-3xl capitalize'>
                                    {texts[i]}</p>
                            </div>
                        </div>
                    )
                })}


            </Carousel>



        </div>
    )
}

export default OurOffreCarusel