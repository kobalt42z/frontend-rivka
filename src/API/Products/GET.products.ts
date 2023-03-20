import axios from "axios"
import { PAGE, PRODUCTS } from "../UrlPath"



export const GETproducts = async (token: string, page?: string) => {
    try {
        const response = await axios.get(
            PRODUCTS.FIND + '?' + PAGE + page || '',{
                headers:{
                    Authorization:"Bearer "+ token, 
                }
            })
        return response
    } catch (error) {
        throw error
    }
}