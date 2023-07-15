import { Icon } from '@iconify/react'
import { Accordion, Button, Label, Radio } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks'
import SpecificationForm from './SpecificationForm'
import { UseToggle } from 'sk-use-toggle/src'
import { IF } from '../../../../../../../components/special/if'
import { Disclosure } from '@headlessui/react'
import { deleteSpecification, setGoNext } from '../../../../../../../features/Slices/productFrom.slice'

export const SpecificationStep = () => {
    const dispatch = useAppDispatch()
    const Specifications = useAppSelector(state => state.productFrom.Specifications)
    const index = useAppSelector((state) => state.productFrom.SpecificationIndex)
    const [AddRow, toggleAddrow] = UseToggle(true)

    const [selectedRadio, setSelectedRadio] = useState<"color"|"lashes"|"size">('color');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(event.target.value); //fixe interface work !
    };

    React.useEffect(() => {
        if (index > 0) dispatch(setGoNext(true))
        else dispatch(setGoNext(false))
    }, [index])

    return (
        <div>
            <div>

                {!AddRow && <Button onClick={toggleAddrow}> הוספה
                    <Icon icon="ic:baseline-plus"
                        height={20}
                        className='mx-1 ' />
                </Button>
                }
                <hr className=' my-3' />
                <div className='space-y-2' >
                    <fieldset
                        className="flex max-w-md gap-4"
                        id="radio"
                    >
                        <legend className="mb-4">
                            בחר סוג
                        </legend>
                        <div className="flex items-center gap-2">
                            <Radio

                                value="color"
                                onChange={handleRadioChange}
                                checked={selectedRadio === 'color'}
                            />
                            <Label htmlFor="color">
                                color
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                value="size"
                                onChange={handleRadioChange}
                                checked={selectedRadio === 'size'}
                            />
                            <Label htmlFor="size">
                                size
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio

                                value="lashes"
                                onChange={handleRadioChange}
                                checked={selectedRadio === 'lashes'}
                            />
                            <Label htmlFor="lashes">
                                lashes
                            </Label>
                        </div>
                    </fieldset>
                    <div className=''>
                        {AddRow &&

                            <Disclosure defaultOpen>

                                {({ open }) => (<>
                                    <Disclosure.Button className=" w-full m-0 ">
                                        <div className={`w-full h-20 px-5 flex  justify-between items-center border-2 rounded-t-2xl ${!open && "rounded-2xl"} `}>
                                            <div className='flex items-center capitalize  '>
                                                פרוט מוצר חדש
                                            </div>
                                            <Icon icon={`ion:chevron-${open ? "up" : "down"}`} height={20} />
                                        </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-gray-500">
                                        <div className="border-x-2 border-b-2 rounded-b-2xl p-10">
                                            <SpecificationForm index={index} toggleFinish={toggleAddrow} toShow={selectedRadio} />
                                        </div>
                                    </Disclosure.Panel>

                                </>)}
                            </Disclosure>
                        }
                    </div>
                    <div className='space-y-3'>
                        {
                            Specifications.map((item, i) => {
                                const { size, color, curve, supply, thickness, length } = item
                                return (
                                    <div className=''>
                                        <Disclosure>
                                            {({ open }) => (<>
                                                <Disclosure.Button className=" w-full ">
                                                    <div className={`w-full h-20 px-5 flex  justify-between items-center border-2 rounded-t-2xl ${!open && "rounded-b-2xl"} `}>
                                                        <Button color={'gray'} outline onClick={() => dispatch(deleteSpecification(item))}> <Icon icon={`ph:x`} height={20} /></Button>
                                                        <div className='h-5 w-5' style={{ background: color }}></div>
                                                        <span>מידה: {size}</span>
                                                        <span>קיעור: {curve}</span>
                                                        <span>עובי: {thickness}</span>
                                                        <span>אורך: {length}</span>
                                                        <span>כמות: {supply}</span>
                                                        <Icon icon={`ion:chevron-${open ? "up" : "down"}`} height={20} />

                                                    </div>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-500 m-0">
                                                    <div className="border-x-2 border-b-2 rounded-b-2xl p-10">
                                                        <SpecificationForm index={i} toggleFinish={toggleAddrow} toShow={selectedRadio} />
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                            )}
                                        </Disclosure>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

