// import "./styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMultiStepForm } from "../../../../../../../Hooks/UseMultiStepForm";
import { current } from "@reduxjs/toolkit";
import BasicStep from "./BasicStep";

export default function CreateProductForm() {
    //   const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const steps: React.ReactNode[] = [
        <BasicStep />,
        
    ]
    const tabsHeader = [
        "title1",
        "title2",
        "title3",
        "title4",
        "title5",
    ]
    const {
        currentStep,
        goTo,
        next,
        prev,
        renderStep,
    } = useMultiStepForm({ steps })

    return (
        <div className="window">
            <nav className=" px-[5px] rounded-md  border-b-2 border-blue-500 ">
                <ul className="w-full flex list-none p-0 m-0">
                    {tabsHeader.map((item, i) => (
                        <li
                            key={i}
                            className={i === currentStep ? "selected" : ""}
                            onClick={() => console.log("hey " + item)}
                        >
                            {` ${item}`}
                            {i === currentStep ? (
                                <motion.div className="underline" layoutId="underline" />
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
                    >
                        {renderStep}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
