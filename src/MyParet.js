import React, { useState } from 'react'
import MyForm1 from './MyForm1'
import DisplayData from './DisplayData'
import Button from '@mui/material/Button';

export default function MyParent() {

    const [open, setOpen] = React.useState(false);
    const [data,setData]= useState([])
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
  return (
    <div>
        
        <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

        <MyForm1 open={open} handleClose={handleClose} data={data} setData={setData}/>
        <DisplayData data={data}/>
    </div>
  )
}
