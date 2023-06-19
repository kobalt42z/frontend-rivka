import { useCallback, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { useGetMaxPageShopQuery, useGetShopQuery } from "../../../features/API/Products.Api"
import { incrementCurrentPage, setMaxPage } from "../../../features/Slices/shop.slice"
import ShopDelimiter from "./components/ShopDelimiter"
import ShopItem from "./components/ShopItem"
import LoadingScreen from "../../../components/Loading/LoadingScreen"
import ErrorsAlerter from "../../../components/errors/ErrorsAlerter"
import { IF } from "../../../components/special/if"
import CategoryCarusel from "./categoryCarusel/CategoryCarusel"
import MiniBannerAds from "./miniBannerAds/miniBannerAds"
import { Icon } from "@iconify/react"
import SortBy from "./sortBy/SortBy"
import { Outlet } from "react-router-dom"


const Shop = () => {
    const [counter, setCounter] = useState<number>(0)
    const currentPage = useAppSelector((state) => state.shop.currentPage)
    const dispatch = useAppDispatch()

    const {
        isLoading: isLoadingProducts,
        isSuccess: isProductSuccess,
        isError: isProductError,
        error: ProductError,
        data: productsResp,
        isFetching: IsFetchingProduct,



    } = useGetShopQuery(currentPage)


    // const { isSuccess: maxPageFetched, data: MaxPage } = useGetMaxPageShopQuery(undefined)

    const intersectionObserver = useRef<IntersectionObserver>()
    const lastProductRef = useCallback((product: HTMLDivElement) => {
        if (isLoadingProducts) return
        if (intersectionObserver.current) intersectionObserver.current.disconnect()
        intersectionObserver.current = new IntersectionObserver(products => {
            if (products[0].isIntersecting) {
                if (currentPage < 3) dispatch(incrementCurrentPage())
            }
        })
        if (product) intersectionObserver.current.observe(product)
    }, [isLoadingProducts])

    // useEffect(() => {
    //     if (MaxPage) dispatch(setMaxPage(MaxPage))


    // }, [maxPageFetched])








    return (
        <>
            {/* <IF condition={isLoadingProducts}> <LoadingScreen /></IF> */}
            <IF condition={false && isProductError && ProductError}>  <div className='min-h-screen'><ErrorsAlerter status={
                ProductError} /> {JSON.stringify(ProductError)} </div></IF> {/* ! tofix types*/}

            <IF condition={true || isProductSuccess}>
                < div className='container flex flex-col items-center md:px-32 py-10 px-2 bg-[var(--main-beige-color)]' >
                    {/* {RenderProduct} */}
                    <CategoryCarusel />
                    <MiniBannerAds />
                    <hr className="h-[2px] box-shadow w-[95%] mx-auto bg-mainGreen border-0 dark:bg-gray-700" />
                    <div dir="rtl" className="flex w-full px-2 space-x-reverse space-x-2 pb-2 items-center">
                        <h2 className="text-shadow text-xl">המומלצים שלנו:</h2> <Icon icon="icon-park-outline:like" width={20} color="gray" className="" />
                    </div>
                    <SortBy/>

                    <Outlet/>
                </div >
            </IF>
        </>
    )
}

export default Shop