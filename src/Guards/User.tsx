import { Spinner } from 'flowbite-react'
import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IF } from '../components/special/if'
import { useAppDispatch, useAppSelector } from '../features/hooks'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { setUser } from '../features/Slices/user.slice'
import { setToken } from '../features/Slices/Payload.slice'
import { role } from '../interfaces'
interface props {
    children: React.ReactNode
    forceAuth?: boolean
}


// !TOFIX: you can pass troug the register Scheck if u navigate to another page
const UserGuard: FC<props> = ({ children, forceAuth }) => {
    const [pass, SetPass] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()



    const navigate = useNavigate()

    const token: string | null = useAppSelector((state) => state.tokenReducer.token)
    const auth = getAuth()
    const loaction = useLocation()

    const dispacthToken = async () => {
        try {
            const token = await auth.currentUser?.getIdToken()
            if (!token) return
            dispatch(setToken(token))



        } catch (error) {
            console.log('invalid token ');
        }
    }
    const isRegistred = async () => {
        try {
            const decodedToken = await auth.currentUser?.getIdTokenResult()
            if (!(Object.values(role).includes(decodedToken?.claims.role))) navigate("/register")
            return decodedToken;
        } catch (error) {
            console.log(error)
        }
    }
    // ?check if user is authenticated FB 
    // check if user is in DB 
    useEffect(() => {
        setLoading(true)

        const observerUnsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setLoading(false)
                const decodedToken = await isRegistred();
                console.log(decodedToken?.claims);
                
                dispatch(setUser({
                    uid: user.uid,
                    displayName: user.displayName ?? 'ללא שם ',
                    emailOrNumber: user.email ?? user.phoneNumber,
                    photoURL: user.photoURL ?? 'url to basic avatar !',
                    role: decodedToken?.claims.role 
                }))
                dispacthToken()
                SetPass(true);
            }
            else if (!forceAuth) {
                isRegistred();
                SetPass(true);
            }
            else {
                navigate('/login')
            }
        })
        // unregister the observer for avoiding memeory lakes 
        return () => observerUnsub()
    }, [auth])



    return (
        <>
            <IF condition={pass}>
                {children}
            </IF>
            <IF condition={loading}>
                <div className='w-full h-[100vh] flex justify-center items-center'>
                    <Spinner color={'primary'} />
                </div>
            </IF>

        </>
    )
}

export default UserGuard