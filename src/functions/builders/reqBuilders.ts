import { ProductDto } from "../../interfaces";

export const FormReqBuilder = (body: string, image?: File | Blob | string) => {
    
    const Form = new FormData()
    Form.append('json_body', body);
    if (image)
        Form.append('image', image);
    return Form;
}