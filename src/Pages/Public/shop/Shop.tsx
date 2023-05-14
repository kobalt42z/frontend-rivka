import { useCallback, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { useGetMaxPageShopQuery, useGetShopQuery } from "../../../features/API/Products.Api"
import { incrementCurrentPage, setMaxPage } from "../../../features/Slices/shop.slice"
import ShopDelimiter from "./components/ShopDelimiter"
import ShopItem from "./components/ShopItem"
import { addToCart } from "../../../features/Slices/cart.slice"
import LoadingScreen from "../../../components/Loading/LoadingScreen"
import ErrorsAlerter from "../../../components/errors/ErrorsAlerter"
import { IF } from "../../../components/special/if"


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


    const { isSuccess: maxPageFetched, data: MaxPage } = useGetMaxPageShopQuery(undefined)

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

    useEffect(() => {
        if (MaxPage) dispatch(setMaxPage(MaxPage))
    }, [maxPageFetched])





    const RenderProduct =
        productsResp?.categoryAndItems?.map(category => {

            return (
                <>
                    <ShopDelimiter key={category.id} imgUrl={category.imgUrl} title={category.name}>


                        {category.products && category.products.map((product, i) => {
                            if (category.products && category.products.length === i + 1) {
                                return (
                                    <ShopItem imgUrl={product.imgUrl}
                                        title={product.name}
                                        subtitle={product.brand}
                                        price={product.selling_price}
                                        sale={product.reduction_p}
                                        addToCart={() => dispatch(addToCart(product))}
                                        ref={lastProductRef}
                                        key={product.id}
                                        id={product.id}
                                    />
                                )
                            } else return (
                                <ShopItem imgUrl={product.imgUrl}
                                    title={product.name}
                                    subtitle={product.brand}
                                    price={product.selling_price}
                                    sale={product.reduction_p}
                                    addToCart={() => dispatch(addToCart(product))}
                                    key={product.id}
                                    id={product.id}

                                />
                            )
                        })
                        }
                    </ShopDelimiter >
                </>
            )
        })



    return (
        <>
            <IF condition={isLoadingProducts}> <LoadingScreen /></IF>
            <IF condition={isProductError}>  <div className='min-h-screen'><ErrorsAlerter status={
                ProductError?.status} /></div></IF> {/* ! tofix types*/}

            <IF condition={isProductSuccess}>
                < div className='container flex flex-col items-center md:px-32 py-10 px-2 bg-[var(--main-beige-color)]' >
                    {RenderProduct}
                </div >
            </IF>
        </>
    )
}

export default Shop