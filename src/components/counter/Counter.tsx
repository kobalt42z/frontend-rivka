import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Button } from 'flowbite-react'
import React, { FC } from 'react'
interface props {
    counter: number
    onClickPlus: () => void
    onClickMinus: () => void
}
const Counter: FC<props> = ({ counter, onClickMinus, onClickPlus }) => {
    return (
        <div className='flex justify-between items-center h-10 w-[80px] border-2' >
            <Button size={'xxs'} outline color={'light'} onClick={onClickPlus} className='rounded-none border-0'>
                <PlusIcon className="h-7 w-4 text-gray-500" />
            </Button>
            {counter}
            <Button size={'xxs'} outline color={'light'} onClick={onClickMinus} className='rounded-none border-0' >
                <MinusIcon className="h-7 w-4 text-gray-500" />
            </Button>
        </div>
    )
}

export default Counter