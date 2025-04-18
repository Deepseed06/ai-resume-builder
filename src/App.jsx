import { Button } from "@/components/ui/button"
import { Route, Routes, useNavigate } from "react-router-dom"
import SignInPage from "./auth/sign-in"
import Home from "./pages/Home"
import { useUser } from "@clerk/clerk-react"

function App() {
  const navigate = useNavigate()
  const {user, isLoaded, isSignedIn} = useUser()

  if(!isSignedIn){
     navigate('/')
  }
  return isSignedIn ? (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  ) : (
    <SignInPage/>
  )
}

export default App
