import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { toggleCharacterToFavorite } from '../../../redux/characters'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

const ImageLoading = () => {
  return (<div>Getting image</div>)
}

const CardCharacter = (props) => {
  const { character, toggleCharacterToFavorite, favorites } = props
  const textButton = favorites.includes(character.id.toString()) ? '★' : '☆'

  return (
    <Card style={{ color: 'black' }} className='mb-3'>
      <Suspense fallback={<ImageLoading />}>
        <Card.Img variant='top' src={character.image} />
        <Card.ImgOverlay>
          <Card.Text className='float-right'>
            <Button
              variant='warning'
              onClick={() => toggleCharacterToFavorite(character.id.toString())}
            >{textButton}</Button>
          </Card.Text>
        </Card.ImgOverlay>
      </Suspense>
      <ListGroup variant='flush'>
        <ListGroup.Item>Name: {character.name}</ListGroup.Item>
        <ListGroup.Item>Species: {character.species}</ListGroup.Item>
        <ListGroup.Item>Origin: {character.origin.name}</ListGroup.Item>
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
  toggleCharacterToFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCharacter)
