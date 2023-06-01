import { Icon } from '@iconify/react'
import { Accordion, Button } from 'flowbite-react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks'
import SpecificationForm from './SpecificationForm'
import { UseToggle } from 'sk-use-toggle/src'
import { IF } from '../../../../../../../components/special/if'
import { Disclosure } from '@headlessui/react'

const SpecificationStep = () => {
    const dispatch = useAppDispatch()
    const specifications = useAppSelector(state => state.productFrom.specifications)
    const index = useAppSelector((state) => state.productFrom.specificationIndex)
    const [AddRow, toggleAddrow] = UseToggle()
    return (
        <div>
            <div>
                <Button className='' onClick={toggleAddrow}> הוספה
                    <Icon icon="ic:baseline-plus"
                        height={20}
                        className='mx-1 ' />
                </Button>
                <hr className=' my-3' />
                <div className='space-y-2' >
                    <div className=''>
                        {AddRow &&

                            <Disclosure>

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
                                            <SpecificationForm index={index} />
                                        </div>
                                    </Disclosure.Panel>

                                </>)}
                            </Disclosure>
                        }
                    </div>
                    <div className='space-y-3'>
                        {
                            specifications.map(({ size, color, curve, supply, thicknes }, i) => {
                                return (
                                    <div className=''>
                                        <Disclosure>
                                            {({ open }) => (<>
                                                <Disclosure.Button className=" w-full ">
                                                    <div className={`w-full h-20 px-5 flex  justify-between items-center border-2 rounded-t-2xl ${!open && "rounded-b-2xl"} `}>
                                                        <div className='h-5 w-5' style={{ background: color }}></div>
                                                        <span>מידה: {size}</span>
                                                        <span>קיעור: {curve}</span>
                                                        <span>עובי: {thicknes}</span>
                                                        <span>כמות: {supply}</span>
                                                        <Icon icon={`ion:chevron-${open ? "up" : "down"}`} height={20} />
                                                    </div>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-500 m-0">
                                                    <div className="border-x-2 border-b-2 rounded-b-2xl p-10">
                                                        <SpecificationForm index={i} />
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

export default SpecificationStep