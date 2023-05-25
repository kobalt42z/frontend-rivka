import { Icon } from '@iconify/react'
import React, { FC } from 'react'

interface props {
    active?: boolean
}

const Star:FC<props> = ({active }) => {
    return (
        active? 
        <Icon icon="mdi:star" color="#8d703f" width={25} height={25} />
        :
        <Icon icon="mdi:star" color="#D9D9D9" width={25} height={25} />
    )
}

export default Star