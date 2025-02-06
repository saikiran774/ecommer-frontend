import React from 'react'
import Navbar from '../componets/navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Acpage = () => {
  return (
<>
<Navbar/>
 <div className='pagesection' >
        {acData.map((item)=>{
            return(
                <div>
                   <Link to={`/ac/${item.id}`}>
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
    <center><Link to='/'><h3>click here to go home page</h3></Link></center>
</>
  )
}

export default Acpage
