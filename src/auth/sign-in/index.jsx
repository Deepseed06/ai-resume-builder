import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <SignIn/>
    </div>
  )
}

export default SignInPage