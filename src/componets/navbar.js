import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className="navtitlle">
        <h2>I-Mart</h2>
      </div>
      <div className="navsearch">
        <input type="text" placeholder='search..' />
      </div>
      <div className="navsign">
        <a href="">signin</a>
      </div>
      <div className="cart">
        <p>cart</p>
      </div>
    </div>
    <div className="submenu">
      <ul>
       <Link to='/mobiles'><li>Mobile</li></Link>
        <Link to='/ac'><li>Ac</li></Link>
          <Link to='/menware'><li>Men fashion</li> </Link>
           <Link to='/book'> <li>Books</li></Link>
        <Link to='/computer'> <li>Laptop</li></Link>
        <Link to='/watch'><li>Watchs</li></Link>
        <Link to='/woman'> <li>Women design</li></Link>
        <Link to='/fridge'><li>Fridge</li></Link>
         <Link to='/speaker'><li>Speaker</li></Link>
      </ul>
    </div>
    </>
  )
}

export default Navbar
