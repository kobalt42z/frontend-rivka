import { Icon } from '@iconify/react'
import React,{FC} from 'react'
import { UseToggle } from 'sk-use-toggle/src'

interface props{
    children: React.ReactNode
}
const DropDown:FC<props> = ({children}) => {
    const [open, toggle] = UseToggle()
    return (
        <div className='relative'>
            <button onClick={toggle} className='border-2  rounded-full w-[68px] h-[38px] flex items-center justify-evenly pl-2 text-base font-semibold '>
                <Icon icon={`tabler:chevron-${open ? "up" : "down"}`} width={30} height={25} /> L
            </button>
           {open &&
             <div className='absolute  rounded-lg w-[70px] bg-white text-center '>
             <ul className='space-y-2'>
                
                 {children}
             </ul>
         </div>
           }
        </div>
    )
}

export default DropDown