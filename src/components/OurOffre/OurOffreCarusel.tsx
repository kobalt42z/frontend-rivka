import { Carousel } from 'flowbite-react'
import React from 'react'
import './OurOffreCarusel.css'

const OurOffreCarusel = () => {
    return (
        <div className="img-carusel h-[40vh] sm:h-64 xl:h-80 2xl:h-96 w-[100%]">
            <Carousel slideInterval={1500}>
                <img
                    src="https://absoluspa.com/wp-content/uploads/2022/05/promotion-avril-absolu-spa.jpg"
                    alt="..."
                    
                />
                <img
                    src="https://images.squarespace-cdn.com/content/v1/57bfa2d69f7456b465a42c64/1603762348314-TF44SFXWKECPV1XF47T1/Screen+Shot+2020-10-20+at+9.30.56+PM.png?format=1000w"
                    alt="..."
                />
                <img
                    src="https://img.freepik.com/premium-vector/cosmetic-fashion-sale-promotion-social-media-facebook-cover-banner-template_225928-53.jpg?w=2000g"
                    alt="..."
                />
                <img
                    src="https://previews.123rf.com/images/onyxprj/onyxprj1711/onyxprj171100089/89321746-hand-drawn-makeup-products-sale-promotion-illustration-.jpg"
                    alt="..."
                />
                <img
                    src="https://img.pikbest.com/backgrounds/20210529/brown-watercolor-beauty-beauty-makeup-cosmetics-promotion-template_5989271.jpg!bw700"
                    alt="..."
                />
            </Carousel>
        </div>
    )
}

export default OurOffreCarusel