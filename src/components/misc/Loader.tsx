import jwtDecode from 'jwt-decode'
import React, { FC, useEffect } from 'react'
import { TOKEN_KEYWORD } from '../../constant'
import { useAppDispatch } from '../../features/hooks'
import { setPayload, setToken } from '../../features/Slices/Payload.slice'
import { userTokenPayload } from '../../interfaces'
interface props {
    children: React.ReactNode
}
/*
* this component load from local storage when app start 
* she responsable to load usr info from token and display them over the app 
! pay attention the info here is not verifed so they need to be used only for display, when a sensitive action is performed you have to verify the signatur in front of backend !! to avoid fake tokens and bypassing roles 
?the guards components responsable of token validation 
*/


const Loader: FC<props> = ({ children }) => {
    const dispatch = useAppDispatch()



    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEYWORD);
        if (token) {
            const decoded: userTokenPayload = jwtDecode(token)
            if (Date.now() / 1000 >= decoded.exp) {
                console.log("token expired");
                localStorage.removeItem(TOKEN_KEYWORD)
            }
            else {
                dispatch(setToken(token))
                dispatch(setPayload(decoded))
            }
        }
        else {
            console.log("not token stored");
        }
    }, [])


    return (

        <>{children}</>
    )
}

export default Loader