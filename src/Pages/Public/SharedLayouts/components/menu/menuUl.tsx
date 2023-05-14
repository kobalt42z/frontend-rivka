import { useLocation } from 'react-router-dom'
import { IF } from '../../../../../components/special/if'
import { useAppSelector } from '../../../../../features/hooks'
import { role } from '../../../../../interfaces'
import MenuItem from './MenuItem'

interface MenuUIProps {
    closeMenuOnclick: Function
}

const MenuUl = ({ closeMenuOnclick }: MenuUIProps) => {
    const user = useAppSelector((state) => state.tokenReducer.tokenPayload)
    const location = useLocation()




    return (
        <ul id='menuUl_id' className='text-end rtl:text-start flex flex-col items-end' onClick={() => closeMenuOnclick()}>
            <MenuItem to={"/"}>עמוד הבית</MenuItem>
            <MenuItem to={"/shop"} >חנות אונליין</MenuItem>
            <MenuItem >קביעת תורים</MenuItem>
            <MenuItem >עמוד הקורסים</MenuItem>
            <MenuItem >אודותנו</MenuItem>
            <MenuItem >יצירת קשר</MenuItem>
            <IF condition={user?.role === role.ADMIN || !user}
            >
                {location.pathname.startsWith('/admin') ?
                    <MenuItem to={'/admin/products'} chevronDown >מערכת ניהול</MenuItem>
                    :
                    <MenuItem to={'/admin/products'} >כניסת עובדים</MenuItem>}

                <IF condition={location.pathname.startsWith('/admin')
                }>
                    <MenuItem smaller to={'/admin/products'} >מוצרים</MenuItem>
                    <MenuItem smaller to={'/admin/categories'} >קטגוריות</MenuItem>
                    <MenuItem smaller to={'/admin/orders'}>הזמנות</MenuItem>
                </IF>
            </IF>

        </ul>
    )
}

export default MenuUl