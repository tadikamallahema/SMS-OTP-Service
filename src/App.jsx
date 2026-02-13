import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
//import Login from './pages/Login'
import SignUp from './pages/SignUp'
import VerifyOtpPage from './pages/VerifyOtpPage'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/verify' element={<VerifyOtpPage/>}/>
      </Routes>
    </>
  )
}

export default App
