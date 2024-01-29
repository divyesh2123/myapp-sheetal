import React, { useEffect, useState } from 'react'
import axios  from 'axios'

export default function DisplayData() {

  const [data,setData] = useState([])

  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(y=>{
        setData(y.data)
    })




  },[])
  return (
    <table>{

        data.map((v)=>{

            return (<tr><td>{v.name}</td><td>{v.username}</td></tr>)


        })
        
        
        }</table>
  )
}
