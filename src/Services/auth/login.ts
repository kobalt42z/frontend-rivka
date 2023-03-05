import { POSTlogin } from "../../API/index";
import Credentials from "../../interfaces/auth.interface";

export const login = (crede : Credentials) => {
    const response = POSTlogin();
    console.log(response); 
    
    
};