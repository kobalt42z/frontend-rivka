import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainFooter } from '../../components/footer/MainFooter'
import CnavBar from '../../components/MainNavBar/CnavBar'
import Admin from '../../Guards/Admin'

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