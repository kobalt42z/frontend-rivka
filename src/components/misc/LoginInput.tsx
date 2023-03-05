import React from 'react'
interface LoginInputProps {
  placeholder ?: string
  InjectClass ?: string
  type : string
  useFormParams:any[];

}
const LoginInput = ({placeholder,InjectClass,type,useFormParams}:LoginInputProps) => {
  return (
    <input  type={type} {...useFormParams}  placeholder={placeholder} className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${InjectClass&&InjectClass}`} />
  )
}

export default LoginInput