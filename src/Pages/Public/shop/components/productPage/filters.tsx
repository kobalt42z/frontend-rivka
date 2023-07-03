import React from 'react'
import { SpecificationFromDB } from '../../../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../../../features/hooks'
import SizeSpan from '../sizeSpan'
import { setColor, setCurve, setItem, setLength, setSize, setThikness } from '../../../../../features/Slices/specFilter.slice'
import ColorSpan from '../colorSpan'


interface props {
    data: SpecificationFromDB[]
}
const Filters: React.FC<props> = ({ data }) => {
    const dispatch = useAppDispatch()
    const specFilter = useAppSelector((state) => state.specFilter)

    const curve = data.reduce((acc: JSX.Element[], curr) => {
        const exist = acc.findIndex(item => item.key === `curve-${curr.curve}`)
        if (exist == -1 && curr.curve) {
            acc.push(<SizeSpan
                key={`curve-${curr.curve}`}
                title={curr.curve}
                active={specFilter.curve === curr.curve}
                onClick={() => dispatch(setCurve(curr.curve ?? ""))} />)
        }
        return acc
    }, [])

    const thickness = data.reduce((acc: JSX.Element[], curr) => {
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
    }, [])

    const length = data.reduce((acc: JSX.Element[], curr) => {
        if (curr.thickness === specFilter.thickness) {
            const exist = acc.findIndex(item => item.key === `length-${curr.length}`)
            if (exist == -1 && curr.length) {
                acc.push(<SizeSpan
                    key={`length-${curr.length}`}
                    title={curr.length}
                    active={specFilter.length === curr.length}
                    onClick={() => {
                        dispatch(setLength(curr.length ?? ""))
                        dispatch(setItem(curr.id))
                    }
                    } />)
            }
        }
        return acc
    }, [])


    const size = data.reduce((acc: JSX.Element[], curr) => {
        if (curr.size) {
            console.log(curr);

            acc.push(<SizeSpan
                key={`size-${curr.size}`}
                title={curr.size ?? ""}
                active={specFilter.size === curr.size}
                onClick={() => {
                    dispatch(setSize(curr.size ?? ''))
                    dispatch(setItem(curr.id))
                }}
            />)
        }
        return acc
    }, [])


    const color = data.reduce(
        (acc: JSX.Element[], curr) => {
            if (curr.color) {
                console.log(curr);

                acc.push(<ColorSpan
                    key={`color-${curr.color}`}
                    color={curr.color ?? ""}
                    active={specFilter.color === curr.color}
                    onClick={() => {
                        dispatch(setColor(curr.color ?? ''))
                        dispatch(setItem(curr.id ?? ''))
                    }}
                />)
            }
            return acc
        }, [])

    return (
        <div className='w-full'>

            {/* if its true meens that the product is a lash and he have to display relevant sizeSpanSelection */}
            {data[0].curve &&
                <div>
                    {
                        <div className='w-full'>
                            <h3 className='font-semibold'>סלסול</h3>
                            <div className='flex space-x-reverse space-x-2  '>
                                {curve}
                            </div>
                        </div>
                    }
                    {specFilter.curve && thickness.length > 0 &&
                        < div className='w-full'>
                            <h3 className='font-semibold'>עובי</h3>
                            <div className='flex space-x-reverse space-x-2  '>
                                {thickness}
                            </div>
                        </div>
                    }
                    {specFilter.thickness && length.length > 0 &&
                        < div className='w-full'>
                            <h3 className='font-semibold'>אורך</h3>
                            <div className='flex space-x-reverse space-x-2  '>
                                {length}
                            </div>
                        </div>
                    }
                </div>
            }

            {size.length > 0 &&
                <div className='w-full'>
                    <h3 className='font-semibold'>מידה</h3>
                    <div className='flex space-x-reverse space-x-2  '>
                        {size}
                    </div>
                </div>
            }
            {color.length > 0 &&
                <div className='w-full'>
                    <h3 className='font-semibold'>צבעים</h3>
                    <div className='flex space-x-reverse space-x-2  '>
                        {color}


                    </div>
                </div>
            }
        </div>
    )
}

export default Filters