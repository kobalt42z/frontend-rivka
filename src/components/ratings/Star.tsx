import { Icon } from '@iconify/react'
import React, { FC } from 'react'

interface props {
    active?: boolean
    half?: boolean
}

const Star: FC<props> = ({ active, half, }) => {


    if (half) return <Icon icon="mdi:star-half" color="#8d703f" width={25} height={25} />

    else if (active) return <Icon icon="mdi:star" color="#8d703f" width={25} height={25} />

    else return <Icon icon="mdi:star" color="#D9D9D9" width={25} height={25} />
}




export default Star