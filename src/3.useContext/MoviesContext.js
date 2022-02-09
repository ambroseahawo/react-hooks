import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movieId, setMovieId] = useState('')
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "28",
            id: 890
        },
        {
            name: "Game of Thrones",
            price: "314",
            id: 283
        },
        {
            name: "Inception",
            price: "72",
            id: 1723
        },
    ])

    return(
        <MovieContext.Provider value={{ moviesValues: [movies, setMovies], movieIdValues: [movieId, setMovieId] }}>
            { props.children }
        </MovieContext.Provider>
    )
}