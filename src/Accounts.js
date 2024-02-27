
import React, { useEffect, useState } from 'react'
import authFetchData from './axios/custom';

export default function Accounts() {

  const[data,setData]=  useState([]);

  useEffect(()=>{

  
    authFetchData.get("/accounts").then(y=>{

        setData(y.data);


        console.log(y);
    })


  },[])
  return (
    <div>Accounts</div>
  )
}
