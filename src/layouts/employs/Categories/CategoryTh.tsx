import React from 'react'

const CategoryTh = () => {
    return (
        <thead  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-4 py-3">שם קטגוריה</th>
                <th scope="col" className="px-4 py-3">תאור קצר</th>
                <th scope="col" className="px-4 py-3">כמות מוצרים</th>
                <th scope="col" className="px-4 py-3">נוצרה בתאריך </th>
                <th scope="col" className="px-4 py-3">עודכנה בתאריך</th>
                <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                </th>
            </tr>
        </thead>
    )
}

export default CategoryTh