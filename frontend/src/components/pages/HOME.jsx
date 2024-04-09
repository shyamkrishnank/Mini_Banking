import React from 'react'
import {Input,Button} from "@nextui-org/react"
import { useNavigate } from "react-router-dom";



function HOME() {
    const navigate = useNavigate()
 
  return (
    <div className='flex flex-col w-full gap-2 mx-80 '>
        <h1>Home</h1>
        <div><Button onClick={()=>navigate('/statement')} color="primary">Mini Statement</Button></div> 
        <div><Button onClick={()=>navigate('/withdraw')} color="primary">Withdraw</Button></div> 
        <div><Button onClick={()=>navigate('/deposit')} color="primary">Deposit</Button></div> 
        <div><Button onClick={()=>navigate('/balence')} color="primary">Balance Enquiry</Button></div> 
    </div>
  )
}

export default HOME
