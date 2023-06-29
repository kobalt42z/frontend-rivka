import { SpecificationDto, SpecificationFromDB } from "./product.interface"

export interface Cart {
    products: ProductInCart[]
    count: number

    // specToPush:SpecificationDto
}
export interface ProductInCart {
    product_id: string,
    imgUrl: string
    name: string
    brand: string
    spec: SpecificationFromDB
    count: number
}

export interface ProductInCartDto {
    product_id: string,
    count: number
    specifications: string[] // array of specification id to connect with 
}