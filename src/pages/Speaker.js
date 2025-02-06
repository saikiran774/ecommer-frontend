import React from 'react'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'
import Navbar from '../componets/navbar'
const Speaker = () => {
  return (
     <>
     <Navbar/>
          <div className='pagesection'>
           {speakerData.map((item)=>{
            return (
              <div>
                <Link to={`/speaker/${item.id}`}>
                <div className='pageimg'>
                    <img src={item.image} alt="" />
                </div>
                </Link>
                <div className='promodel'>
                {item.brand} {item.model}
                <p>price : {item.price *70}</p>
                </div>
              </div>
            )
           })}
    
          </div>
          <center><Link to ='/'><h3>click here go to home page</h3></Link></center>
        </>
  )
}

export default Speaker
