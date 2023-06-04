import React from 'react'
import ColorSpan from '../../../../../../Public/shop/components/colorSpan'
import { Icon } from '@iconify/react'
import SizeSpan from '../../../../../../Public/shop/components/sizeSpan'
import { useAppSelector } from '../../../../../../../features/hooks'

const Summary = () => {
    const product = useAppSelector((state) => state.productFrom)
    const gridTitles = [

        { title: "חברה", value: product.basicProduct?.brand },
        { title: "הנחה", value: product.basicProduct?.reduction_p + "%" },
        { title: "מחיר קנייה", value: product.basicProduct?.base_price + "₪" },
        { title: "מחיר בחנות", value: product.basicProduct?.selling_price + "₪" },
        // { title: "סטטוס", value: ' <StatusBadge active={active} />' },
    ]
    return (

        <section dir='rtl' className='space-y-4'>
            <div className='flex justify-between'>

                {/* <h3 className=' text-lg font-semibold'>2999$</h3> */}
                <div>
                    <h1 className=' text-lg font-semibold'>{product.basicProduct?.name}</h1>
                    <p className='w-1/2'>{product.basicProduct?.description}</p>
                </div>

                <img src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" className='h-[200px] w-[290px]' />
            </div>

            <div>
                <h4 className='text-base font-semibold'>שפות </h4>
                <div dir="ltr" className='flex justify-end space-x-2'>
                    {product.translations.fr && <Icon icon="flag:fr-4x3" />}
                    {product.translations.en && <Icon icon="flag:us-4x3" />}

                </div>
            </div>
            <h4 className='text-base font-semibold'>צבעים:</h4>
            <div dir="ltr" className='flex justify-end space-x-2'>
                {
                    product.specifications.map(item => (
                        < ColorSpan color={item.color} chooseMe={() => { }} />
                    ))
                }
                {/* 
                <ColorSpan color='red' />
                <ColorSpan color='red' />
                <ColorSpan color='red' /> */}
            </div>
            <h4 className='text-base font-semibold'>מידות:</h4>
            <div dir="ltr" className='flex justify-end space-x-2'>
            {
                    product.specifications.map(item => (
                        <SizeSpan title={item.size} chooseMe={() => { }} />
                    ))
                }
            </div>
            <h4 className='text-base font-semibold'>עובי:</h4>
            <div dir="ltr" className='flex justify-end space-x-2'>
            {
                    product.specifications.map(item => (
                        <SizeSpan title={item.thicknes} chooseMe={() => { }} />
                    ))
                }
            </div>
            <h4 className='text-base font-semibold'>קיעור:</h4>
            <div dir="ltr" className='flex justify-end space-x-2'>
            {
                    product.specifications.map(item => (
                        <SizeSpan title={item.curve} chooseMe={() => { }} />
                    ))
                }
            </div>
            <h4 className='text-base font-semibold'> סה"כ כמות :</h4>
            <div className="grid grid-cols-4 grid-rows-1 gap-5 ">
                {gridTitles.map((item, i) => {
                    return (<div key={i + 158} className="rounded-md bg-gray-100 h-16 px-3 ">
                        <h3 className='text-lg font-bold'>{item.title}</h3>
                        <div className='text-lg semi-bold flex capitalize '>{item.value}</div>
                    </div>)
                })}
            </div>

        </section>
    )
}

export default Summary