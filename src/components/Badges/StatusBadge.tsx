import React, { FC } from 'react'

interface props{
    active:boolean
}
const StatusBadge:FC<props> = ({active}) => {
    return (
        <>
            {active ?

                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">פעיל</span>
                :
                <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">מושבת</span>
            }
        </>
    )
}

export default StatusBadge