import React, { useState } from 'react'
import {Input,Button} from "@nextui-org/react"
import axios from 'axios'



function Balence() {
    const [account_number, setAccount] = useState()
    const [current_amount, setCurrentAmount] = useState()
    const handleSubmit = () =>{
        const data = {
           'account_number':account_number
        }
        axios.post('http://127.0.0.1:8000/balence', data)
        .then(response=>{
            setCurrentAmount(response.data.balence)
        })
        .catch(error=>{
            alert('Please enter proper account number')
        })
    }

  return (
    <div>
    <div className='flex flex-col gap-6 mx-80 mt-11'>
        <div className=''><Input  value={account_number} onChange={e=>setAccount(e.target.value)} type='password' label='enter the account number' /></div>
        <div className='flex w-full justify-center'><Button onClick={handleSubmit} >Submit</Button></div>

       {current_amount && <h1> Current Balance : {current_amount}</h1>} 
        
    </div>
    </div>
  )
}

export default Balence
