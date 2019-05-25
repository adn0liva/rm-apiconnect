import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const CardCharacter = (props) => {
  const { character } = props
  return (
    <Card style={{ color: 'black' }} className='mb-3'>
      <Card.Header>{character.name}</Card.Header>
      <Card.Img variant='top' src={character.image} />
      <ListGroup variant='flush'>
        <ListGroup.Item>name: {character.name}</ListGroup.Item>
        <ListGroup.Item>species: {character.species}</ListGroup.Item>
        <ListGroup.Item>origin: {character.origin.name}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default CardCharacter
