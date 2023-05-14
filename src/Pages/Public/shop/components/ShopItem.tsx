import React from "react";
import { IF } from "../../../../components/special/if";
import MainButtons from "../../../../components/buttons/MainButtons";
import { Link } from "react-router-dom";


interface ShopItemProps {
    id:string
    imgUrl: string;
    title: string;
    subtitle: string;
    price: number;
    sale?: number;
    addToCart?: () => void;
    className?: string;

}

const ShopItem = React.forwardRef(({ id,imgUrl, title, subtitle, price, sale,addToCart,className }: ShopItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={`container flex flex-col items-center justify-between flex-none min-h-[150px] ${className}`} ref={ref}>
            <IF condition={sale}>
                <div className='relative w-full '>
                    <div className='absolute w-[55px] h-[55px] bg-[url(./assets/Star.svg)] bg-center bg-cover top-[-25px] left-[-10px] md:left-[-28px] md:top-[-21px] text-center flex items-center justify-center text-sm font-extrabold uppercase'>sale</div>
                </div>
            </IF>
           <Link to={`/product/${id}`}> <img src={imgUrl} alt={title} className="w-[160px] h-auto pb-2" /></Link>
            {/* desciption : */}
            <div className='text-center text-sm space-y-2 mb-4 w-full' >
                <h5 className=' font-bold'>{title}</h5>
                <h6 className=' font-thin'>{subtitle}</h6>
                {/* <h6 className='font-bold'>{price}₪</h6> */}
                {sale ?
                    <div className='  flex justify-evenly'>
                        <h6 className='font-bold line-through'>{price}₪</h6>
                        <h6 className='font-bold '>{price - ((sale / 100) * price)}₪</h6>
                    </div>
                    : <h6 className='font-bold'>{price}₪</h6>}


            </div>
            <MainButtons 
            ClickAction={addToCart}
            custom={"w-[85%] text-black font-bold "}>הוסף לסל</MainButtons>
        </div>
    )
})

export default ShopItem