import axios,{AxiosError} from "axios";
import LoginCredentials from "../../interfaces/auth.interface";

export const POSTlogin = async (cred:LoginCredentials)=>{
   try {
    const response = await axios.post('http://localhost:3333/auth/login',{email:cred.email,password:cred.password});
    return response ;
   } catch (error) {
    throw error ;
   }
}