import { Spinner } from 'flowbite-react'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IF } from '../components/special/if'
import { useJwtAuthMutation } from '../features/API/Auth.Api'
import { useAppSelector } from '../features/hooks'
import { authMeRes } from '../interfaces'
interface props {
    children: React.ReactNode
}
const User: FC<props> = ({ children }) => {
    const [isUser, setIsUser] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [authMe, { isLoading }] = useJwtAuthMutation()
    const navigat = useNavigate()
    const token: string | null = useAppSelector((state) => state.tokenReducer.token)
    useEffect(() => {
        async () => {
            try {
                if (!token) setInvalid(true)
                else {
                    const resp: authMeRes = await authMe(token).unwrap()
                    if (resp.valid) setIsUser(true);
                    else setInvalid(true);
                }

            } catch (e) {
                console.error(e);
                setInvalid(true);

            }
        }

    }, [])

    return (
        <>
            <IF condition={isUser}>
                {children}
            </IF>
            <IF condition={isLoading}>
                <div className='w-full h-[100vh] flex justify-center items-center'>
                    <Spinner color={'primary'} />
                </div>
            </IF>
            {invalid && navigat('/login')}
        </>
    )
}

export default User