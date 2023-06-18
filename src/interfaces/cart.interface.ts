import { SpecificationDto } from "./product.interface"

export interface Cart {
    products: ProductInCart[]
}
export interface ProductInCart {
    product_id: string,
    imgUrl: string
    name: string
    description: string
    spec: specInCart
}
export interface specInCart {
    spec: SpecificationDto[],
    count: 0
}

/*
* step 1:   product id exist in products ? 
    ? true :
        * spec exist in  product[id].spec ?
            ?true : product[id].spec[color].counter ++ 
            !false : product[id].spec.push(spec);
    !false : 
        !products.push(product{...prod,spec:[{...spec}]})
 */