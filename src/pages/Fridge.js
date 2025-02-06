import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
import Navbar from '../componets/navbar'
const Fridge = () => {
  return (
    <>  
    <Navbar/>
         <div className='pagesection'>
          {fridgeData.map((item)=>{
           return (
             <div>
              <Link to={`/fridge/${item.id}`}>
              <div className='pageimg'>
                   <img src={item.image} alt="" />
               </div>
              </Link>
               <div className='promodel'>
               {item.brand} {item.model}
               <p>price : {item.price * 70}</p>
               </div>
             </div>
           )
          })}
   
         </div>
         <center><Link to ='/'><h3>click here go to home page</h3></Link></center>
       </>
  )
}

export default Fridge
