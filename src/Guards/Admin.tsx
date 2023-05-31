import { getAuth } from 'firebase/auth';
import React, { FC, useEffect } from 'react'
import { role } from '../interfaces';
import { useNavigate } from 'react-router-dom';
interface props {
  children: React.ReactNode
}



const Admin: FC<props> = ({ children }) => {
  const navigate = useNavigate()
  const auth = getAuth();
  const isAdmin = async () => {
    try {
      const decodedToken = await auth.currentUser?.getIdTokenResult();
      console.log(decodedToken);
      if (role.ADMIN !== decodedToken?.claims.role) navigate('/')
    } catch (error) {
      throw "no user was found"
    }
  }
  useEffect(() => {
    isAdmin()
  }, [auth])

  return (<>{children}</>)
}
export default Admin