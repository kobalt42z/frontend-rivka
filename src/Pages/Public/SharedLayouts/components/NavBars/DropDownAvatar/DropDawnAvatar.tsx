import { Dropdown } from 'flowbite-react'
import React, { FC, useEffect } from 'react'
import { ArrowRightOnRectangleIcon, Cog6ToothIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../features/hooks';
import { TOKEN_KEYWORD } from '../../../../../../constant';
import { clearToken } from '../../../../../../features/Slices/Payload.slice';
import { getAuth, signOut } from 'firebase/auth';
import { clearUser, setUser } from '../../../../../../features/Slices/user.slice';
import { Icon } from '@iconify/react';


interface props {
    label: React.ReactNode;
}

const DropDawnAvatar: FC<props> = ({ label }) => {
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.tokenReducer.tokenPayload)
    const dispatch = useAppDispatch()
    const auth = getAuth()


    return (
        <Dropdown label={label}
            inline={true}
            arrowIcon={false}>

            <Dropdown.Header>
                <div className=''>
                    <span className="text-center block font-semibold text-sm capitalize">
                        {auth.currentUser?.displayName}
                    </span>
                    <span className="text-center block  text-sm ">
                        {auth.currentUser?.email?? auth.currentUser?.phoneNumber}
                    </span>
                   
                </div>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => {
                signOut(auth)
                dispatch(clearUser())
                navigate("/")
            }} >
               <div className='w-full flex text-sm'>
               <Icon icon="grommet-icons:logout" className='mx-1' /> Sign out
               </div>
            </Dropdown.Item>
        </Dropdown>
    )
}

export default DropDawnAvatar