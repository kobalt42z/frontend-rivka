import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../features/hooks";
import { productFromDB } from "../../../../../interfaces";
import { ItemDrawer } from "./ItemDrawer";
import NewDrawer from "./NewDrawer";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import LoadingScreen from "../../../../../components/Loading/LoadingScreen";
import MainButtons from "../../../../../components/buttons/MainButtons";
import { Link } from "react-router-dom";
import ClassicHr from "../../../../../components/HR/ClassicHr";

interface BasketDrawerProps {
    open: boolean;
    toggle: MouseEventHandler<HTMLButtonElement>;
}
const BasketDrawer = ({ open, toggle }: BasketDrawerProps) => {
    const cart = useAppSelector(state => state.cart)
    const [currentCart, setCurrentCart] = useState<ReactNode[]>([])
    const dispatch = useAppDispatch()



    return (
        <NewDrawer open={open} toggle={toggle} title={"סל הקניות"} icon={<div className='relative'>
            <ShoppingBagIcon color='black' className='h-5 ' />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-3 dark:border-gray-900">{cart.count}</div>
        </div>
        }>

            <ClassicHr />
            <h1 className="text-end">: המוצרים שלך </h1>
            {/* <ItemDrawer
                data={}
            /> */}

            {cart.products.map(product => <ItemDrawer
                data={product}
            />)}
            {currentCart.length > 0 ? <Link to={'/myCart/'}>< MainButtons custom={"w-[100%] mt-5 "}> מעבר לקופה </MainButtons></Link> : <p className='text-center italic text-sm'>
                סל הקניות שלך ריק כרגע
            </p>}
        </NewDrawer >
    )
}

export default BasketDrawer