import React from 'react'
import { menData } from '../data/men'
const Mensware = () => {
    const firstfive=menData.slice(0,5)
  return (
<>
<h2>Mensware</h2>
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

export default Mensware
