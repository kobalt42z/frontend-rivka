import React from 'react'
import { ItemDrawer } from '../basketDrawer/ItemDrawer'
import { addToCart, subItem } from '../../../../../features/Slices/cart.slice'
import { useAppDispatch, useAppSelector } from '../../../../../features/hooks'
import { productFromDB } from '../../../../../interfaces'
import MainButtons from '../../../../../components/buttons/MainButtons'

export const MyCart = () => {
    const dispatch = useAppDispatch();
    const Cart = useAppSelector((state) => state.cart)
    return (
        <div dir='rtl' className='container p-5 min-h-[80vh] flex flex-col items-center'>
            <h1 className='text-xl font '>סל קניות ({Cart.totalInCart} מוצרים)</h1>
            <p className='bg-[#F9F9F9] p-8 mb-2'>
                ניתן להחזיר את המוצר בתוך 30 יום מזמן הקנייה באריזה המקורית
            </p>
            {Cart.products.map((product: productFromDB) => {
                return (
                    <ItemDrawer
                        className='bg-[#ffffff] px-10 py-5'
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
            })}
            <div className=' border-t-2 border-b-2 border-black bg-[var(--main-bg)] w-full mt-5 '>
                <div className="flex justify-between font-bold text-xl">
                    <h2 >סה"כ לתשלום :</h2>
                    <h2>{Cart.totalPrice} ₪</h2>
                </div>
                <h5>כולל מע"מ</h5>
            </div>
            <MainButtons
                // ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold  mt-3  "}>שלח הזמנה</MainButtons>

            <MainButtons
                // ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold  mt-3  "}>שלם באמצעות PAYPAL</MainButtons>
                
        </div>
    )
}
