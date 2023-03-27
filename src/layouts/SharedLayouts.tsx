import jwtDecode from 'jwt-decode'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { MainFooter } from '../components/footer/MainFooter'
import CnavBar from '../components/MainNavBar/CnavBar'

import OverLayBtn from '../components/OverLayBtn/OverLayBtn'
import { TOKEN_KEYWORD } from '../constant'
import { useAppSelector } from '../features/hooks'
import { setPayload, setToken } from '../features/Slices/Payload.slice'


export const SharedLayouts = () => {
 

  return (
    <>
      <OverLayBtn />
      <CnavBar />
      <Outlet />
      <MainFooter />
    </>
  )
}
