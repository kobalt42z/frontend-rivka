import { RegisterOptions } from "react-hook-form";

export const productNameValidator: RegisterOptions =
{
    required: {
        value: true,
        message: 'נדרש שם מוצר אחד לפחות'
    },
    maxLength: {
        value: 30,
        message: ' נדרש שם מוצר עד 30 תווים '
    }
}
export const descriptionValidator: RegisterOptions =
{
    required: {
        value: true,
        message: 'נדרש תאור מוצר בעברית לפחות '
    },
    maxLength: {
        value: 100,
        message: 'תיאור מוצר עד 100 תווים'
    }

}
export const basePriceValidator: RegisterOptions = {
    required: {
        value: true,
        message: 'נא לספק מחיר תקין '
    },
    max: {
        value: 1000000,
        message: "מחיר לא תקין"
    },
    valueAsNumber: true,

}

export const sellingPriceValidator: RegisterOptions =
{
    required: {
        value: true,
        message: 'נא לספק מחיר תקין '
    },
    max: {
        value: 1000000,
        message: "מחיר לא תקין"
    },
    valueAsNumber: true,

}
export const brandValidator: RegisterOptions = {
    required: {
        value: true,
        message: 'נא לספק שם-חברה תקינה'
    },
    maxLength: {
        value: 20,
        message: 'שם-חברה אינו עולה על 20 תווים '
    }

}

export const reductionValidator: RegisterOptions = {
    max: {
        value: 100,
        message: " הנחה באוחוזים בלבד (0-100)"
    },
    valueAsNumber: true,
}

export const supplyValidator: RegisterOptions = 
{
    required: {
        value: true,
        message: 'יש להזין כמות מוצרים תקינה'
    },
    max: {
        value: 100000,
        message: "הכמות שהוכנסה אינה תקינה"
    },
    valueAsNumber: true,

}
