import { Dropdown } from 'flowbite-react'
import React, { FC, useEffect } from 'react'
import { ArrowRightOnRectangleIcon, Cog6ToothIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

import { useNavigate } from 'react-router-dom';
import { subsetUser } from '../../interfaces';


interface props {
    label: React.ReactNode;
    user: subsetUser;
    logout: ()=>void;
}

const DropDawnAvatar: FC<props> = ({ label, user ,logout}) => {
    const navigate = useNavigate();
    useEffect(() => {
    
    }, [user])
    
    return (
        <Dropdown label={label}
            inline={true}
            arrowIcon={false}>

            <Dropdown.Header>
                <div className=''>
                    <span className="text-center block font-semibold text-sm capitalize">
                        {user && user.firstName + " " + user.lastName}

                    </span>
                    <span className="block truncate text-sm font-medium">
                        {user && user.email}
                    </span>
                    <span className=" text-center block truncate text-xs font-medium  lowercase ">
                        {user && user.role}
                    </span>
                </div>
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
                logout();
                navigate("/")

            }} icon={ArrowRightOnRectangleIcon}>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}

export default DropDawnAvatar