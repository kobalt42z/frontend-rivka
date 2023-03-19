import React, { FC, useState } from 'react'
import ProductRowBody from './productRowBody'
import ProductRowHead from './ProductRowHead'

interface props {
    deleteClick: (id: string) => void;
}

const DropDownRow: FC<props> = ({ deleteClick }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <>

            <ProductRowHead
                onClick={() => setToggle(!toggle)}
                key={'iiiii'}
                handleDeletClick={deleteClick}
                id={'13542'}
            />

            {toggle && <ProductRowBody />}
        </>
    )
}

export default DropDownRow