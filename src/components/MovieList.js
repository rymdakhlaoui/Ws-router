import React from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
    let movies = [
        {
            id: 1,
            name: "Movie 1",
            description: "description 1",
            imgSrc: ""
        },
        {
            id: 2,
            name: "Movie 2",
            description: "description 2",
            imgSrc: ""
        },
        {
            id: 3,
            name: "Movie 3",
            description: "description 3",
            imgSrc: ""
        },
    ]
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
        {
            movies.map((movie)=> 
            <MovieCard movie={movie} key={movie.id} />)
        }
    </div>
  )
}

export default MovieList