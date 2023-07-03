import { specFilter } from "../features/Slices/specFilter.slice"
import { SpecificationDto, SpecificationFromDB, productFromDB } from "./product.interface"

export interface Cart {
    products: ProductInCart[]
    count: number

    // specToPush:SpecificationDto
}
export interface ProductInCart {
    basicProduct: productFromDB
    spec: specFilter
    count: number
}

export interface ProductInCartDto {
    count: number
    specifications: string[] // array of specification id to connect with 
}