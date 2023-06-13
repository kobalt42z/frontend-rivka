import Select from 'react-select/'
import React, { useEffect, useRef, useState } from 'react'
import makeAnimated from "react-select/animated";
import { useForm } from 'react-hook-form';
import productTestImage from '../../../../../assets/testProd.png'
import ShopItem from '../ShopItem';
import { Accordion, Button, Tooltip } from 'flowbite-react';
import { ArrowUturnLeftIcon, BuildingStorefrontIcon, ChevronDoubleDownIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon, ChevronUpIcon, MinusIcon, PlusIcon, ReceiptRefundIcon } from '@heroicons/react/24/outline';
import Carusel from '../../../../../components/carusel/Carusel';
import { useFindProductByIdQuery } from '../../../../../features/API/Products.Api';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFound } from '../../../../404/NotFound';
import LoadingScreen from '../../../../../components/Loading/LoadingScreen';
import { IF } from '../../../../../components/special/if';
import MainButtons from '../../../../../components/buttons/MainButtons';
import { addToCart } from '../../../../../features/Slices/cart.slice';
import { useAppDispatch } from '../../../../../features/hooks';
import SizeSpan from '../sizeSpan';
import ColorSpan from '../colorSpan';
import ClassicHr from '../../../../../components/HR/ClassicHr';
import { UseToggle } from 'sk-use-toggle/src';
import Comments from '../comments/comments';
import { Icon } from '@iconify/react';
import Star from '../../../../../components/ratings/Star';
import Rating from '../../../../../components/ratings/Rating';
import AddCommentForm from '../comments/addCommentForm';

export const ProductPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [currenPosition, setCurrentPosition] = useState<number>(0);
    const caruselRef = useRef<HTMLDivElement>(null);
    const caruselItemRef = useRef<HTMLDivElement>(null);
    const [showComment, toggleComment] = UseToggle();
    const [showAddComment, toggleAddComment] = UseToggle();

    const [selectedColor, setSelectedColor] = useState(0);


    const animatedComponents = makeAnimated();
    const [counter, setCounter] = useState(1)



    interface input {
        sizes: string[]
    }
    const params = useParams()
    // if (!params.id) return (<NotFound />)
    const { isError, isFetching, isSuccess, data, error: e } = useFindProductByIdQuery(params.id ?? "")
    const error: any = e; // ! status not exist in type ? 
    // if (isError && error.status == 404) return (<><NotFound /> {params.id} </>)

    // if (isFetching) return (<LoadingScreen />);
    if (data) return (
        <div dir='rtl' className='container flex flex-col items-center space-y-3 min-h-[80vh] justify-center p-5 pb-0 md:pt-0'>
            <img src={data?.imgUrl} alt="" className='w-full md:w-10/12 box-shadow' />
            <div className="w-full flex justify-between ">
                <div className='text-right w-full'>
                    <h2 className='text-lg capitalize font-semibold '>{data.name}</h2>
                    <h4 className='text-base capitalize font-normal '>{data.brand}</h4>
                </div>
                <div className='text-right w-full'>
                    <h4 className='text-base capitalize font-normal text-left line-through  '>{data.selling_price + ' ש"ח'}</h4>
                    <h4 className='text-base capitalize font-normal text-left  '>{data.selling_price - ((data.reduction_p / 100) * data.selling_price) + ' ש"ח'}</h4>
                </div>
            </div>
            <p className='w-full md:w-10/12 text-right'>{' ואני טיפה יותר ארוך לבדיקה בוא נראה מה זה נותן אני תאור מוצר מעניין ביותר'}</p>
            <div className='w-full'>
                <h3 className='font-semibold'>מידה</h3>
                <div className='flex space-x-reverse space-x-2  '>
                    {
                        data?.Specification && data.Specification.map(({ size }) => (
                            <SizeSpan title={size} />
                        ))
                    }
                </div>
            </div>
            <div className='w-full'>
                <h3 className='font-semibold'>קיעור</h3>
                <div className='flex space-x-reverse space-x-2  '>
                    {
                        data?.Specification && data.Specification.map(({ curve }) => (
                            <SizeSpan title={curve} />
                        ))
                    }
                </div>
            </div>
            <div className='w-full'>
                <h3 className='font-semibold'>מידה</h3>
                <div className='flex space-x-reverse space-x-2  '>
                    {
                        data?.Specification && data.Specification.map(({ thickness }) => (
                            < SizeSpan title={thickness} />
                        ))
                    }
                </div>
            </div>
            <div className='w-full'>
                <h3 className='font-semibold'>צבעים</h3>
                <div className='flex space-x-reverse space-x-2  '>
                    {
                        data?.Specification && data.Specification.map(({ color }) => (
                            <ColorSpan color={color} />

                        ))
                    }


                </div>
            </div>
            <div className='pt-5 w-full md:flex md:flex-row-reverse md:justify-around'>
                <h3 className='font-semibold'>כמות</h3>
                <div className="  md:w-2/5 pt-5">
                    <div className='flex justify-between items-center w-1/4 border-2' >
                        <Button size={'xxs'} outline color={'light'} onClick={() => setCounter(counter + 1)} className='rounded-none border-0'>
                            <PlusIcon className="h-6 w-4 text-gray-500" />
                        </Button>
                        {counter}
                        <Button size={'xxs'} outline color={'light'} onClick={() => setCounter(counter > 1 ? counter - 1 : counter)} className='rounded-none border-0' >
                            <MinusIcon className="h-6 w-4 text-gray-500" />
                        </Button>
                    </div>
                    <div dir='ltr'>
                        <p dir='rtl' className='capitalize font-semibold w-1/2 text-right '>
                            מחיר : {counter * 150} ₪
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex  flex-col items-end space-y-3 pb-2">
                <MainButtons
                    ClickAction={() => dispatch(addToCart(data))}
                    custom={" font-bold w-[171px]  h-[38px] "}>הוסף לסל
                </MainButtons>
                <MainButtons
                    // className='outline-red-300'
                    ClickAction={() => navigate("/mycart")}
                    custom={"w-[170px]  h-[38px]  font-bold    bg-white border-[2px] border-mainGreen  "}>מעבר לקופה</MainButtons>
            </div>
            <ClassicHr />
            <div className='text right w-full'>
                <h2 className='font-semibold text-shadow text-lg'>ביקורת הלקוח (+{46})</h2>
                <div dir='ltr' className='flex '>
                    <Rating avrage={5.07} />

                </div>
            </div>
            {showAddComment && <AddCommentForm  currentProduct={data.id} toggleClose={toggleAddComment}/>}
            <ClassicHr />
            <div className='flex justify-between w-full px-3'>
                <button onClick={toggleComment} className='flex flex-row-reverse  items-center'>
                    {showComment ?
                        <ChevronDownIcon className='w-6 h-6 mx-2 text-shadow' />
                        :
                        <ChevronUpIcon className='w-6 h-6 mx-2 text-shadow' />
                    }
                    <span className='text-shadow text-lg font-semibold'>תגובות</span>

                </button>
                {!showAddComment &&
                    <MainButtons ClickAction={toggleAddComment} custom=' flex items-center p-1 px-2'>
                    הוסיפי תגובה
                    <Icon icon="ic:baseline-plus" className='mx-1' />
                </MainButtons>
                }
            </div>
            
            {showComment && <>
                <ClassicHr />
                <div className='w-full'>
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                    <div dir='ltr' className='py-3 flex justify-start space-x-2 '>
                        <div className="w-6 h-6 rounded-full  border-2 border-mainGreen  flex justify-center items-center">1</div>
                        <div className="w-6 h-6 rounded-full  border-2 flex justify-center items-center">2</div>
                        <div className="w-6 h-6 rounded-full  border-2 flex justify-center items-center">3</div>
                        <div className="w-6 h-6 rounded-full  border-2 flex justify-center items-center">4</div>
                    </div>
                </div>
            </>}
            <ClassicHr />


            <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-3 gap-y-10'>
                <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                    title={'testotest'}
                    subtitle={'miniTest'}
                    price={50}
                    sale={10}
                    addToCart={() => console.log("yay he click me ")
                    }
                    key={0}
                    id={"13542"}

                />
                <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                    title={'testotest'}
                    subtitle={'miniTest'}
                    price={50}
                    sale={10}
                    addToCart={() => console.log("yay he click me ")
                    }
                    key={0}
                    id={"13542"}

                />
                <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                    title={'testotest'}
                    subtitle={'miniTest'}
                    price={50}
                    sale={10}
                    addToCart={() => console.log("yay he click me ")
                    }
                    key={0}
                    id={"13542"}

                />
                <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                    title={'testotest'}
                    subtitle={'miniTest'}
                    price={50}
                    sale={10}
                    addToCart={() => console.log("yay he click me ")
                    }
                    key={0}
                    id={"13542"}

                />
                <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                    title={'testotest'}
                    subtitle={'miniTest'}
                    price={50}
                    sale={10}
                    addToCart={() => console.log("yay he click me ")
                    }
                    key={0}
                    id={"13542"}

                />
            </div>


        </div>
    )
    else return (<NotFound />)
}
