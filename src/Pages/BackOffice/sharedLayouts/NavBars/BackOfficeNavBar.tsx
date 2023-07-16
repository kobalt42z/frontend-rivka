import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import Logo from '../../../../assets/RivkaLogoTrans.png'
import { ClickOutside } from '../../../../components/special/ClickOutside'
import MenuDrawer from '../../../Public/SharedLayouts/components/menu/MenuDrawer'
import MenuUl from '../../../Public/SharedLayouts/components/menu/menuUl'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { UseToggle } from 'sk-use-toggle/src'
import { Link } from 'react-router-dom'

export const BackOfficeNavBar = () => {
    const [showMenu, toggleMenu] = UseToggle();
    // const [showMe, toggleMenu] = UseToggle();

    return (
        <div className=' pb-5 '>
            <Navbar

                fluid={true}
                rounded={true}
            >
                <Navbar.Brand className='' >
                    <Link to={'/'}>
                    <img
                        src={Logo}
                        className="mr-3 h-15 sm:h-[8vh]"
                        alt="Flowbite Logo"
                    />
                    </Link>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        מערכת ניהול
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <button onClick={toggleMenu}><Bars3Icon className="h-7 mx-5  text-black " /></button>
                </div>
                <ClickOutside open={showMenu} closeIt={toggleMenu}>
                    <MenuDrawer open={showMenu} toggle={toggleMenu} title={"תפריט"}>
                        <MenuUl closeMenuOnclick={toggleMenu} />
                    </MenuDrawer>
                </ClickOutside>
            </Navbar>
        </div>
    )
}
