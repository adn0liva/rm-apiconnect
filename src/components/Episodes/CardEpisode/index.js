import React from 'react'
import { connect } from 'react-redux'
import { toggleEpisodeToFavorite } from '../../../redux/episodes'
import Dictionary from '../../../components/Dictionary'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const CardEpisode = (props) => {
  const { episode, toggleEpisodeToFavorite, favorites } = props
  const textButton = favorites.includes(episode.id.toString()) ? Dictionary.fullStar : Dictionary.emptyStar
  return (
    <Card style={{ color: 'black' }} className='mb-3'>
      <Card.Header>
        {episode.name}
        <Button
          variant='warning'
          className='float-right'
          onClick={() => toggleEpisodeToFavorite(episode.id)}
        >{textButton}</Button>
      </Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>{Dictionary.airDate}: {episode.air_date}</ListGroup.Item>
        <ListGroup.Item>{Dictionary.created}: {episode.created}</ListGroup.Item>
        <ListGroup.Item>{Dictionary.episode}: {episode.episode}</ListGroup.Item>
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
  toggleEpisodeToFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(CardEpisode)
