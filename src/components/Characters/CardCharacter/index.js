import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { toggleCharacterToFavorite } from '../../../redux/characters'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import nullRick from '../../../assets/images/null-rick.jpeg'
import Dictionary from '../../../components/Dictionary'

const ImageLoading = () => {
  return (<img src={nullRick} alt='null-rick' />)
}

const CardCharacter = (props) => {
  const { character, toggleCharacterToFavorite, favorites } = props
  const textButton = favorites.includes(character.id.toString()) ? Dictionary.fullStar : Dictionary.emptyStar

  return (
    <Card border='dark' style={{ color: 'black' }} className='mb-3'>
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
        <ListGroup.Item>{Dictionary.name}: {character.name}</ListGroup.Item>
        <ListGroup.Item>{Dictionary.specie}: {character.species}</ListGroup.Item>
        <ListGroup.Item>{Dictionary.origin}: {character.origin.name}</ListGroup.Item>
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
