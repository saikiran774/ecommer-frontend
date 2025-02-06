import React from 'react'
import { computerData } from '../data/computers'
const Computer = () => {
    const firstfive=computerData.slice(0,5)
  return (
   <>
   <h2>computers</h2>
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

export default Computer
