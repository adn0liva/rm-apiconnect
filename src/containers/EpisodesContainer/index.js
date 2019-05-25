import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodes, loadMore } from '../../redux/episodes/thunks'
import CardEpisode from '../../components/Episodes/CardEpisode'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EpisodesContainer = (props) => {
  const { error,
    currentPage,
    maxPage,
    loadMore,
    loading,
    episodes,
    getEpisodes,
    addEpisodeToFavorite } = props

  useEffect(() => {
    getEpisodes()
  }, [])
  return (
    <div className='App'>
      <header className='App-header'>
        <Row className='mx-0'>
          <Col md={12}>
            {error}
          </Col>
          <Col md={12} xs={12}>
            <h2>Episodes</h2>
          </Col>
          {episodes.map((episode, index) => (
            <Col md={3} key={`col-ch-${index}`}>
              <CardEpisode key={`ch-id${index}`} episode={episode} />
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
  } = state.episodes

  return {
    loading,
    episodes: entities,
    error,
    maxPage,
    currentPage
  }
}

const mapDispatchToProps = {
  getEpisodes,
  loadMore
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesContainer)
