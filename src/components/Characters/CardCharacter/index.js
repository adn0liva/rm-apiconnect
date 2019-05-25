import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { addCharacterToFavorite } from '../../../redux/characters'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

const ImageLoading = () => {
  return (<div>Getting image</div>)
}

const CardCharacter = (props) => {
  const { character, addCharacterToFavorite, favorites } = props
  const textButton = favorites.includes(character.id) ? '★' : '☆'
  return (
    <Card style={{ color: 'black' }} className='mb-3'>
      <Card.Header>
        {character.name}
        <Button
          variant='light'
          className='float-right'
          onClick={() => addCharacterToFavorite(character.id)}
        >{textButton}</Button>
      </Card.Header>
      <Suspense fallback={<ImageLoading />}>
        <Card.Img variant='top' src={character.image} />
      </Suspense>
      {/* <Card.Img variant='top' src={character.image} /> */}
      <ListGroup variant='flush'>
        <ListGroup.Item>name: {character.name}</ListGroup.Item>
        <ListGroup.Item>species: {character.species}</ListGroup.Item>
        <ListGroup.Item>origin: {character.origin.name}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

const mapStateToProps = state => {
  const {
    favorites
  } = state.characters

  return {
    favorites
  }
}

const mapDispatchToProps = {
  addCharacterToFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCharacter)
