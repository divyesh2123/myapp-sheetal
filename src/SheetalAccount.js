import axios from 'axios'
import React, { useEffect } from 'react'

export default function SheetalAccount() {

  useEffect(()=>{

    axios.get(" https://real-pear-fly-kilt.cyclic.app/accounts")
    .then(y=>{
      console.log(y.data);
    })
  })
    
  return (
    <div>SheetalAccount</div>
  )
}
