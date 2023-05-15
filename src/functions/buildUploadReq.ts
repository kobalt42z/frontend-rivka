import { API_KEY } from "../constant";

export const buildUploadReq = (file: File) => {
    const formData = new FormData();
    
    formData.append('file', file)
    // formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('api_key', API_KEY)
   for (const iterator of formData.values()) {
    console.log(iterator);
    
   }
    
    return formData;
    
}
