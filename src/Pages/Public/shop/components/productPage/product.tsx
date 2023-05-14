import Select from 'react-select/'
import React, { useEffect, useRef, useState } from 'react'
import makeAnimated from "react-select/animated";
import { useForm } from 'react-hook-form';
import productTestImage from '../../../../../assets/testProd.png'
import ShopItem from '../ShopItem';
import { Button, Tooltip } from 'flowbite-react';
import { ArrowUturnLeftIcon, BuildingStorefrontIcon, ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon, ReceiptRefundIcon } from '@heroicons/react/24/outline';
import Carusel from '../../../../../components/carusel/Carusel';
import { useFindProductByIdQuery } from '../../../../../features/API/Products.Api';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFound } from '../../../../404/NotFound';
import LoadingScreen from '../../../../../components/Loading/LoadingScreen';
import { IF } from '../../../../../components/special/if';
import MainButtons from '../../../../../components/buttons/MainButtons';
import { addToCart } from '../../../../../features/Slices/cart.slice';
import { useAppDispatch } from '../../../../../features/hooks';

export const ProductPage = () => {
    const dispatch = useAppDispatch()
    const [currenPosition, setCurrentPosition] = useState<number>(0);
    const caruselRef = useRef<HTMLDivElement>(null);
    const caruselItemRef = useRef<HTMLDivElement>(null);

    const [selectedColor, setSelectedColor] = useState(0);


    const animatedComponents = makeAnimated();
    const [counter, setCounter] = useState(1)



    interface input {
        sizes: string[]
    }
    const { setError, setValue, register, clearErrors, handleSubmit, getValues, formState: { errors, isValid } } = useForm<input>({

    });

    const params = useParams()
    if (!params.id) return (<NotFound />)
    const { isError, isFetching, isSuccess, data, error: e } = useFindProductByIdQuery(params.id)
    const error: any = e; // ! status not exist in type ? 
    if (isError && error.status == 404) return (<><NotFound /> {params.id} </>)

    // useEffect(() => {


    // }, [])
    // { value: '', label: 'ללא' },
    const sizes = data?.sizes.map(size => ({ value: size, label: size }))
    const curves = data?.curves.map(size => ({ value: size, label: size }))
    const thinkness = data?.thickness.map(size => ({ value: size, label: size }))

    if (isFetching) return (<LoadingScreen />);
    if (data) return (
        <div className='container flex flex-col items-center space-y-5 min-h-[80vh] justify-center p-5  md:pt-0'>
            <img src={data.imgUrl} alt="" className='w-full md:w-10/12 ' />
            <div className='text-center'>
                <h2 className='text-lg capitalize font-semibold '>{data.name}</h2>
                <h4 className='text-base capitalize font-normal '>{data.brand}</h4>
            </div>
            <p className='w-full md:w-10/12 text-center'>{data.description}</p>
            <div>
                <div className='flex space-x-3 '>

                    {data.colors.length > 0 &&
                        data.colors.map((item, id) => {
                            return (
                                <Tooltip content={`${item}`}>
                                    <div key={id} className={selectedColor == id ? `w-7 h-7 px-2  border-black border-4` : `w-7 h-7 px-2  `} style={{ background: `${item}` }}
                                        onClick={() => setSelectedColor(id)}
                                    ></div>
                                </Tooltip>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full md:flex md:flex-row-reverse md:justify-around'>
                <div dir='rtl' className='space-y-5'>
                    <IF condition={data.sizes && data?.sizes.length > 0}><div className='w-full md:w-2/5'>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מידות</label>
                        <Select
                            closeMenuOnSelect={false}
                            placeholder='מידות ...'
                            components={animatedComponents}
                            // defaultValue={sizes[0]}
                            isMulti
                            isDisabled={!data.sizes || data.sizes.length === 0}
                            options={sizes}
                            onChange={(choice) => setValue('sizes', choice.map((item: any) => item.value))}
                        />
                    </div ></IF>
                    <IF condition={data.thickness && data?.thickness.length > 0}> <div className='w-full md:w-2/5'>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">עובי</label>
                        <Select
                            closeMenuOnSelect={false}
                            placeholder='עובי ...'
                            components={animatedComponents}
                            // defaultValue={sizes[0]}
                            isMulti
                            options={thinkness}
                            onChange={(choice) => setValue('sizes', choice.map((item: any) => item.value))}
                        />
                    </div ></IF>
                    <IF condition={data.curves && data?.curves.length > 0}><div className='w-full md:w-2/5'>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">קיעור</label>
                        <Select
                            closeMenuOnSelect={false}
                            placeholder='קיעור ...'
                            components={animatedComponents}
                            // defaultValue={sizes[0]}
                            isMulti
                            options={curves}
                            onChange={(choice) => setValue('sizes', choice.map((item: any) => item.value))}
                        />
                    </div ></IF>

                </div>
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
                    <p dir='rtl' className='capitalize font-semibold '>
                        מחיר : {counter * data.selling_price} ₪
                    </p>
                </div>
            </div>
            <MainButtons
                ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold "}>הוסף לסל</MainButtons>
            <MainButtons
            // className='outline-red-300'
                ClickAction={() => dispatch(addToCart(data))}
                custom={"w-[85%] text-black font-bold  outline outline-[var(--main-btn-color)] bg-white "}>מעבר לקופה</MainButtons>
            {/* <Carusel firstObjectRef={caruselItemRef} dealay={2000} onlyPhone>
                <ShopItem imgUrl={productTestImage} ref={caruselItemRef}
                    title={'creme for earse'}
                    subtitle={'sun controle'}
                    price={150}
                    sale={0}
                    addToCart={() => console.log('he clicked on me ')
                    }
                    key={11}
                    className='md:w-1/4'
                    id='sss'
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
                    id='sss'
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
                    id='sss'
                />
                <ShopItem imgUrl={productTestImage}
                    title={'creme for earse'}
                    subtitle={'sun controle'}
                    price={350}
                    sale={0}
                    addToCart={() => console.log('he clicked on me ')
                    }
                    key={44}
                    className='md:w-1/4'
                    id='sss'
                />
            </Carusel> */}
            <div className=" space-y-10   border-2 border-solid px-16 py-10">
                <div className="flex flex-col justify-center items-center">
                    <ReceiptRefundIcon className="h-10 w-10 text-gray-500" />
                    <p className='capitalize text-base font-semibold'>ניתן להחזיר / להחליף את המוצר</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BuildingStorefrontIcon className="h-10 w-10 text-gray-500" />
                    <p className='capitalize text-base font-semibold'>איסוף מהחנות </p>
                </div>
            </div>


        </div>
    )
    else return (<NotFound />)
}
