import React from 'react'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import './movie.css'

const MovieApp = () => {
    return (
        <React.Fragment>
            <section className='section-center'>
                <AddMovie/>
                <MovieList/>
            </section>
        </React.Fragment>
    )
}

export default MovieApp