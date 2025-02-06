import React from 'react'
import { Link } from 'react-router-dom'
import { booksData } from '../data/books'
import Navbar from '../componets/navbar'
function Bookpage() {
  return (
    <>
     <Navbar/>
    <div className='pagesection' >
            {booksData.map((item)=>{
                return(
                    <div>
                        <Link to={`/book/${item.id}`}>
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

export default Bookpage
