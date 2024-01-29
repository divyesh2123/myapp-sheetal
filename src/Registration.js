import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Registration() {

    const [data,setData]= useState({
        firstName : "",
        title: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        acceptTerms:true
        
    })

    const handleOnChange = (e)=>{

        if(e.target.type =="checkbox")
        {
        setData({...data,[e.target.name] : e.target.checked})
        }
        else
        {
            setData({...data,[e.target.name] : e.target.value})
        }

        
    }

    const handleSubmit= (e)=>{

        e.preventDefault();

        axios.post(" https://real-pear-fly-kilt.cyclic.app/accounts/register",data)
        .then(y=>{

            console.log(y)
        });

    }
  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name='firstName' onChange={handleOnChange} />
        <input type='text' name='title' onChange={handleOnChange} />
        <input type='text' name='lastName' onChange={handleOnChange}/>
        <input type='text' name='email' onChange={handleOnChange}/>
        <input type='text' name='password' onChange={handleOnChange}/>
        <input type='text' name='confirmPassword' onChange={handleOnChange}/>
        <input type='checkbox' name='acceptTerms' onChange={handleOnChange}/>
        
        <input type='submit' value="save"/>

    </form>
  )
}
