import React, { useState } from 'react'
import EmployeeB from './EmployeeB'

export default function EmployeeA() {

    const [data,setData] = useState({
        firstName : "div",
        lastName : "patel"
    })
  return (
    <EmployeeB data={data}></EmployeeB>
  )
}
