import React, { FC, } from 'react'
import { useMultiStepForm } from '../../../../../../../Hooks/UseMultiStepForm'
import BasicStep from './BasicStep'
import SpecificationStep from './SpecificationStep'
import { useAppDispatch, useAppSelector } from '../../../../../../../features/hooks'

interface props {

}
const CreateProductForm: FC<props> = ({ }) => {
    const dispatch = useAppDispatch()
    const specIndex = useAppSelector(reducers => reducers.productFrom.specificationIndex)
    const steps: React.ReactNode[] = [
        <BasicStep />,
        // <SpecificationStep index={specIndex} />

    ]

    const addSpec = () => {
        steps.push(<SpecificationStep  index={specIndex}/>)
        
    }
    const {
        currentStep,
        goTo,
        next,
        prev,
        renderStep,
    } = useMultiStepForm({ steps })
    return (
        <div>z</div>
    )
}

export default CreateProductForm