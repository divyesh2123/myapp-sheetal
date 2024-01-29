import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ProductList() {

  const [data,setData] = useState([]);

  useEffect(()=>{

    axios.get("https://fakestoreapi.com/products")
    .then(y=> {
        setData(y.data)
    })

  },[])
  return (
    <div className='row'>

        {

            data.map((v)=>{

                return(<div className='col-4'>

<div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={v.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{v.name}</h5>
    <p class="card-text">{v.description}</p>
    <a href="#" class="btn btn-primary">{v.price}</a>
  </div>
</div>

                </div>)

            })
        }
        
    </div>
  )
}
