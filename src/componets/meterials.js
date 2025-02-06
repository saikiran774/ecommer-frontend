import React from 'react'
import { booksData } from '../data/books'
const Meterials = () => {
const firstfive=booksData.slice(0,5)
  return (
    <>
    <h2>Meterials</h2>
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

export default Meterials
