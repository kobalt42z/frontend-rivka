import React, { MouseEventHandler, useState } from 'react'
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { productFromDB } from '../../../../../interfaces';
import CrudBtn from '../components/btns/CrudBtn';
import { dateFormatter } from '../../../../../functions';
import StatusBadge from '../../../../../components/Badges/StatusBadge';
import { useAppDispatch } from '../../../../../features/hooks';


;


interface props {

    handleDeletClick: (arg: { id: string, name: string }) => void;
    handleEditClick: (data:productFromDB) => void;
    onClick: () => void;
    data: productFromDB
}

const ProductRowHead:React.FC<props> = ({ handleDeletClick, handleEditClick, onClick, data }) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useAppDispatch();
    const {
        id,
        imgUrl,
        name,
        categorys,
        brand,
        base_price,
        updatedAt,
        active
    } = data
    let supply = 0;

    data.Specification.forEach(item => supply += item.supply)

    React.useEffect(() => {
        console.log(data)
    }, [])


    return (

        <tr onClick={onClick} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={imgUrl} alt={name} className="w-auto h-8 mr-3" />
                <span className='pr-1'>{name}</span>
            </th>
            <td className="px-4 py-2">
                <div className=''>

                    {
                        categorys.map((item, i) => {
                            if (i >= 1) return ' ... '
                            return (
                                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{item.name}</span>
                            )
                        })
                    }


                </div>

            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {brand}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right">{base_price} ₪ </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right">{supply}
                <div className={`inline-block w-4 h-4 mr-2 ${supply <= 15 ? "bg-red-700" : "bg-green-700"} rounded-full`}></div>
            </td>

            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                n/a
            </td>
            <td className="px-4 py-2">
                <div className="flex items-center">
                    <StatusBadge active={active} />

                </div>
            </td>
            <td dir='ltr' className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{dateFormatter(updatedAt ?? "N/A")}</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white ">

                {

                    <div className='flex flex-row-reverse justify-evenly'>
                        <CrudBtn color='red' onClick={() => handleDeletClick({ id, name })}><TrashIcon className='h-[3vh] ' /></CrudBtn>
                        <CrudBtn color='gray' onClick={() => {
                            
                            handleEditClick(data)
                        }
                        }><PencilSquareIcon className='h-[3vh] ' /></CrudBtn>
                    </div>
                }



            </td>
        </tr >
    )
}

export default ProductRowHead