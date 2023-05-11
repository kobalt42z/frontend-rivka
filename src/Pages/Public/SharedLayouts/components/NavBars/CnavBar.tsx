import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useAppSelector } from "../../../../../features/hooks"
import { ClickOutside } from "../../../../../components/special/ClickOutside"
import BasketDrawer from "../../../shop/components/basketDrawer/BasketDrawer"
import MenuDrawer from "../menu/MenuDrawer"
import MenuUl from "../menu/menuUl"
import { ArrowLeftOnRectangleIcon, Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import DropDawnAvatar from "./DropDownAvatar/DropDawnAvatar"
import { SearchBar } from "../Search/SearchBar"
import Logo from '../../../../../assets/RivkaLogoTrans.png'


const CnavBar = () => {
    const [showSearch, setShowSearch] = React.useState(false)
    const [showDrawer, setShowDrawer] = React.useState(false)
    const [showMenu, setShowMenu] = React.useState(false)
    const location = useLocation()
    const TokenPayload = useAppSelector((state) => state.tokenReducer.tokenPayload)
    const Cart =useAppSelector((state) => state.cart) 

    const openIt = () => {
        setShowSearch(true)
        console.log("clicked");
    }
    const toggleSearch = () => {
        setShowSearch(showSearch)
    }
    const toggleDrawer = () => {
        setShowDrawer(!showDrawer)
    }
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }





    return (
        <nav className='container flex  justify-around items-center w-[100%]
        min-h-[10vh]
        lg:
        
        '>

            <SearchBar show={showSearch} closeIt={toggleSearch} />

            <ClickOutside open={showDrawer} closeIt={toggleDrawer} >
                <BasketDrawer open={showDrawer} toggle={toggleDrawer} ></BasketDrawer>
            </ClickOutside>

            <ClickOutside open={showMenu} closeIt={toggleMenu}>
                <MenuDrawer open={showMenu} toggle={toggleMenu} title={"תפריט"}>
                    <MenuUl closeMenuOnclick={toggleMenu} />
                </MenuDrawer>
            </ClickOutside>
            <button onClick={toggleDrawer} ><div className='relative'>
                <ShoppingBagIcon color='black' className='h-7  ' />

                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-3 dark:border-gray-900">{Cart.totalInCart}</div>


            </div>
            </button>

            {TokenPayload ?
                <DropDawnAvatar label={<UserCircleIcon color='black' className='h-7' />} /> :
                <Link to={"/login"}><ArrowLeftOnRectangleIcon color='black' className='h-7' /></Link>
            }

            {/* LOGO */}
            <div className='lg:order-first lg:basis-10/12 flex '>
                <div className=''></div>
                <Link to={"/"} className='' >
                    <img
                        src={Logo}
                        className="   lg:h-[20vh] h-16 sm:h-9"
                        alt="Rivka's logo"
                    />
                </Link>
            </div>


            <button onClick={openIt}><MagnifyingGlassIcon color='black' className='h-7 ' /></button>

            <button onClick={toggleMenu}><Bars3Icon className="h-7  text-black " /></button>


        </nav>
    )
}

export default CnavBar