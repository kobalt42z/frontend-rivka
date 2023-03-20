import axios, { AxiosError } from "axios";
import LoginCredentials from "../../interfaces/auth.interface";
import { AUTH } from "../UrlPath";

export const POSTlogin = async (cred: LoginCredentials) => {
   try {
      const response = await axios.post(AUTH.LOGIN, { email: cred.email, password: cred.password });
      return response;
   } catch (error) {
      throw error;
   }
}