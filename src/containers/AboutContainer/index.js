import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'
import Dictionary from '../../components/Dictionary'

const AboutContainer = () => {
  return (
    <Jumbotron style={{ color: 'black' }}>
      <h1 className='text-center'>{Dictionary.rmUsingThe}<a href='https://rickandmortyapi.com/' target='_blank' rel='noopener noreferrer'>{Dictionary.api}</a></h1>
      <p>{Dictionary.descriptionApi}</p>
      <p className='text-center'>
        <Link to='/' className='btn btn-primary'>{Dictionary.goHomeUrDrunk}</Link>
      </p>
    </Jumbotron>
  )
}

export default AboutContainer
