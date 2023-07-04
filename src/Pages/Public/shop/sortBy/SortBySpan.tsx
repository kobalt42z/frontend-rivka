import { Icon } from '@iconify/react';
import React, { FC } from 'react'
import { UseToggle } from 'sk-use-toggle/src'

interface props {
    children: React.ReactNode;
}
const SortBySpan: FC<props> = ({ children }) => {
    const [status, toggleStatus] = UseToggle()
    return (
        <div
            onClick={toggleStatus}
            className={` hover:cursor-pointer flex flex-row-reverse justify-around items-center capitalize rounded-md box-shadow min-w-[95px] h-[18px]${status ? " bg-mainGreen " : " bg-[#DFE2CF] "}`}>
            {children}
            {
                status && 
                <div className='rounded-full bg-white'>
                    <Icon icon="ph:x-light" width={13} />
                </div>
            }

        </div>
    )
}

export default SortBySpan