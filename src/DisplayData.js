import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Stack } from '@mui/material';

export default function DisplayData(props) {

  const columns = [
    {field:'id',headerName:'id',width:120},
    { field: 'firstName', headerName: 'first Name', width: 150 },
    { field: 'lastName', headerName: 'last Name', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 180,
      sortable: false,
     
      
      renderCell: (params) => {
          const removeonClick = (e) => {
            const currentRow = params.row;

          
            props.removeItem(currentRow.id)
            
          };

          const onClick = (e) => {
            const currentRow = params.row;

            props.editItem(currentRow.id)
          }
          
          return (
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="warning" size="small" onClick={onClick}>Edit</Button>
              <Button variant="outlined" color="error" size="small" onClick={removeonClick}>Delete</Button>
            </Stack>
          );
      },
    }
   
  ];
 



  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={props.data} columns={columns} />
    </div>
  )
}
