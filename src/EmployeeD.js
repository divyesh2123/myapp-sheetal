import React, { useContext } from 'react'
import LanContex from './LanguageContext'

export default function EmployeeD(props) {

  const {lan} =useContext(LanContex);
  return (
    <div>{lan}</div>
  )
}
