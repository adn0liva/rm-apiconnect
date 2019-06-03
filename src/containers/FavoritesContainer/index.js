import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodes, loadMore } from '../../redux/episodes/thunks'
import Dictionary from '../../components/Dictionary'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const FavoritesContainer = (props) => {
  const { error,
    favoriteEpisodes,
    favoriteCharacters,
    user
  } = props

  return (
    <div className='App'>
      <Row className='mx-0'>
        <Col md={12}>
          {error}
        </Col>
        <Col md={12} xs={12}>
          <h2>{Dictionary.favorites}</h2>
          <Card style={{color: 'black'}}>
            <Card.Header>My favorites</Card.Header>
            <ListGroup>
              <ListGroup.Item>
                <b>{favoriteEpisodes.length}</b> capitulos elegidos como sus favoritos
              </ListGroup.Item>
              <ListGroup.Item>
                <b>{favoriteCharacters.length}</b> personajes elegidos como sus favoritos
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className='mx-0'>
                  <Col md={12} className='mb-3'>
                    En base a lo anterior identificamos a los siguientes usuarios que tienen gustos similares
                  </Col>
                  <Col md={6}>
                    <b>Capitulos</b>
                  </Col>
                  <Col md={6}>
                   <b>Personajes</b>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  )
}

const mapStateToProps = state => {
  const {
    favorites: favoriteEpisodes
  } = state.episodes
  const {
    favorites: favoriteCharacters
  } = state.characters
  const {
    user
  } = state.users

  return {
    favoriteEpisodes: favoriteEpisodes[user.id],
    favoriteCharacters: favoriteCharacters[user.id],
    user
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)
