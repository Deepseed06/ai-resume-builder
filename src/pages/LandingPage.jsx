import React from 'react'
import Header from '../components/Header'
import { useUser } from '@clerk/clerk-react'

const LandingPage = () => {
  const {user, isLoaded , isSignedIn} = useUser()
  return (
    <>
    
        <Header/>
    <div className='min-h-screen flex flex-col space-y-4 items-center justify-center w-full'>
        <h1 className='text-7xl font-semibold'>Start Creating Your Resume</h1>
        <p className='text-2xl'>Go to <a href="/auth/sign-in">dashboard</a> and start creating</p>
    </div>
    </>
  )
}

export default LandingPage