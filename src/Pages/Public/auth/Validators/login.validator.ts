import { RegisterOptions } from "react-hook-form"
import { LoginInputs } from "../../../../interfaces"


export const lemailValidator: RegisterOptions<LoginInputs, 'email'> = {
    required: {
        value: true,
        message: 'נדרשת כתובת מייל'
    },
    maxLength: {
        value: 50,
        message: "יותר מדיי תווים בשדה זה"
    },
    pattern: {
        value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
        message: "כתובת המייל אינה תקינה"
    }
}

export const lpasswordValidator: RegisterOptions<LoginInputs,'password'> = {
    required: {
        value: true,
        message: "נדרשת סיסמא תקינה"
    },
    maxLength: {
        value: 16,
        message: "סיסמא עד 16 תווים"
    },
    minLength: {
        value: 8,
        message: "סיסמא לפחות 8 תווים"
    }
}