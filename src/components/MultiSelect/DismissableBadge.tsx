import React from 'react'
interface DismissableBadgeProps {
    color: string ,
    text: string
}
const DismissableBadge = ({color,text}:DismissableBadgeProps) => {
    return (
        <span id="badge-dismiss-default" className={`inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-${color}-800 bg-${color}-100 rounded dark:bg-${color}-900 dark:text-${color}-300`}>
            {text}
            <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-${color}-400 bg-transparent rounded-sm hover:bg-${color}-200 hover:text-${color}-900 dark:hover:bg-${color}-800 dark:hover:text-${color}-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Remove badge</span>
            </button>
        </span>
    )
}

export default DismissableBadge