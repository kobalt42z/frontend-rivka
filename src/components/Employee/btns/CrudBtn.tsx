import React from 'react'


interface CrudBtnType {
    children: React.ReactNode;
    className?: string;
    color?: string;
    onClick?: () => void;
}
const CrudBtn = ({children,className,color,onClick}:CrudBtnType) => {
    return (
        <button onClick={onClick} type="button" className={` py-2 px-1 h-[4vh]  flex justify-center items-center text-${color}-700 hover:text-white border border-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm  dark:hover:text-white dark:hover:bg-${color}-600 dark:focus:ring-${color}-800 ${className}`}>{children}</button>

    )
}

export default CrudBtn