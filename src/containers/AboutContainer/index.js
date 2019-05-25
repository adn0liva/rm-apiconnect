import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'
// import Dictionary from '../../components/Dictionary'

const AboutContainer = () => {
  return (
    <Jumbotron style={{ color: 'black' }}>
      <h1 className='text-center'>Rick and morty using the <a href='https://rickandmortyapi.com/' target='_blank'>API</a></h1>
      <p>The Rick and Morty API (or ShlaAPI) is a RESTful and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. We are still gathering data, because as you probably know, there are trillions of characters and locations. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>
      <p className='text-center'>
        <Link to='/' className='btn btn-primary'>Go home</Link>
      </p>
    </Jumbotron>
  )
}

export default AboutContainer