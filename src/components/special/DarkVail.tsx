import React from 'react'

export const DarkVail = ({children}:{children:React.ReactNode}) => {
    return (
        <div className=' fixed top-0  right-0 z-50 w-full min-h-[80vw] bg-black bg-opacity-50'>
            {children}
        </div>
    )
}

