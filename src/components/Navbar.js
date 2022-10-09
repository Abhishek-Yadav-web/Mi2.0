import React from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'
import data from '../data/data'

const Navbar = () => {
    let url = `http://localhost:3000`
    return (
        <>
            <div className="nav">
                <div>
                <div className="logo" id='LogoBx'>
                    <Link to="/" id='logo'> <img src={data.logo} alt="Not" id='logoImg' /></Link>
                </div>
                    <a className='navlinks' href='#'>Mi Phones</a>
                    <a className='navlinks' href='#'>Redmi Phones</a>
                    <a className='navlinks' href='#'>TV</a>
                    <a className='navlinks' href='#'>Laptops & Tablets</a>
                    <a className='navlinks' href='#'>Fitness</a>
                    <a className='navlinks' href='#'>Home</a>
                    <a className='navlinks' href='#'>Audio</a>
                </div>
                <div>
                <div className="searchBx">
                    <input type="text" name="search" placeholder='Search Products' autoComplete='off' /><ion-icon name="search-outline"></ion-icon>
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
