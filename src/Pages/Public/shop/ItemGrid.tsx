import React from 'react'
import ShopItem from './components/ShopItem'
import { useParams } from 'react-router-dom'
import { useFindeByCategoryQuery } from '../../../features/API/Products.Api'

const ItemGrid = () => {
    //!!! ime here!!!!
    const params = useParams()
    const { isError, isSuccess, isLoading, error, data } = useFindeByCategoryQuery(params.category ?? 'Misc')
    // bring item by query using category name 
    React.useEffect(() => {
        console.log(params);
    }, [])

    return (
        <div className='container flex flex-col items-center '>
            <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-3 gap-y-10'>

                {
                    data && data.products.map(({
                        imgUrl,name,brand,selling_price,reduction_p,id
                    }, i) => (
                        <ShopItem imgUrl={imgUrl}
                            title={name}    
                            subtitle={brand}
                            price={selling_price}
                            sale={reduction_p}
                            addToCart={() => console.log("yay he click me ")
                            }
                            item_id={id}
                            key={id}
                        />
                    )
                    )
                }
                <ShopItem imgUrl="https://plus.unsplash.com/premium_photo-1675896041816-4154315d12e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=935&q=80"
                    title={'testotest'}
                    subtitle={'miniTest'}
                    price={50}
                    sale={10}
                    addToCart={() => console.log("yay he click me ")
                    }
                    key={0}
                    item_id='dsdsds'

                />
            </div>
        </div>
    )
}

export default ItemGrid