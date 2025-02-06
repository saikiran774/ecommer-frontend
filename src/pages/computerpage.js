import React from 'react'
import Navbar from '../componets/navbar'
import { Link } from 'react-router-dom'
import { computerData } from '../data/computers'
const Computerpage = () => {
  return (
    <>
     <Navbar/>
    <div className='pagesection' >
            {computerData.map((item)=>{
                return(
                    <div>
                        <Link to={`/laptop/${item.id}`}>
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

export default Computerpage
