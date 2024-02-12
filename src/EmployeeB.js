import React from 'react'
import EmployeeC from './EmployeeC'


export default function EmployeeB(props) {
  return (
    <EmployeeC data={props.data}></EmployeeC>
  )
}
