import { ProductDto } from "../../interfaces";

export const ProductReqBuilder = (image: File, body: ProductDto) => {
    const bodyStringifyed = JSON.stringify(body);
    const Form = new FormData()
    Form.append('product_description', bodyStringifyed);
    Form.append('image', image);
    return Form;
}