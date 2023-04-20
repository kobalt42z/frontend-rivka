import React, { Children, FC } from 'react'
interface props {
    children: React.ReactNode
}
const CategoryTable: FC<props> = ({ children }) => {
    return (
        <section  dir='rtl' className=" dark:bg-gray-900 p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    
                        {children}
                    </div>
                </div>
           
        </section>
    )
}

export default CategoryTable