import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { FC, useEffect, useRef, useState } from 'react'

interface props {
    children: React.ReactNode
    firstObjectRef: React.RefObject<HTMLDivElement>
    dealay?: number
    onlyPhone?: boolean
}
const Carusel: FC<props> = ({ children, firstObjectRef: caruselItemRef, dealay, onlyPhone }) => {
    const [currenPosition, setCurrentPosition] = useState<number>(0);
    const caruselRef = useRef<HTMLDivElement>(null);
    // const caruselItemRef = useRef<HTMLDivElement>(null);

    const nextElement = () => {
        if (!caruselRef.current || !caruselItemRef.current) return;
        const caruSize = caruselRef.current.scrollWidth, itemSize = caruselItemRef.current.offsetWidth
        const newPosition = currenPosition < (caruSize - itemSize) ? currenPosition + itemSize : itemSize
        setCurrentPosition(newPosition)

    }
    const prevElement = () => {
        if (!caruselRef.current || !caruselItemRef.current) return;
        const caruSize = caruselRef.current.scrollWidth, itemSize = caruselItemRef.current.offsetWidth
        const newPosition = currenPosition > 0 ? currenPosition - itemSize : (caruSize - itemSize);
        setCurrentPosition(newPosition)
            ;
    }

    useEffect(() => {
        if (!caruselRef.current || !caruselItemRef.current) return;
        caruselRef.current.scroll({
            top: 40,
            left: currenPosition,
            behavior: "smooth"
        })
    }, [currenPosition])

    useEffect(() => {
        if (!dealay) return;
        const interval = setInterval(nextElement, dealay)
        return () => clearInterval(interval);
    }, [currenPosition])

    useEffect(() => {
        caruselRef.current?.scrollTo({
            top: 0,
            left: 50,
            behavior: 'smooth',
        })
    }, [])

    return (


        // <div className=" flex w-full justify-around ">
        //     <button onClick={prevElement}><ChevronLeftIcon className="h-6 w-6 text-black drop-shadow-lg backdrop-blur-md rounded-full" /></button>
        //     <div className=" flex mb-5 md:px-10 space-x-3 overflow-x-scroll scroll-px-6 snap-proximity snap-x " ref={caruselRef}>
        //         {children}
        //     </div>
        //     <button onClick={nextElement}><ChevronRightIcon className="h-6 w-6 text-black drop-shadow-lg backdrop-blur-md rounded-full" /></button>
        // </div>

        <div className="flex w-full">
            <button onClick={prevElement}>
                <ChevronLeftIcon className="h-6 w-6 text-black drop-shadow-lg backdrop-blur-md rounded-full" />
            </button>
            <div className="flex mb-5 md:px-10 space-x-3 overflow-x-scroll md:overflow-hidden scroll-px-6 snap-proximity snap-x mr-auto" ref={caruselRef} >
                {children}
            </div>
            <button onClick={nextElement}>
                <ChevronRightIcon className="h-6 w-6 text-black drop-shadow-lg backdrop-blur-md rounded-full" />
            </button>
        </div>



    )
}

export default Carusel