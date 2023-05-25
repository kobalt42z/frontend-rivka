import React from 'react'
import { ItemDrawer } from '../basketDrawer/ItemDrawer'
import { addToCart, subItem } from '../../../../../features/Slices/cart.slice'
import { useAppDispatch, useAppSelector } from '../../../../../features/hooks'
import { productFromDB } from '../../../../../interfaces'
import MainButtons from '../../../../../components/buttons/MainButtons'
import ClassicHr from '../../../../../components/HR/ClassicHr'
import { useNavigate } from 'react-router-dom'

export const MyCart = () => {
    const dispatch = useAppDispatch();
    const Cart = useAppSelector((state) => state.cart)
    const navigate = useNavigate()
    return (
        <div dir='rtl' className='container p-5 min-h-[80vh] flex flex-col items-center'>
            <h1 className='text-xl font '>סל קניות ({Cart.totalInCart} מוצרים)</h1>
            <p className='bg-[#F9F9F9] p-8 mb-2'>
                ניתן להחזיר את המוצר בתוך 30 יום מזמן הקנייה באריזה המקורית
            </p>
            {/* {Cart.products.map((product: productFromDB) => {
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
            })} */}

            <ItemDrawer
                className='bg-[#ffffff] px-10 py-5'
                id={"1234564"}
                img={"https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"}
                alt={"מוצר ניסיוני"}
                title={"מוצר ניסיוני"}
                price={355}
                key={5}
                count={3}
                addOne={() => dispatch(addToCart(product))}
                subOne={() => dispatch(subItem(product.id))}

            />
            <ItemDrawer
                className='bg-[#ffffff] px-10 py-5'
                id={"1234564"}
                img={"https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"}
                alt={"מוצר ניסיוני"}
                title={"מוצר ניסיוני"}
                price={355}
                key={5}
                count={3}
                addOne={() => dispatch(addToCart(product))}
                subOne={() => dispatch(subItem(product.id))}

            />
            <ItemDrawer
                className='bg-[#ffffff] px-10 py-5'
                id={"1234564"}
                img={"https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"}
                alt={"מוצר ניסיוני"}
                title={"מוצר ניסיוני"}
                price={355}
                key={5}
                count={3}
                addOne={() => dispatch(addToCart(product))}
                subOne={() => dispatch(subItem(product.id))}

            />
            <div className='  bg-[var(--main-bg)] w-full mt-5 '>
                <ClassicHr />
                <div className="flex mt-3 justify-between font-bold text-xl">
                    <h2 >סה"כ לתשלום :</h2>
                    <h2>{Cart.totalPrice} ₪</h2>
                </div>
                <h5>כולל מע"מ</h5>
            </div>
            {/* <MainButtons
                // ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold  mt-3  "}>שלח הזמנה</MainButtons>

            <MainButtons
                // ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold  mt-3  "}>שלם באמצעות PAYPAL</MainButtons> */}


            <div className='flex justify-end w-full'>
                <MainButtons
                    ClickAction={() =>navigate('/myCart/login')}
                    custom={"w-[90px] h-[32px] text-black font-bold box-shadow mt-3  "}>הבא</MainButtons>
            </div>
        </div>
    )
}
