import { Spinner } from 'flowbite-react'
import React from 'react'
import { DarkVail } from '../special/DarkVail'

const LoadingScreen = () => {
  return (
    <DarkVail>
      <div className=' fixed w-full h-[100vh] flex justify-center items-center'>
        <Spinner size={'xl'} color={"info"}/>
      </div>
    </DarkVail>
  )
}

export default LoadingScreen