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
      <SectionBigbtn />
      <h2 className="mt-10 mb-5 text-2xl font-semibold text-color">המוצרים החמים שלנו</h2>
      <div className='container flex justify-center items-center space-x-4  p-5'>


      
        <div className='overflow-x-scroll'>
          <div className="flex space-x-3">
            

            <div className=''>
              <BasicProductCard url='https://www.ilmakiage.co.il/media/catalog/product/cache/1/image/538x538/9df78eab33525d08d6e5fb8d27136e95/7/0/700x700front-.png'
                price='136'
                description='קרם אנטי אקנה'
                subDescription={'קרם עבה '}
              />
            </div>
            <div className=''>
              <BasicProductCard url='https://www.ilmakiage.co.il/media/catalog/product/cache/1/image/538x538/9df78eab33525d08d6e5fb8d27136e95/g/a/gala_538.png'
                price='360'
                description='קרם ידיים לאוזניים'
                subDescription={'קרם עבה '}
              />
            </div>
            <div className=''>
              <BasicProductCard url='https://www.ilmakiage.co.il/media/catalog/product/cache/1/thumbnail/538x/9df78eab33525d08d6e5fb8d27136e95/4/-/4-_body_set_pack.jpg'
                price='200'
                description='קרם רגליים'
                subDescription={'קרם עבה '}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home