import React from 'react'

const SuppThead = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="lg:w-full flex items-center space-x-4  rtl:space-x-reverse   ">
                        <h5>
                            <span className="text-gray-500">כל המוצרים: </span>
                            <span className="dark:text-white">123456</span>
                        </h5>
                        <h5>
                            <span className="text-gray-500">סכום מכירות כולל: </span>
                            <span className="dark:text-white">$88.4k</span>
                        </h5>
                    </div>

        </div >
    )
}

export default SuppThead