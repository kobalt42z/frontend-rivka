import React, { FC, useState } from 'react'
import { productFromDB } from '../../interfaces';
import ProductRowBody from './ProductRowBody';

import ProductRowHead from './ProductRowHead'

interface props {
    deleteClick: (id: string) => void;
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
                id={'13542'}
                data={data}
            />

            {toggle && <ProductRowBody data={data}/>}
        </>
    )
}

export default DropDownRow