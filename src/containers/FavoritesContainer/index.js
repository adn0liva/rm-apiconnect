import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getFavorites } from '../../redux/users'
import Dictionary from '../../components/Dictionary'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const FavoritesContainer = (props) => {
  const {
    favoriteEpisodes,
    favoriteCharacters,
    user,
    getFavorites,
    entities
  } = props
  let {
    usersEpisodes,
    usersCharacters
  } = props

  useEffect(() => {
    usersEpisodes = getFavorites('Episodes',favoriteEpisodes)
    usersCharacters = getFavorites('Characters',favoriteCharacters)
  },[])

  return (
    <div className='App'>
      <Row className='mx-0 mt-3'>
        <Col md={12} xs={12}>
          <h2>{Dictionary.favorites}</h2>
          <Card style={{color: 'black'}} className='mt-3'>
            <ListGroup>
              <ListGroup.Item>
                <b>{favoriteEpisodes[user.id].length}</b> {Dictionary.episodesAsFavorites}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>{favoriteCharacters[user.id].length}</b> {Dictionary.charactersAsFavorites}
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className='mx-0'>
                  <Col md={12} className='mb-3'>
                    {Dictionary.basedInFavoritesUsers}
                  </Col>
                  <Col md={6} className='mb-3'>
                    <Card.Header>
                      <b>{Dictionary.episodes}</b>
                    </Card.Header>
                    <ListGroup>
                      {usersEpisodes.map(us => (
                        <ListGroup.Item key={`user-ep-${us}`}>
                        <a href={`mailto:${entities[us].email}`}>
                          {entities[us].name}
                        </a>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                  <Col md={6} className='mb-3'>
                    <Card.Header>
                      <b>{Dictionary.characters}</b>
                    </Card.Header>
                   <ListGroup>
                      {usersCharacters.map(us => (
                        <ListGroup.Item key={`user-ch-${us}`}>
                          <a href={`mailto:${entities[us].email}`}>
                            {entities[us].name}
                          </a>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
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
    user,
    usersEpisodes,
    usersCharacters,
    entities
  } = state.users

  return {
    favoriteEpisodes: favoriteEpisodes,
    favoriteCharacters: favoriteCharacters,
    user,
    usersEpisodes,
    usersCharacters,
    entities
  }
}

const mapDispatchToProps = {
  getFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)
