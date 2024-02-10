import React, { useState } from 'react'
import MyForm1 from './MyForm1'
import DisplayData from './DisplayData'
import Button from '@mui/material/Button';

export default function MyParent() {

    const [open, setOpen] = React.useState(false);
    const [data,setData]= useState([]);
    const [index,setIndex]= useState(-1);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const removeItem = (index)=>{


        
      let p =  [...data];

      p.splice(index-1,1);

      
      console.log(p);

        setData(p);

      }

      const editItem = (index)=>{


        setIndex(index)
        setOpen(true);

      }
    
  return (
    <div>
        
        <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

        <MyForm1 open={open} handleClose={handleClose} data={data}
         setData={setData}
         index={index}
         setIndex={setIndex}
         />
        <DisplayData data={data} removeItem={removeItem} editItem={editItem}/>
    </div>
  )
}
