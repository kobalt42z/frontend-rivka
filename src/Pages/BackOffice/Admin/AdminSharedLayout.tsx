import React from 'react'
import { Outlet } from 'react-router-dom'
import CnavBar from '../../Public/SharedLayouts/components/NavBars/CnavBar'
import Admin from '../../../Guards/Admin'
import { MainFooter } from '../../Public/SharedLayouts/components/footer/MainFooter'


const AdminSharedLayout = () => {
    return (<>
        <CnavBar />
        <Admin>
            <div className='min-h-[80vh]'>
                <Outlet />
            </div>
        </Admin>
        <MainFooter />
    </>)
}

export default AdminSharedLayout