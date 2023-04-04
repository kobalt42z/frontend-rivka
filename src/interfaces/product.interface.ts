
export interface Product {
  imgUrl?: string;
  name: string;
  description: string;
  colors: string[];
  brand: string;
  reduction_p?: number;
  selling_price: number;
  base_price: number;
  active: boolean;
  supply: number;
  categoryIds: Array<string>;
  sizes: (string|null)[];
  curves: string[]
  thikness: string[]
  translations: {
    fr: ProductTranslation
    en: ProductTranslation
  } 
}



export interface productResponse {
  products: productFromDB[];
  count: number;
}

interface ProductTranslation {
  language: string;
  name: string;
  description: string;
}
export interface EditValues {
  [key: string]: keyof Product;

}


//  ? from the db 
export interface productFromDB {
  id: string,
  createdAt: string,
  updatedAt: string,
  name: string,
  brand: string,
  description: string,
  base_price: string,
  selling_price: number,
  reduction_p: number,
  supply: number,
  imgUrl: string,
  colors: string[],
  sizes: string[],
  curves: string[],
  thickness: string[],
  orderId: string | null,
  categoryIds: string[],
  active: boolean,
  translations: transletionFromDb[]
  categorys: { name: string }[]
}

export interface transletionFromDb {
  id: string,
  languages: string,
  name: string,
  description: string,
  productId: string
}

export type ProductResponse ={
  products: productFromDB[],
  count: number
}