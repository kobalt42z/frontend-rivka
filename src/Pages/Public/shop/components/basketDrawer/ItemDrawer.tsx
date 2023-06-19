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


interface ItemDrawerProps {
    data: ProductInCart
    className?: string;

}
export const ItemDrawer: FC<ItemDrawerProps> = ({ data: { count, name, imgUrl, brand, spec }, className }) => {
    const [amount, setAmount] = React.useState(count)
    const [counter, setCounter] = React.useState<number>(0)

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
                            <Rating avrage={4} />
                            <h3 className='font-bold'>655 ש"ח</h3>
                        </div>


                    </div>

                </div>
            </div>
            <div dir='ltr' className='flex justify-between w-full pt-5'>
                <div className='flex justify-around w-[80%]'>

                    <div className="flex items-center justify-center space-x-3">
                        <h4 className=' p-3  underline'>L</h4>
                        <h4 className=' p-3  underline'>XS</h4>
                        <h4 className=' h-5 w-5 rounded-full border-2 underline bg-red-500 '></h4>
                    </div>

                    <Counter counter={counter}
                        onClickMinus={() => setCounter(counter - 1)}
                        onClickPlus={() => setCounter(counter + 1)}
                    />
                </div>

                <div className='flex items-center justify-center border-2 rounded-full h-8 w-8  mr-5'>
                    <Icon icon="ph:trash" width={18} height={18} />
                </div>
            </div>
            <ClassicHr />


        </div>
    )
}
