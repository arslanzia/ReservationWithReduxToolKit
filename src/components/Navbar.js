import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="main_Navbar">
            <div className="main_container">
                <div className="main_wrapper">
                <div className="nav">
                    <ul>
                        <li><Link to="/"><a> Home </a></Link></li>
                        <li><Link to= "/reservations"><a> Reservation </a></Link></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar