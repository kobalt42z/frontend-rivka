import { Carousel } from 'flowbite-react'
import React, { useEffect } from 'react'
import './OurOffreCarusel.css'

const OurOffreCarusel = () => {
    const imges = [
        "https://images.unsplash.com/photo-1659482633347-e56ce63d147b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1679850134579-472a06699a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1679858511194-8ab47c0449be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
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