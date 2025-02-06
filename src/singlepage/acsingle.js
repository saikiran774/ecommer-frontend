import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../componets/navbar'
import { useParams } from 'react-router-dom'
const Acsingle = () => {
    const {id}=useParams()
    const product=acData.find((item)=> item.id===id)
  return (
    <>
    <Navbar/>
     <div className='ind-section'>
        <div className="ind-img">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
        <div className="ind-company space">
            <h3> Company :{product.company}</h3>
        </div>
        <div className="ind-model space">
            <h2>Model : {product.model}</h2>
        </div>
        <div className="ind-price space">
            <h3>Price : {product.price}</h3>
        </div>
        <div className="ind-dec space">
            <p>{product.description}</p>
        </div>
        <div className="button space">
            <button>ADD TO CART</button>
            <button className='buy'>BUY NOW</button>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Acsingle
