import React from 'react'

export const DarkVail = ({children}:{children:React.ReactNode}) => {
    return (
        <div className=' fixed top-0 z-50 w-full h-[100vh] bg-black bg-opacity-50'>
            {children}
        </div>
    )
}

