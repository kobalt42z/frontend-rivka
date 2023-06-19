import { categoryFromDb } from "./category.interface";
import { DBEntity } from "./global.interfaces";

//  * Req section : 
export interface ProductDto extends BasicProduct {
  translations: LangueDto[]
  Specifications: SpecificationFromDB[]
}


export interface BasicProduct {
  name: string;
  brand: string;
  description: string;
  base_price: number;
  selling_price: number;
  reduction_p: number;
  supply?: number;
  active: boolean;
  categoryIds: string[]
}

export interface SpecificationDto {
  color: string
  size: string
  curve: string
  thickness: string
  supply: number
}

export interface SpecificationFromDB extends SpecificationDto, DBEntity { }


export interface LangueDto {
  language?: languages
  name?: string;
  description?: string;
}

export type TranslationDto = {
  [key in languages]?: LangueDto

}



export interface productResponse {
  products: productFromDB[];
  count: number;
}

export interface ProductTranslation {
  language: string;
  name: string;
  description: string;
}
// export interface EditValues {
//   [key: string]: keyof Product;

// }


//  ? from the db 
export interface productFromDB extends Omit<ProductDto, 'translations' | 'Specifications'>, DBEntity {
  translations: transletionFromDb[]
  categorys: {
    name: string
    products: Omit<productFromDB, 'categorys' | "Specification" | "Comment" | "_count">[]
  }[]
  count: number
  imgUrl: string
  Specification: SpecificationDto[]
  Comment: CommentFromDB[]
  _count: {
    Comment: number,
    WishList: number
  }

}

export interface transletionFromDb {
  id: string,
  language: languages,
  name: string,
  description: string,
  productId: string
}

export type ProductResponse = {
  products: productFromDB[],
}
export interface ByCategoryResponse extends DBEntity {
  imgUrl: string;
  name: string;
  description: string;
  products: productFromDB[];
  _count: {
    products: number;
  }
}
export enum languages {
  fr = "fr",
  en = "en",
}


export interface CommentInput {
  body: string
  rating: number
}
export interface CommentFromDB extends DBEntity, CommentInput {
  userId: string
  productId: string
  user: {
    fullName: string,
    imgUrl?: string
  }
}
