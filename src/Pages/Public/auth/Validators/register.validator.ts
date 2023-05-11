import { RegisterOptions } from "react-hook-form";
import { RegisterInpute } from "../../../../interfaces";


export const firstNameValidator: RegisterOptions<RegisterInpute, 'firstName'> = {
    required: {
        value: true,
        message: 'נדרש שם משתמש תקין'
    },
    maxLength: {
        value: 10,
        message: 'יותר מדי תווים בשדה זה'
    },
    pattern: {
        value: /[a-zA-Zא-ת]/,
        message: "שם מכיל אותיות בלבד"
    }
}

export const lastNameValidator: RegisterOptions<RegisterInpute, 'lastName'> = {
    required: {
        value: true,
        message: 'נדרש שם משתמש תקין'
    },
    maxLength: {
        value: 10,
        message: 'יותר מדי תווים בשדה זה'
    },
    pattern: {
        value: /[a-zA-Zא-ת]/,
        message: "שם מכיל אותיות בלבד"
    }
}
export const phoneValidator: RegisterOptions<RegisterInpute, 'phone'> = {
    required: {
        value: true,
        message: 'נדרש מספר טלפון תקין'
    },
    maxLength: {
        value: 20,
        message: 'יותר מדי תווים בשדה זה'
    },
    pattern: {
        value: /^([0-9]{10})$/gm,
        message: "מספר הטלפון אינו תקין"
    },
}

export const emailValidator: RegisterOptions<RegisterInpute, 'email'> = {
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

export const passwordValidator: RegisterOptions<RegisterInpute,'password'> = {
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


export const CpasswordValidator: RegisterOptions<RegisterInpute,'Cpassword'> = {
    required: {
        value: true,
        message: 'שדה זה נדרש'
    },
    validate: {
        pwdMatch: (value, formValue) =>
            value === formValue.password || "ססמה אינה תואמת "
    }
}

export const acceptTermsValidator: RegisterOptions<RegisterInpute,'acceptTerms'> =  {
    required: {
        value: true,
        message: "יש לאשר את תנאי השימוש"
    }
}
