import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../features/hooks";
import { addToCart, cartSLiceInitState, subItem } from "../../../../../features/Slices/cart.slice";
import { productFromDB } from "../../../../../interfaces";
import { ItemDrawer } from "./ItemDrawer";
import NewDrawer from "./NewDrawer";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import LoadingScreen from "../../../../../components/Loading/LoadingScreen";
import MainButtons from "../../../../../components/buttons/MainButtons";

interface BasketDrawerProps {
    open: boolean;
    toggle: MouseEventHandler<HTMLButtonElement>;
}
const BasketDrawer = ({ open, toggle }: BasketDrawerProps) => {
    const Cart = useAppSelector(state => state.cart)
    const [currentCart, setCurrentCart] = useState<ReactNode[]>([])
    const dispatch = useAppDispatch()




    const buildedCart = (cart: cartSLiceInitState) => cart.products.map((product: productFromDB) => {
        return (
            <ItemDrawer
                id={product.id}
                img={product.imgUrl}
                alt={product.name}
                title={product.name}
                price={product.base_price}
                key={product.id}
                count={product.count || 1}
                addOne={() => dispatch(addToCart(product))}
                subOne={() => dispatch(subItem(product.id))}

            />)
    })
    useEffect(() => {
        setCurrentCart(() => buildedCart(Cart));
    }, [Cart])
    return (
        <NewDrawer open={open} toggle={toggle} title={"סל הקניות"} icon={<div className='relative'>
            <ShoppingBagIcon color='black' className='h-5 ' />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-3 dark:border-gray-900">{Cart.totalInCart}</div>
        </div>
        }>
            {currentCart ? currentCart : <LoadingScreen />}

            {/* <ItemDrawer img="https://beautycosmetics.co.il/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-06-at-13.59.53.jpeg"
                alt="basket item"

                title="עוד מארז מיוחד"
                price="669"

            /> */}

            {currentCart.length > 0 ? < MainButtons custom={"w-[100%] "}> מעבר לקופה </MainButtons> : <p className='text-center italic text-sm'>
                סל הקניות שלך ריק כרגע
            </p>}
        </NewDrawer >
    )
}

export default BasketDrawer