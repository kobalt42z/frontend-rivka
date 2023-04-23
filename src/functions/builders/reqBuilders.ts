import { ProductDto } from "../../interfaces";

export const FormReqBuilder = (image: File, body: string) => {
    // const bodyStringifyed = JSON.stringify(body);
    const Form = new FormData()
    Form.append('json_body', body);
    Form.append('image', image);
    return Form;
}