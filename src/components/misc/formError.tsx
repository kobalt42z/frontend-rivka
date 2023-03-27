import React from 'react'
import { ErrorOption, FieldError, FieldErrors } from 'react-hook-form'

const FormError = ({error}:{error?:FieldError}) => {
  return (
   <>
    {error &&<p className='text-red-500 text-base text-right'>{error.message}</p>}
   </>
  )
}

export default FormError