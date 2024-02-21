import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './Navbar.css'
export default function Navbar({ onSearch }) {
    return (
        <div>
            <nav className='navbar-main-container'>
                <h1></h1>
                <ul className='nav-btns'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <div className='ver-dividers'></div>
                    <li>
                        <Link to="/dashboard">User</Link>
                    </li>
                    <div className='ver-dividers'></div>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <div className='ver-dividers'></div>
                    <li>
                        <Link to="/tv">TV</Link>
                    </li>
                    <div className='ver-dividers'></div>
                    <li>
                        <Link to="/favmov">Movie Library</Link>
                    </li>
                    <div className='ver-dividers'></div>
                    <li>
                        <Link to="/favtv">TV Library</Link>
                    </li>
                </ul>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}