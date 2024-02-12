import React, { useContext } from 'react'
import LanContex from './LanguageContext'

export default function LanguageForm() {

   const {lan} = useContext(LanContex);

   const obk = {

    "en" : {
        "firstname" : "FirstNAme",
        "lastname": "LastName"
    },

    "gj" : {
        "firstname" : "Pelu name",
        "lastname" : "biju name"
    }
   }
  return (
    <div>

        <label>

        {obk[lan].firstname}
        </label>

        <input type='text'/>

        <label>

        {obk[lan].lastname}
        </label>

        <input type='text'/>
    </div>
  )
}
