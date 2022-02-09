import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MovieContext } from './MoviesContext'

const Movie = ({ name, price, id }) => {
    const { movieIdValues } = useContext(MovieContext)
    const [movieId, setMovieId] = movieIdValues

    let navigate = useNavigate()

    const handleMovieClick = () =>{
        setMovieId(id)
        navigate(`/movies/${name}`)
    }

    return (
        <article className='grocery-item' onClick={handleMovieClick}>
            <p className="title">{ name }</p>
            <p class="title sec-col">${ price }</p>
            <p class="title sec-col">{ id }</p>
        </article>
    )
}

export default Movie