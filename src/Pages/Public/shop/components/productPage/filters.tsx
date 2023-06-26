import React from 'react'
import { SpecificationFromDB } from '../../../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../../../features/hooks'
import SizeSpan from '../sizeSpan'
import { setCurve, setLength, setThikness } from '../../../../../features/Slices/specFilter.slice'


interface props {
    data: SpecificationFromDB[]
}
const Filters: React.FC<props> = ({ data }) => {
    const dispatch = useAppDispatch()
    const specFilter = useAppSelector((state) => state.specFilter)
    const x = <SizeSpan title='x' active />
    return (
        <div className='w-full'>

            {/* if its true meens that the product is a lash and he have to display relevant sizeSpanSelection */}
            {data[0].curve &&
                <div>
                    {
                        <div className='w-full'>
                            <h3 className='font-semibold'>סלסול</h3>
                            <div className='flex space-x-reverse space-x-2  '>
                                {data.reduce((acc: JSX.Element[], curr) => {
                                    const exist = acc.findIndex(item => item.key === `curve-${curr.curve}`)
                                    if (exist == -1 && curr.curve) {
                                        acc.push(<SizeSpan
                                            key={`curve-${curr.curve}`}
                                            title={curr.curve}
                                            active={specFilter.curve === curr.curve}
                                            onClick={() => dispatch(setCurve(curr.curve ?? ""))} />)
                                    }
                                    return acc
                                }, [])}
                            </div>
                        </div>
                    }
                    {specFilter.curve &&
                        < div className='w-full'>
                            <h3 className='font-semibold'>עובי</h3>
                            <div className='flex space-x-reverse space-x-2  '>
                                {data.reduce((acc: JSX.Element[], curr) => {
                                    if (curr.curve === specFilter.curve) {
                                        const exist = acc.findIndex(item => item.key === `thickness-${curr.thickness}`)
                                        if (exist == -1 && curr.thickness) {
                                            acc.push(<SizeSpan
                                                key={`thickness-${curr.thickness}`}
                                                title={curr.thickness}
                                                active={specFilter.thickness === curr.thickness}
                                                onClick={() => dispatch(setThikness(curr.thickness ?? ""))} />)
                                        }
                                    }
                                    return acc
                                }, [])}
                            </div>
                        </div>
                    }
                    {specFilter.thickness &&
                        < div className='w-full'>
                            <h3 className='font-semibold'>אורך</h3>
                            <div className='flex space-x-reverse space-x-2  '>
                                {data.reduce((acc: JSX.Element[], curr) => {
                                    if (curr.thickness === specFilter.thickness) {
                                        const exist = acc.findIndex(item => item.key === `length-${curr.length}`)
                                        if (exist == -1 && curr.length) {
                                            acc.push(<SizeSpan
                                                key={`length-${curr.length}`}
                                                title={curr.length}
                                                active={specFilter.length === curr.length}
                                                onClick={() => dispatch(setLength(curr.length ?? ""))} />)
                                        }
                                    }
                                    return acc
                                }, [])}
                            </div>
                        </div>
                    }
                </div>
            }

            {/* {
                <div className='w-full'>
                    <h3 className='font-semibold'>מידה</h3>
                    <div className='flex space-x-reverse space-x-2  '>

                    </div>
                </div>
            }
            {
                <div className='w-full'>
                    <h3 className='font-semibold'>צבעים</h3>
                    <div className='flex space-x-reverse space-x-2  '>



                    </div>
                </div>
            } */}
        </div>
    )
}

export default Filters