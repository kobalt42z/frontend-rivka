import React from "react";
import { IF } from "../../../../components/special/if";
import MainButtons from "../../../../components/buttons/MainButtons";
import { Link } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/outline";
import DropDownBlure from "./dropDownBlure";

interface ShopItemProps {
    id: string
    imgUrl: string;
    title: string;
    subtitle: string;
    price: number;
    sale?: number;
    addToCart?: () => void;
    className?: string;

}

const ShopItem = React.forwardRef(({ id, imgUrl, title, subtitle, price, sale, addToCart, className }: ShopItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={`container  flex flex-col items-center justify-between flex-none min-h-[150px] border-[0.5px] border-[#656565] drop-shadow-lg  ${className}`} ref={ref}>
      <DropDownBlure/>
            <IF condition={sale}>
                <div className='relative w-full '>
                    <div className='absolute w-[37px] h-[21px] bg-[#474A49]  text-white bg-center bg-cover top-[5px] left-[-10px] md:left-[-28px] md:top-[-21px] text-center flex items-center justify-center text-[14px]  uppercase font-normal drop-shadow-xl'>{sale + '%'}</div>
                </div>
            </IF>
            <Link to={`/product/${id}`} className=""> <img src={imgUrl} alt={title} className="w-[170px] h-[160px] pb-2  drop-shadow-lg " /></Link>
            {/* desciption : */}
            <div className=' flex flex-row-reverse justify-between items-top text-center text-base  my-2 w-full px-5 ' >
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
                ClickAction={addToCart}
                custom={" text-black  relative top-[5px] drop-shadow-lg "}>הוסף לסל</MainButtons>
        </div>
    )
})

export default ShopItem