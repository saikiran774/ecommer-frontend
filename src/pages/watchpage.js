import React from 'react'
import { watchData} from '../data/watch'
import { Link } from 'react-router-dom'
import Navbar from '../componets/navbar'
const Watchpage = () => {
  return (
    <>
    <Navbar/>
      <div className='pagesection'>
       {watchData.map((item)=>{
        return (
          <div>
            <Link to={`/watch/${item.id}`}>
            <div className='pageimg'>
                <img src={item.image} alt="" />
            </div>
            </Link>
            <div className='promodel'>
            {item.brand} {item.model}
            <p>price : {item.price}</p>
            </div>
          </div>
        )
       })}

      </div>
      <center><Link to ='/'><h3>click here go to home page</h3></Link></center>
    </>
  )
}

export default Watchpage
