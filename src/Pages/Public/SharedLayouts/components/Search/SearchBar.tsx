/*
*props: shownState , closeIt()
 */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import React, { useEffect } from 'react'
import { IF } from '../../../../../components/special/if';


interface SearchBarProps {
    show : boolean ;
    closeIt:Function ;

}
export const SearchBar = ({ show,closeIt }:SearchBarProps) => {
    const modalRef : any = React.useRef(null) // ! is any because of current is not <never>


    // on outside click close the modal
    const handleClickOutside = (event:Event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            console.log('clicked outside')
            closeIt()
            console.log(show);
        }
    }

    // check if the click is inside the modal or outside 
 useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>


            <IF condition={show}>
                <div className="text-center  fixed top-0 z-50  bg-[#00000078] w-[100%] h-[100vh] p-3" >
                    <form>

                        <div ref={modalRef} className="relative pt-5" >
                            <div className="absolute pl-3">
                                <MagnifyingGlassIcon color='black' className='h-5 mt-5 ' />
                            </div>
                            <input  type="search" id="default-search" className="block w-full p-4  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
            </IF>

        </>
    )
}
