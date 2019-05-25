import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const CardEpisode = (props) => {
  const { episode } = props
  return (
    <Card style={{ color: 'black' }} className='mb-3'>
      <Card.Header>{episode.name}</Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>air date: {episode.air_date}</ListGroup.Item>
        <ListGroup.Item>created: {episode.created}</ListGroup.Item>
        <ListGroup.Item>episode: {episode.episode}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default CardEpisode
