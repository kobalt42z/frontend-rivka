import MainButtons from "../../../components/buttons/MainButtons"
import { BasicProductCard } from "../shop/components/BasicProductCard/BasicProductCard"
import ShopItem from "../shop/components/ShopItem"
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

        <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-3 gap-y-10'>
                            <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                                title={'testotest'}
                                subtitle={'miniTest'}
                                price={50}
                                sale={10}
                                addToCart={() => console.log("yay he click me ")
                                }
                                key={0}
                                id={"13542"}

                            />
                            <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                                title={'testotest'}
                                subtitle={'miniTest'}
                                price={50}
                                sale={10}
                                addToCart={() => console.log("yay he click me ")
                                }
                                key={0}
                                id={"13542"}

                            />
                            <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                                title={'testotest'}
                                subtitle={'miniTest'}
                                price={50}
                                sale={10}
                                addToCart={() => console.log("yay he click me ")
                                }
                                key={0}
                                id={"13542"}

                            />
                            <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                                title={'testotest'}
                                subtitle={'miniTest'}
                                price={50}
                                sale={10}
                                addToCart={() => console.log("yay he click me ")
                                }
                                key={0}
                                id={"13542"}

                            />
                            <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                                title={'testotest'}
                                subtitle={'miniTest'}
                                price={50}
                                sale={10}
                                addToCart={() => console.log("yay he click me ")
                                }
                                key={0}
                                id={"13542"}

                            />
                        </div>

      </div>
    </div>
  )
}

export default Home