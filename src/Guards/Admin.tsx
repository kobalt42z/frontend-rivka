import { Spinner } from 'flowbite-react'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IF } from '../components/special/if'
import { TOKEN_KEYWORD } from '../constant'
import { useJwtAuthMutation } from '../features/API/Auth.Api'
import { useAppSelector } from '../features/hooks'
import { authMeRes, role } from '../interfaces'
import { Forbidden } from '../layouts/404/Forbidden'

interface props {
  children: React.ReactNode
}
const Admin: FC<props> = ({ children }) => {
  const [jwtAuth, { isLoading }] = useJwtAuthMutation()
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const token = useAppSelector((state) => state.tokenReducer.token)

  const auth = async (token: string) => {
    

    try {
      const response: authMeRes = await jwtAuth(token).unwrap()
      if (response.payload.role === role.ADMIN) setIsAdmin(true);

    } catch (err) {
      console.error(err);
      setIsInvalid(true)
    }
  }
  
  useEffect(() => {
    
    if(token)auth(token)
    else navigate("/login")
    
  },[])

  return (
    <>

      <IF condition={isLoading}>
        <div className='w-full h-[100vh] flex justify-center items-center'>
          <Spinner color={"failure"} size={'xl'} />
        </div>
      </IF>
      <IF condition={isAdmin}>
        {children}
      </IF>
      <IF condition={isInvalid}>
        <Forbidden />
      </IF>
    </>
  )
}

export default Admin