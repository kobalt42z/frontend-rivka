import React, { ReactNode } from 'react'

interface IFprops {
    condition : boolean ; 
    children :React.ReactNode;
}
export const IF = ({ condition ,children} :IFprops):JSX.Element | null => {
    if (condition) return <>{children}</>
    return null
   
}
