import React, { useState } from 'react'
import axios  from 'axios';
export default function LoginWithAPI() {

    const [data,setData] = useState({
        email : "",
        password : ""
    });

    const handleChange = (e)=>{

        setData({...data,[e.target.name] : e.target.value})

    }

    const handleSave = (e)=>{

        e.preventDefault();

        axios.post(" https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
        .then(y=>{

            localStorage.setItem("token",JSON.stringify(y.data));
        })

    }
  return (
    <form onSubmit={handleSave}>

        <input type='text' name='email' onChange={handleChange}/>
        <input type='text' name='password' onChange={handleChange}/>
        <input type='submit' value="Save" />
    </form>
  )
}
