import { Dropdown } from 'flowbite-react'
import React from 'react'
import { ArrowRightOnRectangleIcon, Cog6ToothIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import loginSlice, { logout } from '../../store/loginSlice';


const DropDawnAvatar = ({label}:{label:React.ReactNode}) => {
    const user = useAppSelector((state)=>state.)
    const dispatch =useAppDispatch()
    return (
        <Dropdown label={label}
        inline={true}
        arrowIcon={false}>
        
            <Dropdown.Header>
                <span className="block text-sm capitalize">
                    {user.firstname }
                </span>
                <span className="block truncate text-sm font-medium">
                    bonnie@flowbite.com
                </span>
            </Dropdown.Header>
            <Dropdown.Item icon={ComputerDesktopIcon}>
                Dashboard
            </Dropdown.Item>
            <Dropdown.Item icon={Cog6ToothIcon}>
                Settings
            </Dropdown.Item>
            {/* <Dropdown.Item icon={HiCurrencyDollar}>
                Earnings
            </Dropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>dispatch(logout)} icon={ArrowRightOnRectangleIcon}>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}

export default DropDawnAvatar