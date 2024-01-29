import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
export default function MyDataGrid() {


    const [data,setData]= useState([]);
  

      const columns = [
        { field: 'userId', headerName: 'User Id', width: 150 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'body', headerName: 'Body', width: 150 },
        { field: 'id', headerName: 'id', width: 150 },
      ];

      useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(y=>{
            setData(y.data);
        })

      },[])



  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  )
}
