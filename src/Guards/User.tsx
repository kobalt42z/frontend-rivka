import { Spinner } from 'flowbite-react'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IF } from '../components/special/if'
import { useJwtAuthMutation } from '../features/API/Auth.Api'
import { useAppDispatch, useAppSelector } from '../features/hooks'
import { authMeRes } from '../interfaces'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { setUser } from '../features/Slices/user.slice'
interface props {
    children: React.ReactNode
}
const UserGuard: FC<props> = ({ children }) => {
    const [isUser, setIsUser] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()



    const navigat = useNavigate()

    const token: string | null = useAppSelector((state) => state.tokenReducer.token)
    const auth = getAuth()
    // ?check if user is authenticated FB 
    // check if user is in DB 
    useEffect(() => {
        setLoading(true)
        const observerUnsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false)
                dispatch(setUser({
                    uid: user.uid,
                    displayName: user.displayName ?? 'ללא שם ',
                    emailOrNumber: user.email ?? user.phoneNumber,
                    photoURL: user.photoURL ?? 'url to basic avatar !'
                }))
                setIsUser(true);
            }
            else { setInvalid(true)}
        })
        // unregister the observer for avoiding memeory lakes 
        return () => observerUnsub()
    }, [auth])

    return (
        <>
            <IF condition={isUser}>
                {children}
            </IF>
            <IF condition={loading}>
                <div className='w-full h-[100vh] flex justify-center items-center'>
                    <Spinner color={'primary'} />
                </div>
            </IF>
            {invalid && navigat('/login')}
        </>
    )
}

export default UserGuard