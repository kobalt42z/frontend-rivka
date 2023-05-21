import React from 'react'
import SortBySpan from './SortBySpan'

const SortBy = () => {
    return (
        <div dir='rtl' className=' mb-10 w-full px-3 '>
            <h3 className="">מיין לפי</h3>
            <div className="flex w-full space-x-3 space-x-reverse pt-3">
                <SortBySpan key={'a'}  >
                   פופולריות
                </SortBySpan>
                <SortBySpan key={'b'}  >
                   מחיר
                </SortBySpan>

            </div>
        </div>
    )
}

export default SortBy