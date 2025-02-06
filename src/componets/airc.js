import React from 'react'
import { acData } from '../data/ac'
const Airc = () => {
    const firstfive=acData.slice(0,5)
  return (
    <>
    <h2>Airconditioner</h2>
    <div className='prosection'>
      {
        firstfive.map((item)=>{
         return(
            <div className='imgbox'>
                <img className='proimg' src={item.image} alt="" />
                 </div>
         )
        })
      }
    </div>
    </>
  )
}

export default Airc
