import React, { useContext } from 'react'
import LanContex from './LanguageContext'

export default function NavBar() {

   const {lan,setlan} = useContext(LanContex);

   const handleChange = (e)=>{

    setlan(e.target.value)

   }
  return (
    <div>NavBar

        <select onChange={handleChange}>

            <option value="en">English</option>
            <option value="gj">Gujrati</option>
        </select>
    </div>
  )
}
