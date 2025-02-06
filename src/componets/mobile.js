import React from 'react'
import {mobileData} from '../data/mobiles'
const Mobile = () => {
  const firstfive=mobileData.slice(0,5)
  return (
    <>
    <h2>mobiles</h2>
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

export default Mobile
