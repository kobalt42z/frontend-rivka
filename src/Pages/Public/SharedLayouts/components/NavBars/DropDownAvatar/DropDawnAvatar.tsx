import { Dropdown } from 'flowbite-react'
import React, { FC, useEffect } from 'react'
import { ArrowRightOnRectangleIcon, Cog6ToothIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../features/hooks';
import { TOKEN_KEYWORD } from '../../../../../../constant';
import { clearToken } from '../../../../../../features/Slices/Payload.slice';


interface props {
    label: React.ReactNode;
}

const DropDawnAvatar: FC<props> = ({ label }) => {
    const navigate = useNavigate();
    const user = useAppSelector((state)=>state.tokenReducer.tokenPayload)
    const dispatch = useAppDispatch()
 
    
    return (
        <Dropdown label={label}
            inline={true}
            arrowIcon={false}>

            <Dropdown.Header>
                <div className=''>
                    <span className="text-center block font-semibold text-sm capitalize">
                        {user && user.firstName + " " + user.lastName}

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
                localStorage.removeItem(TOKEN_KEYWORD)
                dispatch(clearToken())
                navigate("/")
            }} icon={ArrowRightOnRectangleIcon}>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}

export default DropDawnAvatar