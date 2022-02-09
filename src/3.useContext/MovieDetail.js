import React, { useContext } from 'react'
import { MovieContext } from './MoviesContext'

const MovieDetail = () => {
    const { movieIdValues } = useContext(MovieContext)
    const [movieId] = movieIdValues

    return (
        <section className='section-center'>
            <h3>Details on movie: { movieId }</h3>
        </section>
    )
}

export default MovieDetail