import React from 'react'
import { womanData } from '../data/woman'

const Womenware = () => {
    const firstfive=womanData.slice(0,5)
  return (
<>
<h2>womanwares</h2>
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

export default Womenware
