import React, { EventHandler, MouseEventHandler } from 'react'
import MainButtons from '../buttons/MainButtons'
import { IF } from '../special/if'
import { ItemDrawer } from './ItemDrawer'
import NewDrawer from './NewDrawer'

interface BasketDrawerProps{
    open:boolean;
    toggle:MouseEventHandler<HTMLButtonElement>;
}
const BasketDrawer = ({open,toggle}:BasketDrawerProps) => {
    
    return (
        <NewDrawer open={open} toggle={toggle} title={"סל הקניות"}>
            <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2021/12/e1b817f1-4d4b-492d-a679-9f498233d800.png"
                alt="basket item"

                title="גל מכניב כזה"
                price="700"

            />
            <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2022/01/49419872-D7F9-445A-93A6-807303AA59EF.jpeg"
                alt="basket item"

                title="מארז בילבולי מח"
                price="350"

            />
            <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2022/11/HAVA-ZINGBOIM-HAND-CREAM-copy.png"
                alt="basket item"

                title="קרם לחות לידיים"
                price="45"

            />
            <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2022/09/HZGreen-lab-product-Cut-67X47.png"
                alt="basket item"

                title="סדרת קרמים ירוקים"
                price="82"

            />
            <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-13.59.53.jpeg"
                alt="basket item"

                title="מארז מיוחד"
                price="376"

            />
            <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-13.59.53.jpeg"
                alt="basket item"

                title="עוד מארז מיוחד"
                price="669"

            />
           <MainButtons custom={"w-[100%] "}> pass to basket</MainButtons>
        </NewDrawer>
    )
}

export default BasketDrawer