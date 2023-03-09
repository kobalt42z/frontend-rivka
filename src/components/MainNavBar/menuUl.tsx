import React, { useEffect } from 'react'
import MenuItem from './MenuItem'

interface MenuUIProps{
    closeMenuOnclick:Function
}

const MenuUl = ({closeMenuOnclick}:MenuUIProps) => {


    return (
        <ul id='menuUl_id' className='text-end rtl:text-start' onClick={()=>closeMenuOnclick()}>
            <MenuItem to={"/"}>עמוד הבית</MenuItem>
            <MenuItem to={"/shop"} >חנות אונליין</MenuItem>
            <MenuItem >קביעת תורים</MenuItem>
            <MenuItem >עמוד הקורסים</MenuItem>
            <MenuItem >אודותנו</MenuItem>
            <MenuItem >יצירת קשר</MenuItem>
            <MenuItem >כניסת עובדים</MenuItem>

        </ul>
    )
}

export default MenuUl