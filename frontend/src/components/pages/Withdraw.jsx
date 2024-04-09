import React, { useState } from 'react'
import  axios  from 'axios'
import {Input,Button} from "@nextui-org/react"



function Withdraw() {
    const[account_number, setAccount] = useState()
    const [ amount, setAmount] = useState()
    const handleSubmit = ()=>{
        const data = {
            'account_number' : account_number,
            'amount' : amount
        }
        axios.post('http://127.0.0.1:8000/withdraw',data )
        .then(response=>{
            console.log(response)
            alert('Amount withdrawn from the account')
        })
        .catch(error=>{
            console.log(error)
            alert('something went wrong')
        })
    }

  return (
    <div>
     <div className='flex flex-col gap-6 mx-80'>
        <div><h1>Withdraw form</h1></div>
        <div><Input  value={account_number} onChange={e=>setAccount(e.target.value)}  type="text" label="Enter the account number" /></div>
        <div><Input  value={amount} onChange={e=>setAmount(e.target.value)} type='text' label='enter the amount to withdraw' /></div>
        <div><Button onClick={handleSubmit} color="primary"> Submit</Button></div> 
    </div>
      
    </div>
  )
}

export default Withdraw
