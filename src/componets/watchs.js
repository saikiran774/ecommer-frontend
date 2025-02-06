import React from 'react'
import { watchData } from '../data/watch'
const Watchs = () => {
    const firstfive=watchData.slice(0,5)
  return (
    <>
    <h2>Watchs</h2>
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

export default Watchs
