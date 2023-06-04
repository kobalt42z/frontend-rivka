
type input = {
    value: string, label?: string
} | null

export const RSelectFormatter = (value: string, label?: string) => {
   
    if (!value && !label) {
       
        return undefined

    }
    else {
 
        return label ? { value, label } : { value: value, label: value }
    }
}