import React from 'react'

export const DarkVail = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='  absolute   right-0 top-0 bottom-0 z-50 w-full min-h-full  bg-black bg-opacity-50'>
            {children}
        </div>
    )
}

