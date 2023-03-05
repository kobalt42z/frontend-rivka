import React from 'react'
import MainButtons from '../buttons/MainButtons'


interface ShopItemProps {
    imgUrl : string;
    title : string ;
    subtitle : string ;
    price : string ;
    sale? : boolean  ;
    
}

const ShopItem = ({ imgUrl, title, subtitle, price ,sale} :ShopItemProps) => {
    return (
        <div className='container flex flex-col items-center'>
            {sale && <div className='relative w-full'>
                <div className='absolute w-[55px] h-[55px] bg-[url(./assets/Star.svg)] bg-center bg-cover top-[-25px] left-[-10px] text-center flex items-center justify-center text-sm font-extrabold uppercase'>sale</div>
            </div>}
            <img src={imgUrl} alt={title} className="w-[80%] h-auto pb-2" />
            {/* desciption : */}
            <div className='text-center text-sm space-y-2 mb-4' >
                <h5 className=' font-bold'>{title}</h5>
                <h6 className=' font-thin'>{subtitle}</h6>
                <h6 className='font-bold'>{price}₪</h6>
            </div>
            <MainButtons custom={"w-[85%] text-black font-bold "}>הוסף לסל</MainButtons>
        </div>
    )
}

export default ShopItem