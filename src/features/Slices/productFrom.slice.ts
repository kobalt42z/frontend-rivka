import { createSlice } from "@reduxjs/toolkit/src";
import { BasicProduct, LangueDto, ProductDto, TranslationDto, SpecificationDto } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { languages, productFromDB } from "../../interfaces/product.interface";
import { multiStepFormOut, useMultiStepForm } from "../../Hooks/UseMultiStepForm";


interface data {
    basicProduct: BasicProduct | null, // ? can be  a product id to add 
    translations: LangueDto[],
    translationsIndex: number
    Specifications: SpecificationDto[]
    SpecificationIndex: number
    basicProductId?: string
    goNext: boolean
    image: File | null
    reqBody: FormData
}

const initialState: data = {
    basicProduct: null,
    translations: [],
    translationsIndex: 0,
    Specifications: [],
    SpecificationIndex: 0,
    goNext: false,
    image: null,
    reqBody: new FormData(),
}



const productForm = createSlice({
    name: "productFormSlice",
    initialState,

    reducers: {
        editProduct: (state, { payload: { Specification, categorys, translations, ...rest } }: PayloadAction<productFromDB>) => {
            state.basicProduct = rest,
                state.Specifications = Specification,
                state.translations = translations 

        },
        addBasicProductId: (state, action: PayloadAction<string>) => {
            state.basicProductId = action.payload;
            state.basicProduct = null;
        },
        addBasicProduct: (state, action: PayloadAction<BasicProduct>) => {
            state.basicProduct = action.payload;
        },
        addTranslation: ({ translations, translationsIndex }, action: PayloadAction<LangueDto>) => {
            const exist = translations.findIndex(t => t.language === action.payload.language)
            if (exist === -1) {
                translations.push(action.payload)
                translationsIndex += 1;
            }
            else translations[exist] = action.payload
        },
        deleteTranslation: ({ translations, translationsIndex }, action: PayloadAction<LangueDto>) => {
            const exist = translations.findIndex(t => t.language === action.payload.language)
            if (exist !== -1) {
                translations.splice(exist, 1);
                translationsIndex -= 1;
            }
        },
        addSpecification: (state, action: PayloadAction<SpecificationDto>) => {
            const exist = state.Specifications?.findIndex(t => JSON.stringify(t) === JSON.stringify(action.payload))
            if (exist === -1) {
                state.Specifications?.push(action.payload)
                state.SpecificationIndex += 1;
            }
            else state.Specifications[exist] = action.payload
        },
        deleteSpecification: (state, action: PayloadAction<SpecificationDto>) => {
            const exist = state.Specifications?.findIndex(t => JSON.stringify(t) === JSON.stringify(action.payload))
            if (exist !== -1) {
                state.Specifications.splice(exist, 1)
                state.SpecificationIndex -= 1
            }
        },
        setGoNext: (state, action: PayloadAction<boolean>) => {
            state.goNext = action.payload
        },
        setImage: (state, action: PayloadAction<File>) => {
            state.image = action.payload
        },
        deleteImage: (state) => {
            state.image = null
        },
        init: (state) => {
            state = initialState
        },
        prepareToLaunch: (state) => {
            state.reqBody = new FormData()
            if (!state.basicProduct) return console.warn("No basic product!")
            if (!state.image) return console.warn("No image !")
            const body: ProductDto = {
                ...state.basicProduct,
                translations: state.translations,
                Specifications: state.Specifications,
            }



            state.reqBody.append("json_body", JSON.stringify(body))
            state.reqBody.append("image", state.image)
            console.log(state.image);

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
    setImage,
    prepareToLaunch
} = productForm.actions

export default productForm.reducer