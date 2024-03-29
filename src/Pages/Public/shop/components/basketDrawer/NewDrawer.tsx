import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import React, { MouseEventHandler, ReactNode } from 'react'

interface NewDrawerProps {
    open: boolean ;
    children : ReactNode ;
    toggle : MouseEventHandler<HTMLButtonElement> ;
    title :string ;
    icon? : ReactNode ;
}

const NewDrawer = ({ open, children ,toggle ,title ,icon}:NewDrawerProps) => {
    return (<>
    
        <div className={` fixed top-0 bottom-0 right-0  z-40 w-[90%] lg:w-[35%] min-[400px]:w-[95%] h-screens bg-[var(--main-beige-color)] p-5 ${!open && "translate-x-[115%]"} overflow-y-auto duration-700 ease-in-out `}>
            <h3 className='flex rtl:flex-row-reverse justify-between text-[var(--main-text-color)]'> {icon} {title}
                <button onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </h3>
            <div className='pt-5 space-y-5 '>
                {children}
            </div>
        </div>
    </>)
}

export default NewDrawer    