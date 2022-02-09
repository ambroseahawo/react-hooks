import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MoviesContext'

const MovieList = () => {
    const { moviesValues } = useContext(MovieContext)
    const [movies] = moviesValues

    return (
        <React.Fragment>
            { movies.map(movie => (
                <Movie key={ movie.id } id={ movie.id } name={ movie.name } price={ movie.price } />
            ))}
        </React.Fragment>
    )
}

export default MovieList