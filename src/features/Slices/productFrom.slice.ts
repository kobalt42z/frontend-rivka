import { createSlice } from "@reduxjs/toolkit/src";
import { BasicProduct, LangueDto, ProductDto, TranslationDto, specificationDto } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { languages } from "../../interfaces/product.interface";
import { multiStepFormOut, useMultiStepForm } from "../../Hooks/UseMultiStepForm";


interface data {
    basicProduct: BasicProduct | null, // ? can be  a product id to add 
    translations: TranslationDto,
    specifications: specificationDto[]
    specificationIndex: number
    basicProductId?: string
    goNext: boolean
    image: File | null
}

const initialState: data = {
    basicProduct: null,
    translations: {
        fr: undefined,
        en: undefined,
    },
    specifications: [],
    specificationIndex: 0,
    goNext: false,
    image: null
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

            if (!action.payload.language) return
            state.translations[action.payload.language] = action.payload
        },
        deleteTranslation: (state, action: PayloadAction<LangueDto>) => {
            if (!action.payload.language) return
            state.translations[action.payload.language] = undefined
        },
        addSpecification: (state, action: PayloadAction<specificationDto>) => {
            const exist = state.specifications?.findIndex(t => JSON.stringify(t) === JSON.stringify(action.payload))
            if (exist === -1) {
                state.specifications?.push(action.payload)
                state.specificationIndex += 1;
            }
            else state.specifications[exist] = action.payload
        },
        deleteSpecification: (state, action: PayloadAction<specificationDto>) => {
            const exist = state.specifications?.findIndex(t => JSON.stringify(t) === JSON.stringify(action.payload))
            if (exist !== -1) {
                state.specifications.splice(exist, 1)
                state.specificationIndex -= 1
            }
        },
        setGoNext: (state, action: PayloadAction<boolean>) => {
            state.goNext = action.payload
        },
        setImage: (state, action: PayloadAction<File>) => {
            state.image = action.payload
        },
        deleteImage: (state)  => {
            state.image = null
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
    setGoNext,
    deleteImage,
    setImage
} = productForm.actions

export default productForm.reducer