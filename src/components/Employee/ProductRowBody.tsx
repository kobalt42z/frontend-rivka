import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { FC, useState } from 'react'
import { productFromDB } from '../../interfaces'


interface props {
    data: productFromDB
}
const ProductRowBody: FC<props> = ({ data }) => {
    const { categorys, name, description, translations } = data
    const lang = ["עברית ", "Francais", "English"]
    const title = [
        name,
        translations[0].name || " ",
        translations[1].name || " "
    ]
    const descriptions = [
        description,
        translations[0].description,
        translations[1].description
    ]
    const gridTitles = [
        { title: "מידות", value: "xs/sm/md/lg/xl" },
        { title: "צבעים", value: "red / blue /yellow" },
        { title: "חברה", value: "nike" },
        { title: "הנחה", value: "60%" },
        { title: "מחיר קנייה", value: "150₪" },
        { title: "מחיר בחנות", value: "200₪" },
        { title: "סטטוס", value: "200₪" },
        { title: "מקט", value: "200₪" },
    ]
    const [current, setCurrent] = useState(0)

    const increment = () => {
        if (current < 2) setCurrent(current + 1);
    }
    const decrement = () => {
        if (current > 0) setCurrent(current - 1);
    }


    return (
        <>
            <tr className='col-span-full border-b-2 '  >
                <td colSpan={9} className='p-10 space-y-5'>
                    <div className='flex justify-center '>
                        <div className='w-1/2'>
                            <div className='text-start'>
                                <h2 className='text-lg font-bold'>
                                    <span className=' capitalize text-lg font-semibold'>{title[current]}</span>
                                </h2>
                                <div className="flex min-h-[10vh]">

                                    <p className='w-[80%]  text-base'>{
                                        descriptions[current]
                                    }
                                    </p>
                                </div>
                            </div>
                            <div className='pt-5 w-[80%] flex flex-row-reverse justify-center space-x-10'>
                                <button className='' onClick={increment}><ChevronLeftIcon className="h-6 w-6 text-gray-500" />
                                </button>
                                <p>{lang[current]}</p>
                                <button className='' onClick={decrement}><ChevronRightIcon className="h-6 w-6 text-gray-500" /></button>

                            </div>
                        </div>

                        <div className='w-1/4'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdyPe5ZbVc9PTRJJiFgHZ9LN0znfiPJhBAg&usqp=CAU" alt="" className='w-[300px] h-[200px]' />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 gap-5 ">
                        {gridTitles.map((item, i) => {
                            return (<div key={i + 158} className="rounded-md bg-gray-100 h-16 px-3 ">
                                <h3 className='text-lg font-bold'>{item.title}</h3>
                                <h4 className='text-lg semi-bold'>{item.value}</h4>
                            </div>)
                        })}
                    </div>

                    <div className='flex py-2'>
                        <h3 className='text-lg font-bold' >קטגוריות:</h3>
                        {
                            categorys.map((item, i) => {

                                return (
                                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{item.name}</span>
                                )
                            })
                        }
                    </div>
                </td>
            </tr>
        </>
    )
}

export default ProductRowBody