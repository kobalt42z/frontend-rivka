import { RegisterOptions, UseFormRegister, UseFormRegisterReturn } from "react-hook-form"
import { categoryDto } from "../../../../../interfaces"; 
interface AddCategoryValidator {
    [key: string]: RegisterOptions<categoryDto>

}

export const CategoryNameValidator: RegisterOptions<categoryDto, 'name'> = {
    required: { value: true, message: "נדרש שם תקין" },
    pattern: {
        value: /^[A-Za-zא-ת ]+$/,
        message: "שם המכיל אותיות בעברית או אנגלית בלבד"
    },
    maxLength: {
        value: 15,
        message: "שם עד 15 תווים "
    }
};

export const CategoryDescriptionValidator: RegisterOptions<categoryDto, 'description'> = {
    required: { value: true, message: "נדרש תיאור קטגוריה תקין " },
    maxLength: { value: 50, message: "תיאור עד 50 תווים " },
    pattern: {
        value: /^[A-Za-zא-ת ]+$/,
        message: "תיאור המכיל אותיות בעברית או אנגלית בלבד"
    }
}

