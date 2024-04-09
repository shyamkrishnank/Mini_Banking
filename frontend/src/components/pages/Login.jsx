import React, { useState } from 'react'
import {Input,Button} from "@nextui-org/react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'



function Login() {
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        const data = {
            'email' :email,
            'password' : password
        }
        axios.post('http://127.0.0.1:8000/login', data)
        .then(response=>{
            console.log(response)
            navigate('/home')
        })
        .catch(error=>(
            console.log(error)
        ))
    }
    
  return (
    <div>
       <div className='flex flex-col gap-6 mx-80'>
        <div><h1>LOGIN</h1></div>
        <div><Input  value={email} onChange={e=>SetEmail(e.target.value)}  type="email" label="Email" /></div>
        <div><Input  value={password} onChange={e=>SetPassword(e.target.value)} type='password' label='password' /></div>
        <div><Button onClick={handleSubmit} color="primary"> Submit</Button></div> 
    </div>
      
    </div>
  )
}

export default Login
