import { useState } from 'react'
interface props {
    steps: React.ReactNode[]
}
export const useMultiStepForm = ({ steps }: props) => {
    const [currentStep, setCurrentStep] = useState(0)
    

    function next() {
        if (currentStep < steps.length){
            setCurrentStep(currentStep + 1)
        }
    }
    function prev() {
        if (currentStep > 0)
            setCurrentStep(currentStep - 1)
    }
    function goTo(target: number) {
        if (target < steps.length)
            setCurrentStep(target)
    }
    const renderStep = steps[currentStep]
    return {
        currentStep,
        renderStep,
        goTo,
        next,
        prev,
    }
};