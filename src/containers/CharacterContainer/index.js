import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharacters, loadMore } from '../../redux/characters/thunks'
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
        {error}

        {characters.map((character, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div>
             id: {character.id}
            </div>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
             name: {character.name}
            </div>
            <div>
             species: {character.species}
            </div>
            <div>
             origin: {character.origin.name}
            </div>
          </div>
        ))}
        {/* {loading && (
          <div>
            IS LOADING...
          </div>
        )} */}
        {currentPage < maxPage && (
          <button onClick={loadMore}>{loading ? 'Is Loading...' : 'Ver más'}</button>
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
