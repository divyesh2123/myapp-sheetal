import axios from 'axios'
import React, { useEffect } from 'react'
import authFetchData from './axios/custom';

export default function SheetalAccount() {

  useEffect(()=>{

    authFetchData.get("/accounts")
    .then(y=>{
      console.log(y.data);
    })
  })
    
  return (
    <div>SheetalAccount</div>
  )
}
