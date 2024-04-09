import React, { useRef, useState } from 'react'
import {Input,Button} from "@nextui-org/react"
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import {useReactToPrint} from 'react-to-print'

import axios from 'axios'


function MiniStatement() {
    const divRef = useRef()
    const[start_date, setStart_date] = useState()
    const [end_date, setEnd_date] = useState()
    const [account_number, setAccount] = useState()
    const [statement, setStatement] = useState()

    const handlePrint= useReactToPrint({
        content:() => divRef.current,
    })

    const handleSubmit = () =>{
        console.log(start_date)
        const data = {
            'account_number' : account_number,
            'start_date' : start_date,
            'end_date' : end_date
        }

        axios.post('http://127.0.0.1:8000/transaction', data)
        .then(response=>{
            setStatement(response.data.transactions)
            console.log(statement)

        })
        .catch(error=>{
            console.log(error)
        })
    }


  return (
    <div>
        <div className='flex flex-col gap-3 mx-80'>
        <div><h1 className=''>Statment</h1></div>
        <div><Input  value={account_number} onChange={e=>setAccount(e.target.value)} type='password' label='enter the account number' /></div>
        <div className='flex gap-2'><Input  value={start_date} onChange={e=>setStart_date(e.target.value)}  type="date" label="Enter the starting date" />
        <Input  value={end_date} onChange={e=>setEnd_date(e.target.value)} type='date' label='Enter the Ending date' /></div>
        <div><Button onClick={handleSubmit} color="primary"> Submit</Button></div> 
        </div>    

       {statement &&
       <div className='mx-28 mt-9'> 
       <div>
        <div className='my-5' ref={divRef}><h1> Statement // Date from : {start_date}  Date to : {end_date}</h1>
         <Table className='mt-4' >
         <TableHeader>
           <TableColumn>ID</TableColumn>
           <TableColumn>Transaction Type</TableColumn>
           <TableColumn>Amount</TableColumn>
           <TableColumn>Transaction Date</TableColumn>
         </TableHeader>
         <TableBody>
        {statement && statement.map((data)=>
            <TableRow>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.transaction}</TableCell>
              <TableCell>{data.amount}</TableCell>
              <TableCell>{data.transaction_date}</TableCell>
          </TableRow>
        )
        }
           
         </TableBody>
       </Table>
       </div>
       </div>
       <div><Button onClick={handlePrint}>Print</Button></div>
        </div>}
    </div>
  )
}

export default MiniStatement
