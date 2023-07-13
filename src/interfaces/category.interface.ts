import { productFromDB } from "./product.interface"

export interface categoryFromDb {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    description: string
    products?: productFromDB[]
    productsIds: string[]
    imgUrl: string
    _count?: {
        products: 2
    }
}

export type CategoryResponse = {
    categories: categoryFromDb[]
}
export interface categorysOptions {
    value: string, label: string
}
export interface categoryDto {
    name: string
    description: string
    // products?:productFromDB[]
    productsIds: string[]

}
export interface categoryInput extends categoryDto {
    image: Blob[] | File[] | string
}

export interface shopResponse {
    categoryAndItems: categoryFromDb[]
    categoryCount: number
}
export interface Slist {
    id: string,
    name: string,
    imgUrl: string
}