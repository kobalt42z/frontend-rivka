import { getAuth } from 'firebase/auth'
import React, { useState, FC, ReactNode, useEffect } from 'react'
import LoadingScreen from '../components/Loading/LoadingScreen'
import { useNavigate } from 'react-router-dom'
interface props {
    children: ReactNode
    next: string
}
const GoNext: FC<props> = ({ children, next, }) => {
    const auth = getAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (auth.currentUser) navigate(next)
    }, [auth])
    return <>{children}</>;
}

export default GoNext