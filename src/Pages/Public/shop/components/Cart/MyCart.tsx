import React from 'react'
import { ItemDrawer } from '../basketDrawer/ItemDrawer'
import { useAppDispatch, useAppSelector } from '../../../../../features/hooks'
import { productFromDB } from '../../../../../interfaces'
import MainButtons from '../../../../../components/buttons/MainButtons'
import ClassicHr from '../../../../../components/HR/ClassicHr'
import { useNavigate } from 'react-router-dom'

export const MyCart = () => {
    const dispatch = useAppDispatch();
    const Cart = useAppSelector((state) => state.cart)
    const navigate = useNavigate()
    const totalPrice = Cart.products.reduce(
        (acc, curr) => {
            acc += (curr.basicProduct.selling_price * curr.count)
            return acc
        }, 0)
    return (
        <div dir='rtl' className='container p-5 min-h-[80vh] flex flex-col items-center'>
            <h1 className='text-xl font '>סל קניות ({Cart.count} מוצרים)</h1>
            <p className='bg-[#F9F9F9] p-8 mb-2'>
                ניתן להחזיר את המוצר בתוך 30 יום מזמן הקנייה באריזתו המקורית
            </p>
            <div className='space-y-5'>
                {Cart.products.map((product) => {
                    return (
                        <ItemDrawer
                            data={product}
                        />)
                })}
            </div>


            <div className='  bg-[var(--main-bg)] w-full mt-5 '>
                {/* <ClassicHr /> */}
                <div className="flex mt-3 justify-between ">
                    <h5>לפני מע"מ</h5>
                    <h2>{totalPrice - totalPrice * 0.17} ₪</h2>
                </div>
                <div className="flex  justify-between font-bold text-xl">
                    <h2 >סה"כ לתשלום :</h2>
                    <h2>{totalPrice} ₪</h2>

                </div>

            </div>
            {/* <MainButtons
                // ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold  mt-3  "}>שלח הזמנה</MainButtons>

            <MainButtons
                // ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold  mt-3  "}>שלם באמצעות PAYPAL</MainButtons> */}


            <div className='flex justify-end w-full'>
                <MainButtons
                    ClickAction={() => navigate('/myCart/login')}
                    custom={"w-[90px] h-[32px] text-black font-bold box-shadow mt-3  "}>הבא</MainButtons>
            </div>
        </div>
    )
}
