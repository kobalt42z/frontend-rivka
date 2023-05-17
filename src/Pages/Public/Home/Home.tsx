import MainButtons from "../../../components/buttons/MainButtons"
import { BasicProductCard } from "../shop/components/BasicProductCard/BasicProductCard"
import CircleMenu from "./components/CircleMenu/CircleMenu"
import OurOffreCarusel from "./components/OurOffre/OurOffreCarusel"
import { SectionBigbtn } from "./components/SectionBigbtn/SectionBigbtn"

const Home = () => {

  return (
    <div className=' flex flex-col items-center '>
      {/* <BasketDrawer open /> */}


      <CircleMenu />
      <OurOffreCarusel />
      <div className="flex justify-center items-center">
        <MainButtons custom="w-[171px] h-[36px] text-base text-black box-shadow" >לקביעת תור </MainButtons>
      </div>
      {/* <SectionBigbtn /> */}
      <hr className="h-[2px] box-shadow w-[85%] mt-8 bg-mainGreen border-0 dark:bg-gray-700" />
      <h2 className="text-end w-[85%] text-shadow mt-3 text-base">המוצרים החמים שלנו</h2>
      <div className='container flex justify-center items-center space-x-4  p-5'>
        {/* shop */}



      </div>
    </div>
  )
}

export default Home