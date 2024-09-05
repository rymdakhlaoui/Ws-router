import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const MovieCard = ({movie}) => {
    const navigate = useNavigate()
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-illustration/pristine-reflective-lake-show-image-260nw-2305485315.jpg" />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate(`/MovieDetails/${movie.id}`)}>More details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard