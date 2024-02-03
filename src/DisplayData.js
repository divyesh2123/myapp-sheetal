import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { DataGrid } from '@mui/x-data-grid';

export default function DisplayData(props) {

  const columns = [
    {field:'id',headerName:'id',width:120},
    { field: 'firstName', headerName: 'first Name', width: 150 },
    { field: 'lastName', headerName: 'last Name', width: 150 },
   
  ];
 



  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={props.data} columns={columns} />
    </div>
  )
}
