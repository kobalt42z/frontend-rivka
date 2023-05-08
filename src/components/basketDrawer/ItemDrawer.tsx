/*
*props: img , alt , title , price
 */
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../features/hooks';
import { removeFromCart } from '../../features/Slices/cart.slice';

interface ItemDrawerProps {
    id:string;
    img: string;
    alt: string;
    title: string;
    price: number;
    count:number;
    addOne:()=>void;
    subOne:()=>void;
    
}
export const ItemDrawer = ({ img, alt, title, price ,count,addOne,subOne,id}: ItemDrawerProps) => {
    const [amount, setAmount] = React.useState(count)
    const dispatch = useAppDispatch()
    useEffect(()=>{
      setAmount(amount)
        
    },[count])

    useEffect(()=>{
        console.log(amount);
        
          
      },[amount])

    
    return (
        <div className='flex rtl:flex-row-reverse space-x-5 justify-center items-center text-center text-black capitalize'>

            <img className='w-[100px] h-[100px]' src={img} alt={alt} />

            <div className='space-y-1'>
                <h2 className='font-bold '>{title}</h2>

                <h4 className='font-thin'> <button className='px-[8px] py-1 bg-gray-200 mx-2 rounded'
                    onClick={addOne}
                >+</button>
                    {count}
                    <button className='px-[10px] py-1 mx-1 bg-gray-200 rounded' onClick={subOne}>-</button>יחידה</h4>


                <h4 className='font-semibold text-lg'>{price} ש"ח</h4>
                <button 
                onClick={()=>dispatch(removeFromCart(id))}
                className='text-white rounded bg-[var(--main-btn-color)] py-1 px-2'>הסר מהסל</button>
                {/* need to apply on global store of basket  */}
            </div>
        </div>
    )
}
