import { Dropdown } from 'flowbite-react'
import React from 'react'
import { ArrowRightOnRectangleIcon, Cog6ToothIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import loginSlice, { logout } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';


const DropDawnAvatar = ({ label }: { label: React.ReactNode }) => {
    const user = useAppSelector((state) => state.login.user)
    const dispatch = useAppDispatch()
    const navigate =  useNavigate();
    return (
        <Dropdown label={label}
            inline={true}
            arrowIcon={false}>

            <Dropdown.Header>
                <span className="block text-sm capitalize">
                    {user && user.firstName + ' ' + user.lastName}
                </span>
                <span className="block truncate text-sm font-medium">
                    {user && user.email}
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
            <Dropdown.Item onClick={() => {
                dispatch(logout()) 
                navigate("/")
                
            }} icon={ArrowRightOnRectangleIcon}>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}

export default DropDawnAvatar