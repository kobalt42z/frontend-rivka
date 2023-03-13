import React from 'react'

const DarkVail = ({children}:{children:React.ReactNode}) => {
    return (
        <div className=' absolute z-50 w-full h-full bg-black bg-opacity-50'>
            {children}
        </div>
    )
}

export default DarkVail