import { useAppDispatch, useAppSelector } from "../store/hooks"
import { loadFromCache, loginStart } from "../store/loginSlice"

export const mainLoader = async () =>{
    const dispatch = useAppDispatch()
    const authSelector = useAppSelector((state) => state.login)
    try {
        // dispatch(loginStart())
        // dispatch(loadFromCache())
        console.log();
        return true 
    } catch (error) {
        throw error
    }
}