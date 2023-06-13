import React, { useState } from "react";
import { IF } from "../../../../components/special/if";
import MainButtons from "../../../../components/buttons/MainButtons";
import { Link } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/outline";
import DropDownBlure from "./dropDownBlure";
import { UseToggle } from "sk-use-toggle/src";
import { Icon } from '@iconify/react';

interface ShopItemProps {
    item_id: string
    imgUrl: string;
    title: string;
    subtitle: string;
    price: number;
    sale?: number;
    addToCart?: () => void;
    className?: string;
    showItem?: boolean;
}

const ShopItem = React.forwardRef(({ item_id, imgUrl, title, subtitle, price, sale, addToCart, className }: ShopItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const [showBlureMenu, toggleBlureMenu] = UseToggle()
    const [like, toggleLike] = UseToggle()
    const [rotate, toggleRotation] = useState(false)

    return (
        <div className={`container relative flex flex-col items-center justify-between flex-none min-h-[150px] border-[0.5px] border-[#656565] drop-shadow-lg  ${className}`} ref={ref}>
            <IF condition={showBlureMenu}><DropDownBlure toggleBlurMenu={toggleBlureMenu} /></IF>
            <IF condition={sale}>
                <div className=' w-full z-[1] '>
                    <div className='absolute w-[37px] h-[21px] bg-[#474A49]  text-white bg-center bg-cover top-[5px] left-[-10px] md:left-[-28px] md:top-[-21px] text-center flex items-center justify-center text-[14px]  uppercase font-normal drop-shadow-xl'>{sale + '%'}</div>
                </div>
            </IF>
            <div className="relative top-0">
                <button onClick={() => {
                    toggleLike(); toggleRotation(true); setTimeout(() => toggleRotation(false)
                        , 300);
                }} className="absolute z-[2] right-1 bottom-3 ">
                    <Icon icon={`icon-park-${like ? "solid" : "outline"}:like`} height="25" className={`  ${rotate ? "rotate-12" : "rotate-0"} transition-all duration-75 ease-in-out  
                     `} />
                </button>
                <Link to={`/product/${item_id}`} className="">
                    <img src={imgUrl} alt={title} className=" w-[170px] h-[160px] pb-2  drop-shadow-lg  " height={160} />
                </Link>
            </div>
            {/* desciption : */}
            <div className=' flex flex-row-reverse justify-between items-top text-center text-base   my-2 w-full px-5 ' >
                <h5 className=' font-normal'>{title}</h5>
                {/* <h6 className=' font-thin'>{subtitle}</h6> */}
                {/* <h6 className='font-bold'>{price}₪</h6> */}
                {sale ?
                    <div className='  '>
                        <h6 className='font-normal line-through'>{price}₪</h6>
                        <h6 className='font-normal '>{price - ((sale / 100) * price)}₪</h6>
                    </div>
                    : <h6 className='font-normal'>{price}₪</h6>}


            </div>
            <MainButtons
                ClickAction={toggleBlureMenu}
                custom={" w-[85px] h-[35px] text-black  relative top-[5px] drop-shadow-lg "}>הוסף לסל</MainButtons>
        </div>
    )
})

export default ShopItem