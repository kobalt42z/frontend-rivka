import React, { FC, useState } from 'react'
import { completeProduct } from '../../interfaces';
import ProductRowBody from './ProductRowBody';

import ProductRowHead from './ProductRowHead'

interface props {
    deleteClick: (id: string) => void;
    data:completeProduct
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

            {toggle && <ProductRowBody />}
        </>
    )
}

export default DropDownRow