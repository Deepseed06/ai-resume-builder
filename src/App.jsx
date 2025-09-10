import { Button } from "@/components/ui/button"
import { Route, Routes, useNavigate } from "react-router-dom"
import SignInPage from "./auth/sign-in"
import Home from "./pages/Home"
import { useUser } from "@clerk/clerk-react"
import LandingPage from "./pages/LandingPage"
import Header from "./components/Header"
import Dashboard from "./pages/dashboard/Dashboard"
import EditResume from "./pages/dashboard/resume/[resumeId]/edit"
import { Toaster } from "sonner"
import ViewResume from "./my-resume/[resumeId]/view"

function App() {
  const navigate = useNavigate()
  const {user, isLoaded , isSignedIn} = useUser()

  // if(!isSignedIn){
  //    navigate('/')
  // }
  return isSignedIn ? (
    <div >
      <Header/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/my-resume/:resumeId/view" element={<ViewResume/>} />
        <Route path="/dashboard/resume/:resumeId/edit" element={<EditResume/>} />
      </Routes>
    </div>
  ) : (
    <div>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/auth/sign-in' element={<SignInPage/>} />
    </Routes>
    </div>
    
  )
}

export default App
