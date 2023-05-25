import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ClassicHr from '../../../../../../components/HR/ClassicHr';

const CartStepper = ({ }) => {
    const loaction = useLocation()
    const [selected, setSelected] = useState<number>(0)
    useEffect(() => { 
       
        
        switch (location.pathname) {
            case "/mycart":
                setSelected(1)
                break;
            case "/myCart/login" || "/myCart/register" || "/myCart/forgot ":
                setSelected(2)
                break;
            case "/myCart/payment":
                setSelected(3)
                break;

            case "/myCart/inovice":
                setSelected(4)
                break;
            default:
                break;
        }
        console.log(loaction.pathname ,selected);
    }, [loaction.pathname])


return (
    <div className=''>
        <div className='flex items-center px-2 h-[100px] font-se'>
            <div className='flex items-center'>
                <div className={` rounded-full m-1 h-[25px] w-[25px] flex items-center justify-center
                    ${selected >= 1 && " text-white  bg-mainGreen"} `}>{selected > 1 ? <Icon icon="material-symbols:check" color="white" /> : 1}</div>
                סיכום קנייה
            </div>
            <hr className="h-[1px] w-[40px] box-shadow  mx-auto   bg-mainGreen border-0 dark:bg-gray-700" />
            <div className='flex items-center'>
                <div className={` rounded-full m-1 h-[25px] w-[25px] flex items-center justify-center
                    ${selected >= 2 && " text-white  bg-mainGreen"} `}>{selected > 2 ? <Icon icon="material-symbols:check" color="white" /> : 2}</div>
                התחברות
            </div>
            <hr className="h-[1px] w-[40px] box-shadow mx-auto  bg-mainGreen border-0 dark:bg-gray-700" />
            <div className='flex items-center'>
                <div className={` rounded-full m-1 h-[25px] w-[25px] flex items-center justify-center
                    ${selected >= 3 && " text-white  bg-mainGreen"} `}>{selected > 3 ? <Icon icon="material-symbols:check" color="white" /> : 3}</div>
                תשלום
            </div>
        </div>
        <ClassicHr />
        <Outlet />
    </div>
)
}

export default CartStepper