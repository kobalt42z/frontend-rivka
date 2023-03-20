import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainFooter } from '../components/footer/MainFooter'
import CnavBar from '../components/MainNavBar/CnavBar'

import OverLayBtn from '../components/OverLayBtn/OverLayBtn'


export const SharedLayouts = () => {
 
  
  return (
    <>
    <OverLayBtn/>
    <CnavBar/>
    <Outlet/>
    <MainFooter/>
    </>
  )
}
