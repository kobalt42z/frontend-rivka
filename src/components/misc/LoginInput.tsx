import React from 'react'
interface LoginInputProps {
  placeholder ?: string
  InjectClass ?: string
  type : string
}
const LoginInput = ({placeholder,InjectClass,type}:LoginInputProps) => {
  return (
    <input  type={type}  placeholder={placeholder} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${InjectClass&&InjectClass}`} />
  )
}

export default LoginInput