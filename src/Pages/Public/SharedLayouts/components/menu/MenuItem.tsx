import { ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link, To } from 'react-router-dom'

/*
* active is a boolean value that will be used to determine if the menu item is active or not
* by passing  loactin == to current location if true the active effect will be applied
*
* to props is passed to the Link component
 */
interface MenuItemsProps {
  children: React.ReactNode;
  to?: To;
  active?: boolean;
  chevronDown?: boolean;
  smaller?:boolean
}


const MenuItem = ({ children, to, active, chevronDown,smaller }: MenuItemsProps) => {
  return (
    <Link to={to || '/'} className={`${ smaller ? 'w-[80%]':  "w-full" }`}>
      <li  className={` py-3
     flex rtl:flex-row-reverse justify-between items-center  text-[var(--main-text-color)] font-medium text-lg  `}>

        {chevronDown ? <ChevronDownIcon className="h-6  text-gray-500" /> :
          <ChevronLeftIcon className="h-6  text-gray-500" />
        }{children}
      </li>
    </Link>
  )
}

export default MenuItem