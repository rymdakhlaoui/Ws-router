import React from 'react'
import MovieList from '../components/MovieList'

const Home = () => {
  return (
    <div>

      <div style={{display: "flex", justifyContent: "center", marginTop: "5%"}}>
      <h1>Home</h1>
      </div>

      <MovieList />
    </div>
  )
}

export default Home