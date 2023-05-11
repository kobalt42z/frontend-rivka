import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React, { MouseEventHandler, ReactNode } from 'react'

interface MenuDrawerProps {
    open: boolean;
    toggle: MouseEventHandler<HTMLButtonElement>;
    title: string;
    children: ReactNode;
}

const MenuDrawer = ({ open, toggle, title, children }: MenuDrawerProps) => {
    return (
        <div className={` fixed top-0 bottom-0 right-0  z-40 w-[90%] lg:w-1/4 min-[400px]:w-[80%] h-screens bg-[var(--main-beige-color)] p-5 ${!open && "translate-x-[115%]"} overflow-y-auto duration-700 ease-in-out `}>
            <h3 className='flex justify-between text-[var(--main-text-color)] border-b-2 border-[var(--main-green-color)] p-2'>
                <button onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {title}

                <Bars3Icon className="h-7  text-black " />

            </h3>
            <div className='pt-5 space-y-5 '>
                {children}
            </div>
        </div>
    )
}

export default MenuDrawer