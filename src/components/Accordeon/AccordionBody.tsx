import React from 'react'


export interface AccordeonItemprops {

    children: React.ReactNode
}
const AccordionBody = ({ children }: AccordeonItemprops) => {
    return (
        <div   >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {children}
            </div>
        </div>
    )
}

export default AccordionBody

