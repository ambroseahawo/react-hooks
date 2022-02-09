import React, { useState, useContext } from 'react'
import { MovieContext } from './MoviesContext'

const AddMovie = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const { moviesValues } = useContext(MovieContext)
    const [movies, setMovies] = moviesValues

    const addMovie = (e) => {
        e.preventDefault()
        setMovies(prevMovies => [{
                    name: name, price: price,
                    id: Math.floor(1000 + Math.random() * 9000)}, ...prevMovies])
        
        setName('')
        setPrice('')
    }

    return (
        <form className='grocery-form' onSubmit={addMovie}>
            <h3>Add Movie</h3>

            <div className="form-control">
                <div className="form-field">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' name='name' className='grocery'
                            value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label htmlFor="price">Price: </label>
                    <input type="text" id='price' name='price' className='grocery'
                            value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="custom-margin">
                    <button type="submit" className='submit-btn'>Add</button>
                </div>
            </div>
        </form>
    )
}

export default AddMovie