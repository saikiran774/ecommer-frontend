import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../componets/navbar'
import { Link } from 'react-router-dom'
const Mobilepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection' >
        {mobileData.map((item)=>{
            return(
                <div>
                    <Link to={`/mobiles/${item.id}`}> 
                    <div className='pageimg'>
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className='promodel'>
                       {item.company}  {item.model}
                        <p>prcice : {item.price}</p>
                    </div>
                </div>
            )
        })}
    </div>
    <center><Link to ='/'><h3>click here to go home page</h3></Link></center>
    </>
  )
}

export default Mobilepage
