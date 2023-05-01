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