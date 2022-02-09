import React, { useContext } from 'react'
import { MovieContext } from './MoviesContext'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    const { moviesValues } = useContext(MovieContext)
    const [movies,] = moviesValues

    return (
        <nav className='navbar'>
            <Link className='navbar-logo' to='/'>useContext</Link>
            <ul className="nav-menu">
                <li className='nav-item'>
                    <Link to='#' className='nav-links'>
                        List of movies: { movies.length }
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav