// import "./styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMultiStepForm } from "../../../../../../../Hooks/UseMultiStepForm";
import { current } from "@reduxjs/toolkit";
import BasicStep from "./BasicStep";

import TranslationStep from "./TranslationStep";
import { languages } from "../../../../../../../interfaces/product.interface";
import SpecificationStep from "./specificationStep";
import { useAppDispatch, useAppSelector } from "../../../../../../../features/hooks";
import { Button, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react";
import Summary from "./Summary";
import { toggler } from "sk-use-toggle/src";

interface props {
    toggleModal: toggler
}

export const CreateProductForm: React.FC<props> = ({ toggleModal }) => {
    //   const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const canGoNext = useAppSelector((state) => state.productFrom.goNext)
    const dispatch = useAppDispatch()
    const steps: React.ReactNode[] = [
        <BasicStep />,
        <TranslationStep languages={[languages.fr, languages.en]} />,
        <SpecificationStep />,
        <Summary />,


    ]
    // dispatch(initMultiFormHook(useMultiStepForm({ steps })))

    const {
        currentStep,
        goTo,
        next,
        prev,
        renderStep,
    } = useMultiStepForm({ steps })

    const tabsHeader = [
        "מוצר בסיסי",
        "תרגום מוצר",
        "פירוט מוצר",
        "סיכום",

    ]


    return (
        <div className="window">
            <nav className=" px-[5px]   border-b-2 border-mainGreen ">
                <ul className="w-full flex list-none p-0 m-0 justify-around">
                    {tabsHeader.map((item, i) => (
                        <li
                            key={i}
                            className={`${i === currentStep ? "bg-mainGreen" : ""} w-full  h-8 flex items-center justify-center rounded-t-md `}
                        // onClick={() => goTo(i)}
                        >
                            {` ${item}`}
                            {i === currentStep ? (
                                <motion.div className="underline " layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="flex justify-center items-center flex-grow [user-select:none] ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tabsHeader[currentStep]}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full p-5"
                    >
                        {renderStep}
                    </motion.div>
                </AnimatePresence>
            </main>
            <div className="flex justify-between">
                <Button outline onClick={prev}>
                    <Icon className="mx-1" height={18} icon="mdi:arrow-right" />
                    הקודם
                </Button>
                <Tooltip className={!canGoNext ? "block " : "hidden"} content={"יש לשמור שינויים על מנת להמשיך"}>
                    <Button className=" disabled:opacity-70" disabled={!canGoNext} onClick={() => next(toggleModal)} >
                        {currentStep > steps.length - 2 ? "סיום" : "הבא"}
                        <Icon className="mx-1" height={18} icon="mdi:arrow-left" />
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}