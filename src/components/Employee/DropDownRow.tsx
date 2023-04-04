import React, { FC, useState } from 'react'
import { productFromDB } from '../../interfaces';
import ProductRowBody from './ProductRowBody';

import ProductRowHead from './ProductRowHead'

interface props {
    deleteClick: (arg:{id:string,name:string}) => void;
    data:productFromDB
}

const DropDownRow: FC<props> = ({ deleteClick,data }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <>

            <ProductRowHead
                onClick={() => setToggle(!toggle)}
                key={'iiiii'}
                handleDeletClick={deleteClick}
                data={data}
            />

            {toggle && <ProductRowBody data={data}/>}
        </>
    )
}

export default DropDownRow