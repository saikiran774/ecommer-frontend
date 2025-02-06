import React from 'react'
import { menData } from '../data/men'
import Navbar from '../componets/navbar'
import { Link } from 'react-router-dom'
const Menfishonpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection' >
            {menData.map((item)=>{
                return(
                    <div>
                        <Link to={`/men/${item.id}`}>
                        <div className='pageimg'>
                            <img src={item.image} alt="" />
                        </div>
                        </Link>
                        <div className='promodel'>
                           {item.company}  {item.model}
                            <p>prcice : {item.price * 70}</p>
                        </div>
                    </div>
                )
            })}
        </div>
              <center><Link to='/'><h3> click here  to  go home page</h3></Link></center>
    </>
  )
}

export default Menfishonpage
