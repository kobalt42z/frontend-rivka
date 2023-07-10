import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Badge, Tooltip } from 'flowbite-react'
import React, { FC, useState } from 'react'
import { productFromDB } from '../../../../../interfaces'
import StatusBadge from '../../../../../components/Badges/StatusBadge'
import { Link } from 'react-router-dom'



interface props {
    data: productFromDB
}
const ProductRowBody: FC<props> = ({ data }) => {
    const {
        imgUrl,
        categorys,
        name,
        description,
        translations,
        brand,
        reduction_p,
        selling_price,
        base_price,
        active,
        id
    } = data
    let sizes: string = "";
    let curves: string;
    let thickness: string;
    let colors = ""

    data.Specification.forEach(spec => {
        sizes += spec.size ?? spec.curve + ", "
        curves += spec.curve + ", "
        thickness += spec.thickness + ", "
    })
    let lang = ["he"]

    let titles = [name]
    let descriptions = [description]

    translations.forEach(item => {
        lang.push(item.language)
        titles.push(item.name)
        descriptions.push(item.description)
    });
    const colorBoxes = data.Specification.map(({ color }, i) => {



        if (color) return (
            <Tooltip dir='ltr' content={color}>
                <div className='w-5 h-5 rounded-full '
                    style={{ backgroundColor: `${color}` }} >
                </div>
            </Tooltip>
        )
    })
    const gridTitles = [
        { title: "מידות", value: sizes },
        { title: "צבעים", value: colorBoxes },
        { title: "חברה", value: brand },
        { title: "הנחה", value: reduction_p + "%" },
        { title: "מחיר קנייה", value: base_price + "₪" },
        { title: "מחיר בחנות", value: selling_price + "₪" },
        { title: "סטטוס", value: <StatusBadge active={active} /> },
        { title: "מזהה מוצר", value: <Tooltip content=" לצפייה במוצר"> <Link target='_blank' to={`/product/${id}`} className='text-blue-600 underline'>{id}</Link></Tooltip> },
    ]
    const [current, setCurrent] = useState(0)

    const increment = () => {
        if (current < translations.length) setCurrent(current + 1);
    }
    const decrement = () => {
        if (current > 0) setCurrent(current - 1);
    }

    React.useEffect(() => {
        console.log(sizes, typeof sizes);

    }, [])

    return (
        <>
            <tr className='col-span-full border-b-2 '  >
                <td colSpan={9} className='p-10 space-y-5'>
                    <div dir={current != 0 ? 'ltr' : 'rtl'} className='flex justify-center flex-row-reverse'>
                        <div className='w-5/12'>
                            <div className='text-start'>
                                <h2 className='text-lg font-bold'>
                                    <span className=' capitalize text-lg font-semibold'>{titles[current]}</span>
                                </h2>
                                <div className="flex min-h-[10vh]">

                                    <p className='w-[80%]  text-base'>{
                                        descriptions[current]
                                    }
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='w-6/12 flex justify-end px-5'>
                            <img src={imgUrl} alt="" className='w-[300px] h-auto rounded-md' />
                        </div>
                    </div>
                    <div dir='rtl' className='pt-5 w-full flex flex-row-reverse justify-center space-x-10'>
                        <button className='' onClick={increment}><ChevronLeftIcon className="h-6 w-6 text-gray-500" />
                        </button>
                        <p className='uppercase'>{lang[current]}</p>
                        <button className='' onClick={decrement}><ChevronRightIcon className="h-6 w-6 text-gray-500" /></button>

                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 gap-5 ">
                        {gridTitles.map((item, i) => {
                            return (<div key={i + 158} className="rounded-md bg-gray-100 h-16 px-3 ">
                                <h3 className='text-lg font-bold'>{item.title}</h3>
                                <div className='text-lg semi-bold flex capitalize truncate '>{item.value}</div>
                            </div>)
                        })}
                    </div>

                    <div className='flex items-center py-2'>
                        <h3 className='text-lg font-bold' >קטגוריות:</h3>
                        {
                            categorys.map((item, i) => {

                                return (
                                    <span className="bg-gray-100 text-gray-800 text-xs text-center font-medium mr-2 w-[40px] h-[20px] rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">{item.name}</span>
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