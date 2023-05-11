import { IF } from '../../../../../components/special/if'
import { useAppSelector } from '../../../../../features/hooks'
import { role } from '../../../../../interfaces'
import MenuItem from './MenuItem'

interface MenuUIProps {
    closeMenuOnclick: Function
}

const MenuUl = ({ closeMenuOnclick }: MenuUIProps) => {
    const user = useAppSelector((state) => state.tokenReducer.tokenPayload)

  


    return (
        <ul id='menuUl_id' className='text-end rtl:text-start' onClick={() => closeMenuOnclick()}>
            <MenuItem to={"/"}>עמוד הבית</MenuItem>
            <MenuItem to={"/shop"} >חנות אונליין</MenuItem>
            <MenuItem >קביעת תורים</MenuItem>
            <MenuItem >עמוד הקורסים</MenuItem>
            <MenuItem >אודותנו</MenuItem>
            <MenuItem >יצירת קשר</MenuItem>
            <IF condition={user?.role === role.ADMIN || !user}
            >
                <MenuItem to={'/admin/products'} >כניסת עובדים</MenuItem>
            </IF>

        </ul>
    )
}

export default MenuUl