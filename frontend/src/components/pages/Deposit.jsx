import React, { useState } from 'react'
import  axios  from 'axios'
import {Input,Button} from "@nextui-org/react"


function Deposit() {
    const[account_number, setAccount] = useState()
    const [ amount, setAmount] = useState()
    const handleSubmit = ()=>{
        const data = {
            'account_number' : account_number,
            'amount' : amount
        }
        axios.post('http://127.0.0.1:8000/deposit',data )
        .then(response=>{
            alert('Amount added to the account')
        })
        .catch(error=>{
            alert('Something went wrong')
        })
    }

  return (
    <div>
     <div className='flex flex-col gap-6 mx-80'>
        <div><h1>Withdraw form</h1></div>
        <div><Input  value={account_number} onChange={e=>setAccount(e.target.value)}  type="text" label="Enter the account number" /></div>
        <div><Input  value={amount} onChange={e=>setAmount(e.target.value)} type='text' label='enter the amount to deposit' /></div>
        <div><Button onClick={handleSubmit} color="primary"> Submit</Button></div> 
    </div>
      
    </div>
  )
}

export default Deposit
