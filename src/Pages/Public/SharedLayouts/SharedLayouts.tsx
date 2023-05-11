import { Outlet } from "react-router-dom"
import CnavBar from "./components/NavBars/CnavBar"
import OverLayBtn from "./components/OverLayBtn/OverLayBtn"
import { MainFooter } from "./components/footer/MainFooter"



export const SharedLayouts = () => {


  return (
    <>
      <OverLayBtn />
      <div className='flex justify-center'> <CnavBar /></div>
      <Outlet />
      <MainFooter />
    </>
  )
}
