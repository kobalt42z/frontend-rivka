import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { FC } from 'react'
interface props {
    onCLick: () => void
}
const XMarkOnHover: FC<props> = ({onCLick}) => {
    return (

        <XMarkIcon onClick={onCLick} className=' opacity-0 hover:opacity-100 duration-700 absolute w-[90px] h-[90px] bg-black bg-opacity-50 text-gray-200' />

    )
}

export default XMarkOnHover