import MainButtons from "../../../components/buttons/MainButtons"
import { useFindeByCategoryQuery } from "../../../features/API/Products.Api"
import { BasicProductCard } from "../shop/components/BasicProductCard/BasicProductCard"
import ShopItem from "../shop/components/ShopItem"
import CircleMenu from "./components/CircleMenu/CircleMenu"
import OurOffreCarusel from "./components/OurOffre/OurOffreCarusel"
import { SectionBigbtn } from "./components/SectionBigbtn/SectionBigbtn"

const Home = () => {
  const { isError, isLoading, data, error, isSuccess } = useFindeByCategoryQuery('646ba62e4bf2d430be37d5e1')
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

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-x-3 md:gap-x-10 gap-y-10'>

          {isSuccess && data &&
            data.products.map(item =>
              <ShopItem imgUrl={item.imgUrl}
                title={item.name}
                subtitle={item.brand}
                price={item.selling_price}
                sale={item.reduction_p}
                item_id={item.id}
                key={item.id}


              />)
          }
        </div>

      </div>
    </div>
  )
}

export default Home