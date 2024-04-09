import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import HOME from './components/pages/HOME'
import Withdraw from './components/pages/Withdraw'
import Deposit from './components/pages/Deposit'
import MiniStatement from './components/pages/MiniStatement'
import Balence from './components/pages/Balence'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element = {<Login />} />
        <Route path='/home' element={<HOME />} />
        <Route path='/withdraw' element={<Withdraw />}/>
        <Route path='/deposit' element={<Deposit />}/>
        <Route path='/statement' element={<MiniStatement />} />
        <Route path='/balence' element={<Balence />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
