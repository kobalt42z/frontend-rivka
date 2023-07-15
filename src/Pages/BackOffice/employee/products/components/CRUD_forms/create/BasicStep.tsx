import React, { useState } from 'react'
import { BasicProduct, categorysOptions } from '../../../../../../../interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks';
import { ClassicInput } from '../../../../../../../components/inputs/ClassicInput';
import { basePriceValidator, brandValidator, descriptionValidator, productNameValidator, reductionValidator, sellingPriceValidator } from '../../../Validators/addProduct.validator';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TextArea } from '../../../../../../../components/inputs/TextArea';
import { Button, Label, ToggleSwitch } from 'flowbite-react';
import { Icon } from '@iconify/react';
import { UseToggle } from 'sk-use-toggle/src';
import { Switch } from '@headlessui/react';
import { addBasicProduct, setGoNext } from '../../../../../../../features/Slices/productFrom.slice';
import ImgUploadForm from '../../modals/ImgUploadForm';


// * is the basic product step in creat product form 
const BasicStep = ({ }) => {

  //ReactSelect hooks :
  const animatedComponents = makeAnimated();


  //redux interaction
  const dispatch = useAppDispatch()
  const basicProductState = useAppSelector((state) => state.productFrom.basicProduct)




  // catogry option for react select field 
  const categorysOptions: categorysOptions[] = [
    { label: "default", value: "646ba62e4bf2d430be37d5e1" }
  ]

  // use form init hook 
  const { setError, setValue, register, clearErrors, handleSubmit, getValues, formState: { errors, isValid } } = useForm<BasicProduct>({
    // init the form with default values from actual state in redux, for edit mode !
    defaultValues: basicProductState ?? {active:true},
  });



  // call back to execute when saving the first step data 
  const onSubmit: SubmitHandler<BasicProduct> = ({ image, ...rest }) => {
    let data = { image, ...rest };

    // check if data is exist and if its a file |blob  in that case create URl and dispatch it 
    if (image && typeof image != "string") {
      console.log(image);
      data = {
        image: URL.createObjectURL(image[0]),
        ...rest,
      }
    }
    // else dispatch the actual url and update the rest 
    dispatch(addBasicProduct(data));
    dispatch(setGoNext(true))
  }

  const { ref: categoryRef, } = register("categoryIds", {
    required: {
      value: true,
      message: "נדרשת קטגוריה אחת לפחות"
    }
  })


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-5'>
      <section className='col-span-2' >

        <ClassicInput
          labelTitle='שם  מוצר'
          language='עברית '
          type='text'
          placeholder='שם מוצר בעברית'
          useFromsParams={register('name', productNameValidator)}
          errorMessage={errors.name && errors.name.message}
        />
        <TextArea
          placeholder="תאור מוצר בעברית עד 100 תווים"
          labelTitle='תאור מוצר'
          language='בעברית'
          useFromsParams={register('description', descriptionValidator)}
          errorMessage={errors.description && errors.description?.message}
        />
      </section>
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
          onChange={(choice) => setValue('categoryIds', choice.map((item: any) => item.value))}
          ref={categoryRef}
        />
        {errors.categoryIds && <p className='text-red-500'>{errors.categoryIds.message}</p>}
      </div >
      <div dir='ltr' id="fileUpload" className='text-right  '>
        <div className="mb-2 block text-right">
          <Label
            htmlFor="file"
            value="העלאת תמונה"
          />
        </div>
        <div className='w-full '>
          <ImgUploadForm register={register} setValue={setValue} getValues={getValues} />
          {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
        </div>

      </div>
      <div className="col-span-2 flex justify-between items-center flex-row-reverse">

        <Button type='submit' className=''>שמור מוצר  <Icon icon="ic:baseline-plus" className='mx-1' /></Button>
        <div className=' space-y-3  w-[110px] ' >
          <div dir='ltr' className="flex items-center">
          
          
          </div>

        </div>
      </div>
    </form>
  )
}

export default BasicStep