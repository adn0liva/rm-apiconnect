import React from 'react'
import { connect } from 'react-redux'
import { addEpisodeToFavorite } from '../../../redux/episodes'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const CardEpisode = (props) => {
  const { episode, addEpisodeToFavorite, favorites } = props
  const textButton = favorites.includes(episode.id) ? '★' : '☆'
  return (
    <Card style={{ color: 'black' }} className='mb-3'>
      <Card.Header>
        {episode.name}
        <Button
          variant='ligth'
          className='float-right'
          onClick={() => addEpisodeToFavorite(episode.id)}
        >{textButton}</Button>
      </Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>air date: {episode.air_date}</ListGroup.Item>
        <ListGroup.Item>created: {episode.created}</ListGroup.Item>
        <ListGroup.Item>episode: {episode.episode}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

const mapStateToProps = state => {
  const {
    favorites
  } = state.episodes

  return {
    favorites
  }
}

const mapDispatchToProps = {
  addEpisodeToFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(CardEpisode)