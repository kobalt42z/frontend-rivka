import Select from 'react-select/'
import React, { useEffect, useRef, useState } from 'react'
import makeAnimated from "react-select/animated";
import { useForm } from 'react-hook-form';
import productTestImage from '../../../../../assets/testProd.png'
import ShopItem from '../ShopItem';
import { Button } from 'flowbite-react';
import { ArrowUturnLeftIcon, BuildingStorefrontIcon, ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon, ReceiptRefundIcon } from '@heroicons/react/24/outline';
import Carusel from '../../../../../components/carusel/Carusel';

export const ProductPage = () => {
    const [currenPosition, setCurrentPosition] = useState<number>(0);
    const caruselRef = useRef<HTMLDivElement>(null);
    const caruselItemRef = useRef<HTMLDivElement>(null);

    const nextElement = () => {
        if (!caruselRef.current || !caruselItemRef.current) return;
        const caruSize = caruselRef.current.scrollWidth, itemSize = caruselItemRef.current.offsetWidth
        const newPosition = currenPosition < (caruSize - itemSize) ? currenPosition + itemSize : 0
        setCurrentPosition(newPosition)
        console.log(currenPosition, caruSize);
    }
    const prevElement = () => {
        if (!caruselRef.current || !caruselItemRef.current) return;
        const caruSize = caruselRef.current.scrollWidth, itemSize = caruselItemRef.current.offsetWidth
        const newPosition = currenPosition > 0 ? currenPosition - itemSize : caruSize - itemSize;
        setCurrentPosition(newPosition)
        console.log(currenPosition, caruSize);
    }


    const animatedComponents = makeAnimated();
    const [counter, setCounter] = useState(0)
    const sizes = [
        { value: '', label: 'ללא' },
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: '1', label: '1' },

    ].concat(
        Array.from({ length: 14 }, (_, i) => ({
            value: (i + 2).toString(),
            label: (i + 2).toString(),
        })))


    interface input {
        sizes: string[]
    }
    const { setError, setValue, register, clearErrors, handleSubmit, getValues, formState: { errors, isValid } } = useForm<input>({


    });

    useEffect(() => {
        if (!caruselRef.current || !caruselItemRef.current) return;
        caruselRef.current.scroll({
            top: 0,
            left: currenPosition,
            behavior: "smooth"
        })
    }, [currenPosition])

    return (
        <div className='container flex flex-col items-center space-y-5 min-h-[80vh] justify-center p-5  md:pt-0'>
            <img src={productTestImage} alt="" className='w-full md:w-10/12 ' />
            <h2 className='text-lg capitalize font-semibold '>ime the title of the product</h2>
            <p className='w-full md:w-10/12 text-center'>ime the description Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur eum vero assumenda, maxime ipsam natus non cumque, sint facilis labore reiciendis</p>
            <div className='w-full md:flex md:flex-row-reverse md:justify-around'>
                <div className='w-full md:w-2/5'>
                    {/* <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מידות</label> */}
                    <Select
                        closeMenuOnSelect={false}
                        placeholder='choose a size ...'
                        components={animatedComponents}
                        // defaultValue={sizes[0]}
                        isMulti
                        options={sizes}
                        onChange={(choice) => setValue('sizes', choice.map((item: any) => item.value))}
                    />
                </div >
                <div className="flex justify-evenly  md:w-2/5 pt-5">
                    <div className='flex justify-between w-1/3' >
                        <Button size={'xxs'} outline color={'light'} onClick={() => setCounter(counter + 1)} >
                            <PlusIcon className="h-4 w-6 text-gray-500" />
                        </Button>
                        {counter}
                        <Button size={'xxs'} outline color={'light'} onClick={() => setCounter(counter > 0 ? counter - 1 : counter)} >
                            <MinusIcon className="h-4 w-6 text-gray-500" />
                        </Button>
                    </div>
                    <p className='capitalize font-semibold'>
                        price : {258} ₪
                    </p>
                </div>
            </div>
            <Carusel firstObjectRef={caruselItemRef} dealay={2000} onlyPhone>
                <ShopItem imgUrl={productTestImage} ref={caruselItemRef}
                    title={'creme for earse'}
                    subtitle={'sun controle'}
                    price={150}
                    sale={0}
                    addToCart={() => console.log('he clicked on me ')
                    }
                    key={11}
                    className='md:w-1/4'
                />
                <ShopItem imgUrl={productTestImage}
                    title={'creme for earse'}
                    subtitle={'sun controle'}
                    price={250}
                    sale={0}
                    addToCart={() => console.log('he clicked on me ')
                    }
                    key={22}
                    className='md:w-1/4'
                />
                <ShopItem imgUrl={productTestImage}
                    title={'creme for earse'}
                    subtitle={'sun controle'}
                    price={350}
                    sale={0}
                    addToCart={() => console.log('he clicked on me ')
                    }
                    key={33}
                    className='md:w-1/4'
                />
                <ShopItem imgUrl={productTestImage}
                    title={'creme for earse'}
                    subtitle={'sun controle'}
                    price={350}
                    sale={0}
                    addToCart={() => console.log('he clicked on me ')
                    }
                    key={33}
                    className='md:w-1/4'
                />
            </Carusel>
            <div className=" space-y-10   border-2 border-solid px-16 py-10">
                <div className="flex flex-col justify-center items-center">
                    <ReceiptRefundIcon className="h-10 w-10 text-gray-500" />
                    <p className='capitalize text-base font-semibold'>retour ou echange facile</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BuildingStorefrontIcon className="h-10 w-10 text-gray-500" />
                    <p className='capitalize text-base font-semibold'>retrait en boutique</p>
                </div>
            </div>


        </div>
    )
}
