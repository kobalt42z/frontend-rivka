import React, { MouseEventHandler, useEffect } from 'react'


interface props {
    title: string
    icon?: React.ReactNode 
    className?: string
    OnClick?:MouseEventHandler<HTMLButtonElement>
}
export const ActionsButton = ({title,icon,className,OnClick}:props,) => {
    
 
    
    return (
        <button type="button" className={`w-auto flex items-center justify-between flex-shrink-0 px-3 py-2 text-sm font-medium text-black  border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 
        
        
        ${className}
        `}
        onClick={OnClick}
        >
            {title}
            <span className='pr-2'>{icon}</span>
        </button>
    )
}
