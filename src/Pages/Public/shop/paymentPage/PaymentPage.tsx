import React from 'react'
import MainButtons from '../../../../components/buttons/MainButtons'

const PaymentPage = () => {
    return (
        <div dir='rtl' className='h-[70vh] pt-3'>
            <h1 className="font-bold text-lg"> בחירת אמצעי תשלום </h1>

            <div className=' flex flex-col items-center'>
                <MainButtons
                    // ClickAction={() => dispatch(addToCart(data))}
                    custom={"w-[85%] text-black font-bold  mt-3  "}>שלח הזמנה</MainButtons>

                <MainButtons
                    // ClickAction={() => dispatch(addToCart(data))}
                    custom={"w-[85%] text-black font-bold  mt-3  "}>שלם באמצעות PAYPAL</MainButtons>
            </div>
        </div>
    )
}

export default PaymentPage