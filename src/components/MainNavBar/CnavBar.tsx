import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { SearchBar } from '../SearchBar/SearchBar';
import BasketDrawer from '../basketDrawer/BasketDrawer';
import MenuDrawer from './MenuDrawer';
import MenuItem from './MenuItem';
import { ClickOutside } from '../special/ClickOutside';
import { Link, useLocation } from 'react-router-dom';
import MenuUl from './menuUl';

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import DropDawnAvatar from '../DropDownAvatar/DropDawnAvatar';
import { useLoginMutation } from '../../features/API/Auth.Api';
import { USER_KEYWORD } from '../../constant';
import { subsetUser } from '../../interfaces';
import { useAppSelector } from '../../features/hooks';


const CnavBar = () => {
    const [showSearch, setShowSearch] = React.useState(false)
    const [showDrawer, setShowDrawer] = React.useState(false)
    const [showMenu, setShowMenu] = React.useState(false)
    const location = useLocation()
    const TokenPayload = useAppSelector((state) => state.tokenReducer.tokenPayload)

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
            <button onClick={toggleDrawer} ><ShoppingBagIcon color='black' className='h-7  ' /></button>

            {TokenPayload ?
                <DropDawnAvatar label={<UserCircleIcon color='black' className='h-7' />} /> :
                <Link to={"/login"}><ArrowLeftOnRectangleIcon color='black' className='h-7' /></Link>
            }

            {/* LOGO */}
            <div className='lg:order-first lg:basis-10/12 flex justify-center '>
                <div className='lg:basis-3/12'></div>
                <Link to={"/"} className='' >
                    <img
                        src={Logo}
                        className="   lg:h-[10vh] h-16 sm:h-9"
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