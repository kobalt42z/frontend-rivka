import React, { FC } from 'react'
import { ClassicInput } from '../../../../components/inputs/ClassicInput'
import { DarkVail } from '../../../../components/special/DarkVail'
import { CheckIcon } from '@heroicons/react/24/outline'

interface props {
cancel: ()=>void
save: ()=>void
}

const AddCategoryformUI:FC<props> = ({cancel,save}) => {
    
    return (
        <DarkVail>
            <div dir='rtl' id="defaultModal" className="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <button
                            onClick={cancel}
                            type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                הוספת קטגוריה
                            </h3>
                        </div>

                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <ClassicInput
                                        labelTitle='category name'
                                        type='text'
                                        useFromsParams={null}
                                        placeholder='name of category'
                                    />
                                </div>
                                <div>
                                    <ClassicInput
                                        labelTitle='category name'
                                        type='text'
                                        useFromsParams={null}
                                        placeholder='name of category'
                                    />
                                </div>
                                <div>
                                    <ClassicInput
                                        labelTitle='category name'
                                        type='text'
                                        useFromsParams={null}
                                        placeholder='name of category'
                                    />
                                </div>
                                <div>
                                    <ClassicInput
                                        labelTitle='category name'
                                        type='text'
                                        useFromsParams={null}
                                        placeholder='name of category'
                                    />
                                </div>
                                <ClassicInput
                                    labelTitle='category name'
                                    type='text'
                                    useFromsParams={null}
                                    placeholder='name of category'
                                />
                            </div>
                            <div className='flex justify-center mt-10'>
                                <button
                                onClick={save}
                                type="submit" className="text-white  inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    שמור קטגוריה
                                    <CheckIcon className="h-6 w-6 text-white mr-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DarkVail>
    )
}

export default AddCategoryformUI