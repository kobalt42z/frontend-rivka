import React, { useEffect, FC, useState, useCallback } from 'react'
import { ClassicInput } from '../../../../../../../components/inputs/ClassicInput'
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { BasicProduct, SpecificationDto } from '../../../../../../../interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks';
import { supplyValidator } from '../../../Validators/addProduct.validator';
import { addSpecification } from '../../../../../../../features/Slices/productFrom.slice';
import { Button, Checkbox, Label } from 'flowbite-react';
import { Icon } from '@iconify/react';
import { UseToggle, toggler } from 'sk-use-toggle/src';
import { RSelectFormatter } from '../../../../../../../functions';
interface props {
    index: number;
    toggleFinish: toggler
    toShow: "color" | "size" | "lashes"
}

//TODO: add error handling for selectors with red border on error
const SpecificationForm: FC<props> = ({ index, toggleFinish, toShow }) => {
    const [color, setColor] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const specification = useAppSelector((state) => state.productFrom.Specifications[index] ?? null)
    const animatedComponents = makeAnimated();
    const [showColor, toggleColor] = UseToggle(specification?.color ? true : false)
    const { setError, setValue, register, clearErrors, handleSubmit, getValues, formState: { errors, isValid } } = useForm<SpecificationDto>({
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


    const length = [
        { value: '8', label: "8mm" },
        { value: '10', label: "10mm" },
        { value: '15', label: "15mm" }
    ]
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

    const onSubmit: SubmitHandler<SpecificationDto> = data => {
        console.log(data);
        dispatch(addSpecification(data));
        toggleFinish()
    }
    const handleColorChange = (c: React.ChangeEvent<HTMLInputElement>) => setColor(c.target.value)


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-5'>

            {toShow === "size" && < div >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מידות</label>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={RSelectFormatter(specification?.size??"")  }
                    isMulti={false}
                    options={sizes}
                    onChange={(c: any) => setValue('size', c.value)}
                />
            </div >}
            {toShow === "lashes" &&
                <>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">סילסול</label>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={RSelectFormatter(specification?.curve??'') }
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
                            defaultValue={RSelectFormatter(specification?.thickness??'') }
                            isMulti={false}
                            options={thickness}
                            onChange={(c: any) => { setValue('thickness', c.value) }}
                        />

                    </div >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">אורך</label>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={RSelectFormatter(specification?.length??"") }
                            isMulti={false}
                            options={length}
                            onChange={(c: any) => { setValue('length', c.value) }}
                        />

                    </div >
                </>
            }
            <ClassicInput
                labelTitle='כמות'
                type='number'
                placeholder='54'
                useFromsParams={register('supply', supplyValidator)}
                errorMessage={errors.supply?.message}
            />


            {
                toShow === "color" &&
                <div id="swatch" className='   '>
                    <input type="color" id="color" value={color ?? "#FFFFF"}   {...register('color', {
                        onBlur: () => color && setValue("color", color),
                        onChange: handleColorChange,

                    })} />
                    <div className="info">
                        <h1>לחץ לבחירת צבע</h1>
                        <h2>{color}</h2>
                    </div>
                </div>
            }
            <div className=" flex justify-between items-center flex-row-reverse">

                <Button type='submit' className=''>שמור שינויים <Icon icon="material-symbols:check"
                    height={20}
                    className='mx-1 '
                /></Button>
            </div>

        </form >
    )
}
export default SpecificationForm