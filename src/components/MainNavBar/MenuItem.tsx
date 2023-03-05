import { ChevronLeftIcon } from '@heroicons/react/24/outline'
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
}


const MenuItem = ({ children, to, active }: MenuItemsProps) => {
  return (
    <Link to={to || '/'} >
      <li className={` py-3
     flex justify-between items-center w-full  text-[var(--main-text-color)] font-medium text-lg  `}><ChevronLeftIcon className="h-6  text-gray-500" />{children}
      </li>
    </Link>
  )
}

export default MenuItem