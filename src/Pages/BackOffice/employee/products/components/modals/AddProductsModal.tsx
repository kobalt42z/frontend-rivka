import { SubmitHandler, useForm } from "react-hook-form";
import { useGetCategoriesQuery } from "../../../../../../features/API/Category.Api";
import { ProductDto, categorysOptions, productFromDB } from "../../../../../../interfaces";
import { useEffect, useState } from "react";
import { UseToggle } from "sk-use-toggle/src";
import { ColorResult } from "react-color";
import { useCreateProductMutation, useUpdateProductMutation } from "../../../../../../features/API/Products.Api";
import { FormReqBuilder } from "../../../../../../functions/builders/reqBuilders";
import LashesDetails from "./LashesDetails";
import { Xsvg } from "../../../../../../assets/X";
import TranslationForm from "./translationForm";
import { ClassicInput } from "../../../../../../components/inputs/ClassicInput";
import { basePriceValidator, brandValidator, reductionValidator, sellingPriceValidator, supplyValidator } from "../../Validators/addProduct.validator";
import { Label, Tooltip } from "flowbite-react";
import ColorPiker from "../../../../../../components/ColorPicker/ColorPiker";
import ImgUploadForm from "./ImgUploadForm";
import Select from "react-select";
import makeAnimated  from "react-select/animated" ;


interface props {
    closeAddProduct: () => void
    editMode?: boolean
    editValues?: productFromDB | null
}

const AddProductsModal = ({ closeAddProduct, editMode, editValues }: props) => {

    const { isSuccess: categorySuccess, isLoading: isLoadingCategory, isError: isErrorCategory, data: categoryData, error: categoryError } = useGetCategoriesQuery();

    const categorysOptions: categorysOptions[] =

        categorySuccess && categoryData ? categoryData.categories.map(
            (item) => { return { value: item.id, label: item.name } })
            : [{ value: '63fd0b62e6bdd95ebe881033', label: "שונות" }
            ]
    if (isErrorCategory) console.error(categoryError);

    const sizes = [
        { value: '', label: 'ללא' },
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: '1', label: '1' },

    ].concat(
        Array.from({ length: 14 }, (_, i) => ({
            value: (i + 2).toString(),
            label: (i + 2).toString(),
        })))


    const defaultVal =
        editMode ?
            {
                ...editValues,
                translations: {
                    fr: {
                        language: editValues?.translations[0].language,
                        name: editValues?.translations[0].name,
                        description: editValues?.translations[0].description,
                    },
                    en: {
                        language: editValues?.translations[1].language,
                        name: editValues?.translations[1].name,
                        description: editValues?.translations[1].description,
                    }
                }
            }
            :
            {
                colors: [],
                active: true,
                translations: {
                    fr: { language: 'fr' },
                    en: { language: 'em' }
                }

            }

    //? react hook form : 
    const { setError, setValue, register, clearErrors, handleSubmit, getValues, formState: { errors, isValid } } = useForm<ProductDto>({
        defaultValues: defaultVal
    });

    // ? for react-select library:
    const animatedComponents = makeAnimated();

    const [image, setImage] = useState<File | null>(null);

    //? color chosen in color picker 
    const [colors, setColors] = useState<string[]>([])
    const [showPicker, togglePiker] = UseToggle()

    //? lashes modal toggle :
    const [showLashes, toggleLashes] = UseToggle()

    const addColor = (color: ColorResult) => {
        setColors([...getValues('colors'), color.hex])
        setValue('colors', [...getValues('colors'), color.hex])
    }
    const removeColor = (index: number) => {
        const updatedColors = colors.filter(((item, i) => i !== index))
        setColors(updatedColors)
        setValue('colors', updatedColors)
    }



    const [creatProduct,
        {
            isError: IsProductError,
            isLoading: IsCreatingProduct,
            isSuccess: ProductCreated,
        }
    ] = useCreateProductMutation()



    //?react hook form submition : 
    const onSubmit: SubmitHandler<ProductDto> = async data => {
        if (editValues) updateProduct(data);
        else createProduct(data);
    };

    const createProduct: SubmitHandler<ProductDto> = async (data) => {
        try {
            if (!image ) {
                setError('root', { message: "חובה לספק תמונה למוצר זה " })
                throw new Error("invalid image")
            };
            const requestShape = FormReqBuilder( JSON.stringify(data),image)

          
            const resp = await creatProduct(requestShape).unwrap()

            closeAddProduct();
        } catch (error) {
            console.error(error);
        }
    }

    const [sendUpdateProduct,{isError:editFaile , isSuccess:editSuccess , isLoading:editLoading}]
     = useUpdateProductMutation();

    const updateProduct: SubmitHandler<ProductDto> = async (data) => {
        if(!editValues)throw new Error("edit faild : not editValue available")
        try {
            if (!image && !editValues.imgUrl) {
                setError('root', { message: "חובה לספק תמונה למוצר זה " })
                throw new Error("invalid image")
            };
            if(image){const requestShape = FormReqBuilder(JSON.stringify(data),image)}
            const requestShape = FormReqBuilder(JSON.stringify(data))
            const resp = await sendUpdateProduct({_body:requestShape , id:editValues.id}).unwrap()
            closeAddProduct();
        } catch (error) {
            console.error(error);
        }
    }

    const { ref: categoryRef, } = register("categoryIds", {
        required: {
            value: true,
            message: "נדרשת קטגוריה אחת לפחות"
        }
    })
    const setEdit = (
        {
            name,
            active,
            base_price,
            selling_price,
            brand,
            categoryIds,
            colors,
            sizes,
            supply,
            translations,
            thickness,
            reduction_p,
            imgUrl,
            curves,
            description,

        }: productFromDB) => {

        if (editValues) {
            setValue('name', name)
            setValue('description', description)
            setValue('active', active)
            setValue('base_price', base_price)
            setValue('brand', brand)
            setValue('categoryIds', categoryIds)
            setValue('colors', colors)
            setColors(colors)
            setValue('curves', curves)
            setValue('reduction_p', reduction_p)
            setValue('selling_price', selling_price)
            setValue('sizes', sizes)
            setValue('supply', supply)
            setValue('thickness', thickness)
            if (translations[0]?.name) {
                setValue('translations.fr.name', translations[0].name)
                setValue('translations.fr.description', translations[0].description)
            }
            if (translations[1]?.name) {
                setValue('translations.en.name', translations[1].name)
                setValue('translations.en.description', translations[1].description)
            }



        }
    }


    useEffect(() => {
        console.log(editValues);
        editValues && setEdit(editValues)

    }, [])




    return (
        <>
            { }
            {/* <DarkVail> */}
                <div dir='rtl' className="  absolute z-50  justify-center  w-full md:inset-0    ">

                    {showLashes && <LashesDetails setValue={setValue} toggle={toggleLashes} />}
                    <div className=" w-full   md:h-auto md:px-32 md:py-10 bg-black bg-opacity-30  ">
                        {/* Modal content */}
                        <div className="  bg-white rounded-lg shadow p-5">
                            {/*  Modal header */}

                            <div className="flex justify-between items-center  mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">

                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeAddProduct} >
                                    <Xsvg />
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    הוספת מוצר לחנות
                                </h3>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <TranslationForm
                                    errors={errors}
                                    isValid={isValid}
                                    register={register}
                                />

                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <ClassicInput
                                        labelTitle=' מחיר קנייה - ₪'
                                        type='number'
                                        placeholder='₪500'
                                        useFromsParams={register('base_price', basePriceValidator)}
                                        errorMessage={errors.base_price?.message}

                                    />
                                    <ClassicInput
                                        labelTitle='מחיר בחנות - ₪'
                                        type='number'
                                        placeholder='₪500'
                                        useFromsParams={register('selling_price', sellingPriceValidator)}
                                        errorMessage={errors.selling_price?.message}

                                    />

                                    <ClassicInput
                                        labelTitle='חברה'
                                        type='text'
                                        placeholder='RivkaNakach'
                                        useFromsParams={register('brand', brandValidator)}
                                        errorMessage={errors.brand?.message}

                                    />
                                    <ClassicInput
                                        labelTitle='הנחה - %'
                                        type='number'
                                        placeholder='%60'
                                        useFromsParams={register('reduction_p', reductionValidator)}
                                        errorMessage={errors.reduction_p?.message}

                                    />
                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">קטגוריה</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            styles={errors.categoryIds && {
                                                control: baseStyles => ({
                                                    ...baseStyles,
                                                    borderColor: 'red'
                                                })
                                            }}
                                            isMulti
                                            options={categorysOptions}
                                            defaultValue={
                                                editValues ?
                                                    categorysOptions.filter(obj => editValues.categoryIds.includes(obj.value))
                                                    :
                                                    categorysOptions[0]
                                            }
                                            onChange={(choice) => setValue('categoryIds', choice.map((item: any) => item.value))}
                                            ref={categoryRef}
                                        />
                                        {errors.categoryIds && <p className='text-red-500'>{errors.categoryIds.message}</p>}
                                    </div >


                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מידות</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={sizes[0]}
                                            isMulti
                                            options={sizes}
                                            onChange={(choice) => setValue('sizes', choice.map(item => item.value))}
                                        />
                                    </div >




                                    <ClassicInput
                                        labelTitle='כמות'
                                        type='number'
                                        placeholder='54'
                                        useFromsParams={register('supply', supplyValidator)}
                                        errorMessage={errors.supply?.message}
                                    />

                                    {showPicker && <ColorPiker closePiker={togglePiker} addColor={addColor} />}

                                    <div className='flex flex-col items-center justify-center s'>
                                        <Tooltip content="לחץ על צבע על מנת להסירו מהרשימה">
                                            <label className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>צבעים :
                                            </label>
                                        </Tooltip>
                                        <div className='flex  '>

                                            {colors.length > 0 &&
                                                colors.map((item, id) => {
                                                    return (
                                                        <Tooltip content={`${item}`}>
                                                            <div key={id} className={`w-7 h-7 px-2 `} style={{ background: `${item}` }}
                                                                onClick={() => removeColor(id)}
                                                            ></div>
                                                        </Tooltip>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>


                                </div>
                                <div dir='ltr' id="fileUpload" className='text-right py-2'>
                                    <div className="mb-2 block text-right">
                                        <Label
                                            htmlFor="file"
                                            value="העלאת תמונה"
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <ImgUploadForm clearError={clearErrors} setImage={setImage} editImageUrl={editValues?.imgUrl} editImageName={editValues?.name} />
                                    </div>

                                    {errors.root && <p className='text-red-500'>{errors.root.message}</p>}
                                </div>
                                <div className="flex flex-row-reverse justify-between">
                                    <button
                                        onClick={togglePiker}
                                        type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">הוסף צבע
                                    </button>

                                    <button
                                        onClick={toggleLashes}
                                        type='button'
                                        className="flex h-11 items-center justify-center px-2  text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  focus:outline-none ">
                                        מידות ריסים ...
                                    </button>

                                    <button type="submit" className="flex h-11 items-center justify-center px-2  text-sm font-medium text-white rounded-lg bg-green-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  focus:outline-none ">

                                        שמור מוצר
                                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            {/* </DarkVail > */}
        </>
    )
}

export default AddProductsModal