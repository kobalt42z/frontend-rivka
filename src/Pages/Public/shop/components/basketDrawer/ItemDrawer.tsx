/*
*props: img , alt , title , price
 */
import React, { useEffect, FC } from 'react'
import { useAppDispatch } from '../../../../../features/hooks';
import { removeFromCart } from '../../../../../features/Slices/cart.slice';
import Rating from '../../../../../components/ratings/Rating';
import { Dropdown } from 'flowbite-react';
import { Icon } from '@iconify/react';
import { UseToggle } from 'sk-use-toggle/src';
import Counter from '../../../../../components/counter/Counter';
import DropDown from '../../../../../components/dropDown/DropDown';


interface ItemDrawerProps {
    id: string;
    img: string;
    alt: string;
    title: string;
    price: number;
    count: number;
    addOne: () => void;
    subOne: () => void;
    className?: string;

}
export const ItemDrawer: FC<ItemDrawerProps> = ({ img, alt, title, price, count, addOne, subOne, id, className }) => {
    const [amount, setAmount] = React.useState(count)
    const [counter, setCounter] = React.useState<number>(0)

    const dispatch = useAppDispatch()
    useEffect(() => {
        setAmount(amount)

    }, [count])

    useEffect(() => {



    }, [amount])


    return (

        <div className='flex space-x-2 space-x-reverse w-full my-2'>
            <img src={img} alt="" className='w-[90px] h-[90px]' />
            <div className='w-full'>
                <div>
                    <h3>בסט סלר</h3>
                    <h3>בסט סלר</h3>
                    <Rating avrage={4} />
                </div>
                <div className='flex w-[70%] justify-between space-x-3 space-x-reverse pt-5'>
                    <DropDown  >
                        <li>L</li>
                        <li>X</li>
                        <li>XL</li>
                        <li>XX</li>
                        <li>XXL</li>
                    </DropDown>
                    <Counter counter={counter}
                        onClickMinus={() => setCounter(counter - 1)}
                        onClickPlus={() => setCounter(counter + 1)}
                    />
                </div>
            </div>
            <div className='pl-3'>
                <Icon icon="ph:x" width={20} height={20} />
            </div>
        </div>
    )
}
