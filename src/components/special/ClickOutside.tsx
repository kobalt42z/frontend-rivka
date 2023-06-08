import React, { useEffect } from 'react'

interface  ClickOutsideProps {
    children : React.ReactNode ; 
    closeIt : Function;
    open : boolean ;
}
export const ClickOutside = ({ children, closeIt, open }:ClickOutsideProps) => {
    const targetRef : any = React.useRef(null) // ! any because of contains is not <never>

    // on outside click close the modal
    const handleClickOutside = (event:Event) => {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
            console.log("clicky ");
            closeIt()
        }
    }

    // check if the click is inside the modal or outside 
    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [open]);


    // if i show them the will change my layout that why i use null when its closed
    return (<>
        <div className=" z-index-[-1]" ref={targetRef}>{children}</div>
    </>)



}
