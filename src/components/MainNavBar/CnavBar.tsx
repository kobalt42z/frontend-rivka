import React, { useEffect } from 'react'
import Logo from '../../assets/logo.png'
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { SearchBar } from '../SearchBar/SearchBar';
import BasketDrawer from '../basketDrawer/BasketDrawer';
import MenuDrawer from './MenuDrawer';
import MenuItem from './MenuItem';
import { ClickOutside } from '../special/ClickOutside';
import { Link } from 'react-router-dom';
import MenuUl from './menuUl';

const CnavBar = () => {
    const [showSearch, setShowSearch] = React.useState(false)
    const [showDrawer, setShowDrawer] = React.useState(false)
    const [showMenu, setShowMenu] = React.useState(false)
    const openIt = () => {
        setShowSearch(true)
        console.log("clicked");
    }
    const closeIt = () => {
        setShowSearch(false)
        console.log("clicked false");
    }
    const toggleDrawer = () => {
        setShowDrawer(!showDrawer)
    }
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className='container flex  justify-around items-center w-[100%]'>

            <SearchBar show={showSearch} closeIt={closeIt} />
            <ClickOutside open={showDrawer} closeIt={() => setShowDrawer(false)} >
                <BasketDrawer open={showDrawer} toggle={toggleDrawer} ></BasketDrawer>
            </ClickOutside>
            <ClickOutside open={showMenu} closeIt={()=>setShowMenu(false)}>
                <MenuDrawer open={showMenu} toggle={toggleMenu} title={"תפריט"}>
                    <MenuUl closeMenuOnclick={()=>setShowMenu(false)}/>
                </MenuDrawer>
            </ClickOutside>
            <button onClick={toggleDrawer} ><ShoppingBagIcon color='black' className='h-7  ' /></button>
            <Link to={'/login'}><UserCircleIcon color='black' className='h-7' /></Link>
            <Link to={"/"}>
                <img
                    src={Logo}
                    className=" h-16 sm:h-9"
                    alt="Rivka's logo"
                />
            </Link>
            <button onClick={openIt}><MagnifyingGlassIcon color='black' className='h-7 justify-self-end' /></button>

            <button onClick={toggleMenu}><Bars3Icon className="h-7  text-black " /></button>


        </nav>
    )
}

export default CnavBar