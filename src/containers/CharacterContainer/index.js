import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharacters, loadMore } from '../../redux/characters/thunks'
import CardCharacter from '../../components/Characters/CardCharacter'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'

const CharacterContainer = props => {
  const {
    getCharacters,
    loading,
    characters,
    error,
    maxPage,
    currentPage,
    loadMore
  } = props

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <Row className='mx-0'>
          <Col md={12}>
            {error}
          </Col>
          <Col md={12} xs={12}>
            <h2>Characters ({characters.length})</h2>
          </Col>
          {characters.map((character, index) => (
            <Col md={3} key={`col-ch-${index}`}>
              <CardCharacter key={`ch-id${index}`} character={character} />
            </Col>
          ))}
        </Row>

        {currentPage < maxPage && (
          <button onClick={loadMore} className='btn btn-sm btn-primary'>{loading ? 'Is Loading...' : 'Ver más'}</button>
        )}
        <br />
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  const {
    loading,
    entities,
    error,
    maxPage,
    currentPage
  } = state.characters

  return {
    loading,
    characters: entities,
    error,
    maxPage,
    currentPage
  }
}

const mapDispatchToProps = {
  getCharacters,
  loadMore
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer)
