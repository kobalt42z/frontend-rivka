import { useState } from 'react'
import { toggler } from 'sk-use-toggle/src';
interface props {
    steps: React.ReactNode[]
}
export interface multiStepFormOut {
    currentStep: number,
    renderStep: React.ReactNode,
    goTo: (target: number) => void,
    next: (onFinish?: toggler) => void,
    prev: () => void,
}
export const useMultiStepForm = ({ steps }: props): multiStepFormOut => {
    const [currentStep, setCurrentStep] = useState(0)
    


    function next(onFinish?: toggler) {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        }
        else if (onFinish) onFinish();
    }
    function prev() {
        if (currentStep > 0)
            setCurrentStep(currentStep - 1)
    }
    function goTo(target: number) {
        if (target < steps.length - 1)
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