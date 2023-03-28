
export interface Product {
  imgUrl?: string;
  name: string;
  description: string;
  sizes: string[];
  colores: string[];
  brand: string;
  reduction_p?: number;
  selling_price: number;
  base_price: number;
  active: boolean;
  supply: number;
  categorys: Array<string>;
  translated: {
    fr?: ProductTranslation
    en?: ProductTranslation
  }
}

export interface completeProduct extends Omit<Product, 'categorys'> {
  id: string;
  createdAt: string;
  updatedAt: string;
  orderId?: string[];
  categoryIds: string[]
}

export interface productResponse {
  products: completeProduct[];
  count: number;
}

interface ProductTranslation {
  name: string;
  description: string;
}
export interface EditValues {
  [key: string]: keyof Product;

}

// cat 