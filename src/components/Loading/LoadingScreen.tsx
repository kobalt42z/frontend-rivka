import { Spinner } from 'flowbite-react'
import React from 'react'
import loading  from '../../assets/loading.svg'

const LoadingScreen = () => {
  return (
    
      <div className=' fixed w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-60'>
        <img src={loading} alt="" />
      </div>
    
  )
}

export default LoadingScreen