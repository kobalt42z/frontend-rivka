import React, { useEffect, FC, useState, useCallback } from 'react'
import { ClassicInput } from '../../../../../../../components/inputs/ClassicInput'
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { BasicProduct, specificationDto } from '../../../../../../../interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks';
import { supplyValidator } from '../../../Validators/addProduct.validator';
import { addSpecification } from '../../../../../../../features/Slices/productFrom.slice';
import { Button } from 'flowbite-react';
import { Icon } from '@iconify/react';
import { toggler } from 'sk-use-toggle/src';
import { RSelectFormatter } from '../../../../../../../functions';
interface props {
    index: number;
    toggleFinish: toggler
}

//TODO: add error handling for selectors with red border on error
const SpecificationForm: FC<props> = ({ index, toggleFinish }) => {
    const [color, setColor] = useState("#959C73")
    const dispatch = useAppDispatch()
    const specification = useAppSelector((state) => state.productFrom.specifications[index] ?? null)
    const animatedComponents = makeAnimated();
    const { setError, setValue, register, clearErrors, handleSubmit, getValues, formState: { errors, isValid } } = useForm<specificationDto>({
        defaultValues: { color: "959C73" },
        values: { ...specification ?? undefined, }
    });

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


    const curves = [
        { value: 'C', label: "C" },
        { value: 'CC', label: "CC" },
        { value: 'D', label: "D" }
    ]
    const thickness = [
        { value: '0.07', label: '0.07' },
        { value: '0.10', label: '0.10' },
        { value: '0.12', label: '0.12' },
        { value: '0.15', label: '0.15' }
    ]

    const onSubmit: SubmitHandler<specificationDto> = data => {
        console.log(data);
        dispatch(addSpecification(data));
        toggleFinish()
    }
    const handleColorChange = (c: React.ChangeEvent<HTMLInputElement>) => setColor(c.target.value)


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-5'>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מידות</label>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={RSelectFormatter(specification?.size) ?? undefined}
                    isMulti={false}
                    options={sizes}
                    onChange={(c: any) => setValue('size', c.value)}
                />
            </div >
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">קיעור</label>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={RSelectFormatter(specification?.curve) ?? undefined}
                    isMulti={false}
                    options={curves}
                    onChange={(c: any) => { setValue('curve', c.value) }}
                />

            </div >
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">עובי</label>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={RSelectFormatter(specification?.thicknes) ?? undefined}
                    isMulti={false}
                    options={thickness}
                    onChange={(c: any) => { setValue('thicknes', c.value) }}
                />

            </div >
            <ClassicInput
                labelTitle='כמות'
                type='number'
                placeholder='54'
                useFromsParams={register('supply', supplyValidator)}
                errorMessage={errors.supply?.message}
            />
            <div id="swatch" className='   '>
                <input type="color" id="color" value={color}   {...register('color', {
                    onBlur: () => setValue("color", color),
                    onChange: handleColorChange,

                })} />
                <div className="info">
                    <h1>לחץ לבחירת צבע</h1>
                    <h2>{color}</h2>
                </div>
            </div>
            <div className=" flex justify-between items-center flex-row-reverse">

                <Button type='submit' className=''>שמור שינויים <Icon icon="material-symbols:check"
                    height={20}
                    className='mx-1 '
                /></Button>
            </div>

        </form>
    )
}
export default SpecificationForm