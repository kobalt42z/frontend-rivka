import React,{useEffect} from "react"
import { Link, useLocation } from "react-router-dom"
import { useAppSelector } from "../../../../../features/hooks"
import { ClickOutside } from "../../../../../components/special/ClickOutside"
import BasketDrawer from "../../../shop/components/basketDrawer/BasketDrawer"
import MenuDrawer from "../menu/MenuDrawer"
import MenuUl from "../menu/menuUl"
import { ArrowLeftOnRectangleIcon, Bars3Icon, ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import DropDawnAvatar from "./DropDownAvatar/DropDawnAvatar"
import { SearchBar } from "../Search/SearchBar"
import Logo from '../../../../../assets/finalLogo.png'
import { Icon } from "@iconify/react"
import { Avatar } from "flowbite-react"
import avatarPlaceHolder from "../../../../../assets/avatar.svg"
import { getAuth, signOut } from "firebase/auth"


const CnavBar = () => {
    const auth = getAuth()
    const [showSearch, setShowSearch] = React.useState(false)
    const [showDrawer, setShowDrawer] = React.useState(false)
    const [showMenu, setShowMenu] = React.useState(false)
    const location = useLocation()
    const {user} = useAppSelector((state) => state.user)
    const Cart = useAppSelector((state) => state.cart)

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
        <nav className='container  w-[100%] mt-[30px]
       
        lg:
        
        '>
            <div className="flex justify-between px-1 mb-3">
                <button onClick={toggleMenu}><ChevronLeftIcon className="h-5  text-black " /></button>
                <button onClick={toggleMenu}><Bars3Icon className="h-7  text-black " /></button>
            </div>

            <div className=" flex  justify-between items-center px-3 h-[50px]
        bg-[var(--main-green-color)]">


                <ClickOutside open={showDrawer} closeIt={toggleDrawer} >
                    <BasketDrawer open={showDrawer} toggle={toggleDrawer} ></BasketDrawer>
                </ClickOutside>

                <ClickOutside open={showMenu} closeIt={toggleMenu}>
                    <MenuDrawer open={showMenu} toggle={toggleMenu} title={"תפריט"}>
                        <MenuUl closeMenuOnclick={toggleMenu} />
                    </MenuDrawer>
                </ClickOutside>



                <div className="relative">
                    <MagnifyingGlassIcon className="  h-4 absolute inset-y-1 -left-1 flex items-center pl-3 pointer-events-none" />
                    <input dir="rtl" type="text" className="bg-[#d9d9d926] border-none w-[110px] h-[20px] text black placeholder:text-[gray]" placeholder="חיפוש" />
                </div>

                {/* LOGO */}
                <div className='  '>
                    
                    <Link to={"/"} className='flex justify-center ' >
                        <img
                            src={Logo}
                            className=" h-[]  z-[10] relative bottom-[40px] drop-shadow-xl "
                            alt="Rivka's logo"
                        />
                    </Link>
                </div>


                <div className="flex space-x-3">
                    <button onClick={toggleDrawer} ><div className='relative'>
                    <Icon icon="bytesize:cart"  width={20} height={20}/>

                        {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-3 dark:border-gray-900">{Cart.totalInCart}</div> */}


                    </div>
                    </button>

                    {user ?
                        <DropDawnAvatar label={<img src={user?.photoURL??avatarPlaceHolder} className="rounded-full w-[30px] h-[30px] bg-mainGreen" /> } /> :
                        <Link to={"/login"}><Icon icon="radix-icons:avatar" width={20} height={20}   /></Link>
                    }


                </div>

            </div>
        </nav>
    )
}

export default CnavBar