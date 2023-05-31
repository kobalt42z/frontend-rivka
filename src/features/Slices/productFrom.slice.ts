import { createSlice } from "@reduxjs/toolkit/src";
import { BasicProduct, LangueDto, ProductDto, specificationDto } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

interface data {
    basicProduct: BasicProduct | null, // ? can be  a product id to add 
    translations: LangueDto[]
    specifications: specificationDto[]
    basicProductId?: string
}

const initialState: data = {
    basicProduct: null,
    translations: [],
    specifications: [],
}

const productForm = createSlice({
    name: "productFormSlice",
    initialState,
    reducers: {
        addBasicProductId: (state, action: PayloadAction<string>) => {
            state.basicProductId = action.payload;
            state.basicProduct = null;
        },
        addBasicProduct: (state, action: PayloadAction<BasicProduct>) => {
            state.basicProduct = action.payload;
        },
        addTranslation: (state, action: PayloadAction<LangueDto>) => {
            const exist = state.translations?.findIndex(t=>JSON.stringify(t) ===JSON.stringify( action.payload));
            if (exist === -1) state.translations?.push(action.payload)
            else state.translations[exist] = action.payload
        },
        deleteTranslation: (state, action: PayloadAction<LangueDto>) => {
            const exist = state.translations?.findIndex(t=>JSON.stringify(t) ===JSON.stringify( action.payload))
            if (exist !== -1) state.translations.splice(exist, 1)
        },
        addSpecification: (state, action: PayloadAction<specificationDto>) => {
            const exist = state.specifications?.findIndex(t=>JSON.stringify(t) ===JSON.stringify( action.payload))
            if (exist === -1) state.specifications?.push(action.payload)
            else state.specifications[exist] = action.payload
        },
        deleteSpecification: (state, action: PayloadAction<specificationDto>) => {
            const exist = state.specifications?.findIndex(t=>JSON.stringify(t) ===JSON.stringify( action.payload))
            if (exist !== -1) state.specifications.splice(exist, 1)
        },
        init: (state) => {
            state = initialState
        }
    }
})

export const { addBasicProduct,
    addSpecification,
    addTranslation,
    deleteSpecification,
    deleteTranslation,
    addBasicProductId,
    init,
} = productForm.actions

export default productForm.reducer