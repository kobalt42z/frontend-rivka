import { SpecificationDto, SpecificationFromDB } from "./product.interface"

export interface Cart {
    products: ProductInCart[]
    count: number
}
export interface ProductInCart {
    product_id: string,
    imgUrl: string
    name: string
    brand: string
    spec: SpecificationFromDB
    count: number
}


