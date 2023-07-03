/*
*props: img , alt , title , price
 */
import React, { useEffect, FC } from 'react'
import { useAppDispatch } from '../../../../../features/hooks';
import Rating from '../../../../../components/ratings/Rating';
import { Dropdown } from 'flowbite-react';
import { Icon } from '@iconify/react';
import { UseToggle } from 'sk-use-toggle/src';
import Counter from '../../../../../components/counter/Counter';
import DropDown from '../../../../../components/dropDown/DropDown';
import ClassicHr from '../../../../../components/HR/ClassicHr';
import { ProductInCart } from '../../../../../interfaces';
import { decrement, increment, removeFromCart } from '../../../../../features/Slices/cart.slice';


interface ItemDrawerProps {
    data: ProductInCart
    className?: string;

}
export const ItemDrawer: FC<ItemDrawerProps> = ({ data: { spec, count, basicProduct: { name, imgUrl, brand, id, selling_price } }, className }) => {
    const [amount, setAmount] = React.useState(count)


    const dispatch = useAppDispatch()
    useEffect(() => {
        setAmount(amount)
    }, [count])

    useEffect(() => {



    }, [amount])


    return (
        <div className='flex flex-col items-end'>
            <div dir='rtl' className='flex space-x-2 space-x-reverse w-full my-2'>
                <img src={imgUrl} alt="" className='w-[90px] h-[90px]' />
                <div className='w-full'>
                    <div className='flex flex-col '>
                        <h3>{name} </h3>
                        <h3>{brand}</h3>

                        <div className="flex items-center justify-between">
                            <h3 className='font-bold'>{selling_price * count} ש"ח</h3>
                        </div>


                    </div>

                </div>
            </div>
            <div dir='ltr' className='flex justify-between w-full pt-5'>
                <div className='flex justify-around w-[80%]'>

                    <div className="flex items-center justify-center space-x-3">
                        <h4 className=' p-3  underline'>{spec.size}</h4>
                        <h4 className=' p-3  underline'>{spec.curve}</h4>
                        <h4 className=' p-3  underline'>{spec.thickness}</h4>
                        <h4 className=' p-3  underline'>{spec.length}</h4>


                        {spec.color &&
                            <h4 className=' h-5 w-5 rounded-full border-2 underline ' style={{ background: spec.color ?? "#FFFF" }}></h4>
                        }
                    </div>

                    <Counter counter={count}
                        onClickMinus={() => spec.id && dispatch(decrement(spec.id))}
                        onClickPlus={() => spec.id && dispatch(increment(spec.id))}
                    />
                </div>

                <div className='flex items-center justify-center border-2 rounded-full h-8 w-8  mr-5'>
                    <Icon icon="ph:trash" width={18} height={18}
                    className='cursor-pointer'
                    onClick={() => spec.id && dispatch(removeFromCart(spec.id))} />
                </div>
            </div>
            <ClassicHr />


        </div>
    )
}
