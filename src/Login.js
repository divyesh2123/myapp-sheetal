import React, { useState } from 'react'

export default function Login() {

    const [form,setform]= useState({
        email : "",
        password : "",
        isActive: false,
        gender: "",
        hobbies: []
    })

    const handelSubmit = (e)=>{

        e.preventDefault();
        console.log(form);

        
    }

   

    const handleChange = (e)=>{

        if(e.target.name == "hobbies")
        {
            let d = {...form};
            if(e.target.checked)
            {
           

            d.hobbies.push(e.target.value);

            }
            else
            {
                d.hobbies = d.hobbies.filter((v)=>{

                    return v != e.target.value;
                })
            }

            setform({...form,hobbies:d.hobbies});

        }

       else if(e.target.type=="checkbox")
        {

            setform({...form,[e.target.name]: e.target.checked})
        }
        else
        {
        setform({...form,[e.target.name]: e.target.value})
        }
    }

  
  return (
    <div>
        <form onSubmit={handelSubmit}>

        <input type='email' name='email' 
        onChange={handleChange}/>
        
        <input type='password' name='password' onChange={handleChange}/>


        <input type='checkbox'
         name='isActive'
          onChange={handleChange}/>


     <input type='radio' name='gender' value="male" onChange={handleChange}/>
     Male:  

   <input type='radio' name='gender' value="female" onChange={handleChange}/>
   Female:  


  Cricket <input type='checkbox' name="hobbies"
  value="circket"
  onChange={handleChange}/>

  Reading <input type='checkbox' name="hobbies"
  
  value="Reading"
  onChange={handleChange}/>

        <input type='submit' value="save"/>

        </form>
    </div>
  )
}
