import React, { FC, useState } from 'react'
import { ClassicInput } from '../../../../../../../components/inputs/ClassicInput'
import { TextArea } from '../../../../../../../components/inputs/TextArea'
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks'
import { LangueDto } from '../../../../../../../interfaces'
import { SubmitHandler, useForm } from 'react-hook-form'
import { descriptionValidator, productNameValidator } from '../../../Validators/addProduct.validator'
import { addTranslation, deleteTranslation } from '../../../../../../../features/Slices/productFrom.slice'
import { Button } from 'flowbite-react'
import { Icon } from '@iconify/react'
import { languages } from '../../../../../../../interfaces/product.interface'

interface props {
    language: languages
}
const TranslationForm: FC<props> = ({ language }) => {
    const dispatch = useAppDispatch()
    const [Delete, setDelete] = useState(false)
    const translation = useAppSelector((state) => state.productFrom.translations.find(
        item => item.language === language
        ))
    const { setError, setValue, register, clearErrors, handleSubmit, getValues,resetField, formState: { errors, isValid } } = useForm<LangueDto>({
        values: translation ?? undefined,
        defaultValues: {
            language
        }
    });

    const onSubmit: SubmitHandler<LangueDto> = data => {
        console.log(data);
        if (Delete) {
            dispatch(deleteTranslation(data))
            setValue('name',"")
            setValue('description',"")
            setDelete(false)
        }else dispatch(addTranslation(data));
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-5'>
            <ClassicInput
                labelTitle='שם  מוצר'
                language={language}
                type='text'
                placeholder='שם מוצר '
                useFromsParams={register('name', productNameValidator)}
                errorMessage={errors.name && errors.name.message}
            />
            <TextArea
                placeholder="תאור מוצר  עד 100 תווים"
                labelTitle='תאור מוצר'
                language={language}
                useFromsParams={register('description', descriptionValidator)}
                errorMessage={errors.description && errors.description?.message}
            />

            <div className=" flex justify-between items-center flex-row-reverse">

                <Button type='submit' className=''>שמור שינויים  <Icon icon="material-symbols:check"
                    height={20}
                    className='mx-1 ' /></Button>
                <Button onClick={() => setDelete(true)} type='submit' className='' color={"failure"}>מחק שינויים  <Icon icon="teenyicons:x-outline"
                    height={15}
                    className='mx-1 ' /></Button>
            </div>
        </form>
    )
}

export default TranslationForm