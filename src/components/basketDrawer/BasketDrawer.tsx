import React, { EventHandler, MouseEventHandler, useEffect } from 'react'
import MainButtons from '../buttons/MainButtons'
import { IF } from '../special/if'
import { ItemDrawer } from './ItemDrawer'
import NewDrawer from './NewDrawer'
import { useAppSelector } from '../../features/hooks'
import LoadingScreen from '../Loading/LoadingScreen'
import { productFromDB } from '../../interfaces'

interface BasketDrawerProps {
    open: boolean;
    toggle: MouseEventHandler<HTMLButtonElement>;
}
const BasketDrawer = ({ open, toggle }: BasketDrawerProps) => {
    const Cart = useAppSelector(state => state.cart.products)

    const deduplicate = (data: productFromDB[]) => {
        const deduplicated: any = {}
        data.forEach((product) => {
            if (product.id in deduplicated) {
                deduplicated[product.id].count += 1
            } else {
                deduplicated[product.id] = {
                    count: 1,
                    ...product,
                }
            }
        })
        return Object.values(deduplicated)
    }
    const buildedCart = deduplicate(Cart).map((product:any)=>{//!toFIX!!!!!!!ANY
          return (
                <ItemDrawer img={product.imgUrl}
                    alt={product.name}
                    title={product.name}
                    price={product.base_price}
                    key={product.id}
                    count={product.count}
                />)
    })
    useEffect(() => {
       
            // return (
            //     <ItemDrawer img={product.imgUrl}
            //         alt={product.name}
            //         title={product.name}
            //         price={product.base_price}
            //         key={product.id}
            //     />)
    
        console.log(deduplicate(Cart));
        

    }, [Cart])
    return (
        <NewDrawer open={open} toggle={toggle} title={"סל הקניות"}>
            {buildedCart ? buildedCart : <LoadingScreen />}

            {/* <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-13.59.53.jpeg"
                alt="basket item"

                title="עוד מארז מיוחד"
                price="669"

            /> */}

            <MainButtons custom={"w-[100%] "}> pass to basket</MainButtons>
        </NewDrawer>
    )
}

export default BasketDrawer