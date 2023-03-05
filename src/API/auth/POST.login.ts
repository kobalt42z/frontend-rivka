




export const POSTlogin = async ()=>{
   try {
    const response = await axios.post('http://localhost:3333',{email:"chmouel2690@gmail.com",password:"heloworld!"})
    return response ;
   } catch (error) {
    throw error ;
   }
}