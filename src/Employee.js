import React, { useState } from 'react'
import EmployeeList from './EmployeeList'

export default function Employee() {

  const [data,setData] = useState([]);
  const [form,setform]= useState({
    firstName : "",
    lastName : ""
  });

  const handleChange = (e)=>{

    setform({...form,[e.target.name]: e.target.value})
  }

  const handelSave = ()=>{

    let p = [...data];

    p.push(form);

    setData(p)


  }
  return (
    <div>

        <input type='text'  name='firstName' onChange={handleChange}/>
        <input type='text' name='lastName' onChange={handleChange}/>
        <input type='button' onClick={handelSave} value="save"/>
        <EmployeeList data={data}/>
    </div>
  )
}
