import { ArrowPathIcon, ArrowsUpDownIcon, ArrowUpTrayIcon, FunnelIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import React, { Key } from 'react'

import { Xsvg } from '../../assets/X';
import { ActionsButton } from './btns/ActionsButton';
import AddProductsModal from './modals/AddProductsModal';
import DelModal from './modals/DelModal';
import SuppThead from './SuppThead';

interface ProductsTableTypes {
    children: React.ReactNode;
    toggleAddProducts: () => void;
}
const ProductsTable = ({ children, toggleAddProducts }: ProductsTableTypes) => {


    return (<>

        <div className=" px-4 mx-auto max-w-screen-2xl lg:px-12 ">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">

                <SuppThead />
                <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">

                    <div className="w-full md:w-1/2">
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
                                
                            </div>
                        </form>
                    </div>


                    <div className="lg:w-[50%] xl:w-[40%] flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-around md:space-y-0 md: ">
                        <ActionsButton  title='ייצא לטבלה' icon={<ArrowUpTrayIcon className="h-4 w-4 text-gray-500" />} />
                        <ActionsButton title='מיון' icon={<ArrowsUpDownIcon   className="h-4 w-4 text-gray-500" />} />
                        <ActionsButton title='סינון' icon={<FunnelIcon className="h-4 w-4 text-gray-500" />} />
                        <ActionsButton title='רענן מוצרים' icon={<ArrowPathIcon className="h-4 w-4 text-gray-500" />} />
                        <ActionsButton title='הוסף מוצר' icon={<PlusSmallIcon className="h-6 w-6 text-gray-500" />} 
                        OnClick={toggleAddProducts}
                        />
                    </div>

                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-4 py-3">מוצר</th>
                                <th scope="col" className="px-4 py-3">קטגוריה</th>
                                <th scope="col" className="px-4 py-3">מלאי</th>
                                <th scope="col" className="px-4 py-3">נמכר ביום</th>
                                <th scope="col" className="px-4 py-3">נמכר בחודש</th>
                                <th scope="col" className="px-4 py-3">סהכ נמכרו</th>
                                <th scope="col" className="px-4 py-3">הכנסה</th>
                                <th scope="col" className="px-4 py-3">עדכון אחרון</th>
                                <th scope="col" className="px-4 py-3">עריכה</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
                <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
                    <span className=" text-sm font-normal text-gray-500 dark:text-gray-400">
                        מציג
                        <span className="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
                        מתןך סה"כ
                        <span className="font-semibold text-gray-900 dark:text-white"> 1000 </span>
                    </span>
                    <ul className="inline-flex flex-row-reverse items-stretch -space-x-px">
                        <li>
                            <button onClick={() => console.log("p")} className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only" >Previous</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                            <button onClick={() => console.log("n")} className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    </>
    )
}

export default ProductsTable