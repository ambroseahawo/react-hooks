import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieApp from './3.useContext/MovieApp'
import MovieDetail from './3.useContext/MovieDetail'
import { MovieProvider } from './3.useContext/MoviesContext'
import Nav from './3.useContext/Nav'

function App() {
    return(
        <MovieProvider>
            <Nav/>
            <Routes>
                <Route exact path='/' element={<MovieApp/>}/>
                <Route exact path='/movies/:slug' element={<MovieDetail/>}/>
            </Routes>
        </MovieProvider>
    )
}

export default App