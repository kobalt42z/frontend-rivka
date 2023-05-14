import React from 'react'
import Admin from '../../../Guards/Admin'
import { Outlet } from 'react-router-dom'
import { MainFooter } from '../../Public/SharedLayouts/components/footer/MainFooter'
import { BackOfficeNavBar } from './NavBars/BackOfficeNavBar'

export const BOsharedLayoutes = () => {
    return (
        <>
            <BackOfficeNavBar/>
            <Admin>
                <div className='min-h-[80vh]   '>
                    <Outlet />
                </div>
            </Admin>
            <MainFooter />
        </>
    )
}
