import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function SheetalLogin() {

    const nav = useNavigate();
    const [data,setData] = useState({
        email : "",
        password: ""
    });

    const handleSubmit = (e)=>{

      e.preventDefault();
        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data).then(y=>
        {
            localStorage.setItem("token",JSON.stringify(y.data))

          nav("/account");
        })
      

    }

    const handelChange = (e)=>{
        setData({...data,[e.target.name] : e.target.value})
    }

  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name='email' onChange={handelChange}/>
        <input type='text' name='password' onChange={handelChange}/>
        <input type='submit' value="Save"/>
    </form>
  )
}
