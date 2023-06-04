import React, { useState } from 'react'
import { BasicProduct, categorysOptions } from '../../../../../../../interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks';
import { ClassicInput } from '../../../../../../../components/inputs/ClassicInput';
import { basePriceValidator, brandValidator, descriptionValidator, productNameValidator, reductionValidator, sellingPriceValidator } from '../../../Validators/addProduct.validator';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TextArea } from '../../../../../../../components/inputs/TextArea';
import { Button, ToggleSwitch } from 'flowbite-react';
import { Icon } from '@iconify/react';
import { UseToggle } from 'sk-use-toggle/src';
import { Switch } from '@headlessui/react';
import { addBasicProduct, setGoNext } from '../../../../../../../features/Slices/productFrom.slice';

const BasicStep = ({ }) => {
  const animatedComponents = makeAnimated();
  const [active, toggleActive] = UseToggle(true)
  const dispatch = useAppDispatch()
  const basicProductState = useAppSelector((state) => state.productFrom.basicProduct)

  // TODO: make a function that build option from idarray in global function folder
  const categorysOptions: categorysOptions[] = [
    { label: "default", value: "idOFDEFAULT" }
  ]
  const { setError, setValue, register, clearErrors, handleSubmit, getValues, formState: { errors, isValid } } = useForm<BasicProduct>({
    values: basicProductState ?? undefined,
  });


  const onSubmit: SubmitHandler<BasicProduct> = data => {
    console.log(data);
    dispatch(addBasicProduct(data));
    dispatch(setGoNext(true))
  }

  const { ref: categoryRef, } = register("categoryIds", {
    required: {
      value: true,
      message: "נדרשת קטגוריה אחת לפחות"
    }
  })

  React.useEffect(() => {
    dispatch(setGoNext(false))
  }, [])

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
          defaultValue={
            categorysOptions[0]
          }
          onChange={(choice) => setValue('categoryIds', choice.map((item: any) => item.value))}
          ref={categoryRef}
        />
        {errors.categoryIds && <p className='text-red-500'>{errors.categoryIds.message}</p>}
      </div >
      <div className="col-span-2 flex justify-between items-center flex-row-reverse">

        <Button type='submit' className=''>שמור מוצר  <Icon icon="ic:baseline-plus" className='mx-1' /></Button>
        <div className=' space-y-3  w-[110px] ' >
          <label className='font-semibold  '> סטטוס: <span className={active ? "text-green-500" : "text-gray-500"}>{active ? "פעיל" : "לא זמין"}</span></label>
          <div dir='ltr' className="mx-auto">
            <Switch
              checked={active}
              onChange={toggleActive}
              className={`${active ? 'bg-teal-600' : 'bg-gray-500'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${active ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </form>
  )
}

export default BasicStep