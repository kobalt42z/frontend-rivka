import React, { FC, useState } from 'react'
import ProductRowBody from './ProductRowBody';

import ProductRowHead from './ProductRowHead'
import { UseToggle } from 'sk-use-toggle/src';
import { productFromDB } from '../../../../../interfaces';

interface props {
    deleteClick: (arg: { id: string, name: string }) => void;
    data: productFromDB
    editFunc:(data:productFromDB)=>void;
    
}

const DropDownRow: FC<props> = ({ deleteClick, data ,editFunc}) => {
    const [showDown, toggleDwon] = UseToggle();
    return (
        <>

            <ProductRowHead
                onClick={toggleDwon}
                handleDeletClick={deleteClick}
                handleEditClick={editFunc}
                data={data}
            />

            {showDown && <ProductRowBody data={data} />}
        </>
    )
}

export default DropDownRow