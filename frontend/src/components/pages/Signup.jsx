import React, { useState } from 'react'
import {Input,Button} from "@nextui-org/react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Signup() {
    const [name, Setname] = useState()
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const navigate = useNavigate()
    
    const handleSubmit = ()=>{
       const data = {
            'name':name,
            'email':email,
            'password': password
        }
        axios.post('http://127.0.0.1:8000/create_user', data)
        .then(response =>{
            alert(response.data.account + 'is your account number. please save for further')
            navigate('/login')
            
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div className='flex flex-col gap-6 mx-80'>
        <div><h1>SignUp</h1></div>
        <div><Input value={name} onChange={e=>Setname(e.target.value)} type='text' label='Name' /></div>
        <div><Input  value={email} onChange={e=>SetEmail(e.target.value)}  type="email" label="Email" /></div>
        <div><Input  value={password} onChange={e=>SetPassword(e.target.value)} type='password' label='password' /></div>
        <div><Button onClick={handleSubmit} color="primary"> Submit</Button></div>
      
    </div>
  )
}

export default Signup
