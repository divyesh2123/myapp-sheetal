import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SingleData() {

 const [data,setData] =   useState({})

 useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/users/3")
    .then(y=>{
        setData(y.data)
    })

 },[])
  return (
    <div>{data.name} {data.username}</div>
  )
}
