import Select from 'react-select/'
import React, { useEffect, useRef, useState } from 'react'
import makeAnimated from "react-select/animated";
import { useForm } from 'react-hook-form';
import productTestImage from '../../../../../assets/testProd.png'
import ShopItem from '../ShopItem';
import { Accordion, Button, Tooltip } from 'flowbite-react';
import { ArrowUturnLeftIcon, BuildingStorefrontIcon, ChevronDoubleDownIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon, ChevronUpIcon, MinusIcon, PlusIcon, ReceiptRefundIcon } from '@heroicons/react/24/outline';
import Carusel from '../../../../../components/carusel/Carusel';
import { useFindALlProductQuery, useFindProductByIdQuery, useFindeByCategoryQuery } from '../../../../../features/API/Products.Api';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFound } from '../../../../404/NotFound';
import LoadingScreen from '../../../../../components/Loading/LoadingScreen';
import { IF } from '../../../../../components/special/if';
import MainButtons from '../../../../../components/buttons/MainButtons';

import { useAppDispatch, useAppSelector } from '../../../../../features/hooks';
import SizeSpan from '../sizeSpan';
import ColorSpan from '../colorSpan';
import ClassicHr from '../../../../../components/HR/ClassicHr';
import { UseToggle } from 'sk-use-toggle/src';
import Comments from '../comments/comments';
import { Icon } from '@iconify/react';
import Star from '../../../../../components/ratings/Star';
import Rating from '../../../../../components/ratings/Rating';
import AddCommentForm from '../comments/addCommentForm';
import { usePagination } from "react-use-pagination";
import { SpecificationDto, SpecificationFromDB } from '../../../../../interfaces';
import { title } from 'process';
import Filters from './filters';
import { addToCart } from '../../../../../features/Slices/cart.slice';
import { decrementFilter, incrementFilter } from '../../../../../features/Slices/specFilter.slice';


export const ProductPage = () => {
    const [viewdElements, setViewdElements] = useState(0)
    const [selectedSpec, setSelectedSpec] = useState<SpecificationFromDB | null>(null)
    const perPage = 10
    const maxPage = 0

    const params = useParams()
    const {
        currentPage,
        totalPages,
        setNextPage,
        setPreviousPage,
        setPage,
        setPageSize,
        nextEnabled,
        previousEnabled,
        startIndex,
        endIndex,
    } = usePagination({ totalItems: maxPage })
    // !TOFIX:" pagination rendering for comments"
    const { isError, isFetching, isSuccess, data, error: e, refetch } = useFindProductByIdQuery({ id: params.id ?? "" })


    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [currenPosition, setCurrentPosition] = useState<number>(0);
    const caruselRef = useRef<HTMLDivElement>(null);
    const caruselItemRef = useRef<HTMLDivElement>(null);
    const [showComment, toggleComment] = UseToggle();
    const [showAddComment, toggleAddComment] = UseToggle();
    const specFilter = useAppSelector((state) => state.specFilter)
    const animatedComponents = makeAnimated();
    const counter = specFilter.count










    const buildPagination = (amount: number, commentPerPage: number = 10) => {

        const paginationArr: React.ReactNode[] = [];

        let i = 1;
        while (amount > 0) {
            const ii = i;
            paginationArr.push(<button key={i * 10555} className="w-6 h-6 rounded-full  border-2 border-mainGreen  flex justify-center items-center"
                onClick={() => setPage(ii - 1)
                }
            >{i}</button>)
            i++;
            amount -= 10;
        }
        return paginationArr;

    }

    if (!params.id) return (<NotFound />)



    const error: any = e; // ! status not exist in type ? 
    if (isError && error.status == 404) return (<><NotFound /> {params.id} </>)

    if (isFetching) return (<LoadingScreen />);
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
            {/* filters */}
            {data.Specification &&
                <Filters data={data.Specification} />}
            <div className='pt-5 w-full md:flex md:flex-row-reverse md:justify-around'>
                <h3 className='font-semibold'>כמות</h3>
                <div className="  md:w-2/5 pt-5">
                    <div className='flex justify-between items-center w-1/4 border-2' >
                        <Button size={'xxs'} outline color={'light'} onClick={() => dispatch(incrementFilter())} className='rounded-none border-0'>
                            <PlusIcon className="h-6 w-4 text-gray-500" />
                        </Button>
                        {counter}
                        <Button size={'xxs'} outline color={'light'} onClick={() => dispatch(decrementFilter())} className='rounded-none border-0' >
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
            <div className="w-full flex disabled:opacity-70  flex-col items-end space-y-3 pb-2">
                <MainButtons
                    ClickAction={() => specFilter.id && dispatch(addToCart({ data, spec: specFilter }))}
                    custom={" font-bold w-[171px]  h-[38px] "}
                    disabled={!specFilter.id}
                >
                    הוסף לסל
                </MainButtons>
                <MainButtons
                    // className='outline-red-300'
                    ClickAction={() => navigate("/mycart")}
                    custom={"w-[170px]  h-[38px]  font-bold    bg-white border-[2px] border-mainGreen  "}>מעבר לקופה</MainButtons>
            </div>
            <ClassicHr />
            <div className='text right w-full'>
                <h2 className='font-semibold text-shadow text-lg'>ביקורת הלקוח  ( {data.Comment.length} )</h2>
                <div dir='ltr' className='flex '>
                    <Rating showAvrage avrage={data.Comment.length > 0 ?
                        data.Comment.reduce((acc, { rating }) => acc + rating, 0) / data.Comment.length
                        :
                        0
                    } />

                </div>
            </div>
            {showAddComment && <AddCommentForm currentProduct={data.id} toggleClose={toggleAddComment} />}
            <ClassicHr />
            <div className='flex w-full justify-between px-3'>
                <div onClick={toggleComment} className='hover:cursor-pointer flex w-1/2 md:w-11/12  items-center'>
                    <span className='text-shadow text-lg font-semibold'>תגובות</span>
                    {showComment ?
                        <ChevronDownIcon className='w-6 h-6 mx-2 text-shadow' />
                        :
                        <ChevronUpIcon className='w-6 h-6 mx-2 text-shadow' />
                    }

                </div>
                {!showAddComment &&
                    <MainButtons ClickAction={toggleAddComment} custom='w-1/2 md:w-1/12 flex items-center p-1 px-1'>
                        הוסיפי תגובה
                        <Icon icon="ic:baseline-plus" className='mx-1' />
                    </MainButtons>
                }
            </div>

            {
                showComment && <>
                    <ClassicHr />
                    <div className='w-full'>
                        {/* <Comments /> */}
                        {data.Comment && data.Comment.slice(currenPosition, perPage).map(comment => {
                            return (
                                <Comments data={comment} />

                            )
                        })}
                        {data.Comment.length === 0 && <p>אין תגובות עדיין </p>}


                        <div dir='ltr' className='py-3 flex justify-start space-x-2 '>
                            {buildPagination(maxPage, perPage)}
                        </div>
                    </div>
                </>
            }
            <ClassicHr />
            <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-3 gap-y-10'>
                {
                    data.categorys[0].products.map(item => item.id !== params.id && <ShopItem imgUrl={item.imgUrl}
                        title={item.name}
                        subtitle={item.brand}
                        price={item.selling_price}
                        sale={item.reduction_p}
                        addToCart={() => console.log("yay he click me ")
                        }
                        key={item.id}
                        item_id={item.id}

                    />)
                }
            </div>
        </div >
    )
    else return (<NotFound />)
}
