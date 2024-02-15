import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Accounts() {

  const[data,setData]=  useState([]);

  useEffect(()=>{

    let token = JSON.parse(localStorage.getItem("token"))
    axios.get("https://real-pear-fly-kilt.cyclic.app/accounts",{

    headers:{
        'Content-Type': "application/json",
        "Authorization": "Bearer " +token?.jwtToken
    }
    }).then(y=>{

        setData(y.data);

        console.log(y);
    })


  },[])
  return (
    <div>Accounts</div>
  )
}
