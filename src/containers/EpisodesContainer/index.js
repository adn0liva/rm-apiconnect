import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodes, loadMore } from '../../redux/episodes/thunks'
import CardEpisode from '../../components/Episodes/CardEpisode'
import Dictionary from '../../components/Dictionary'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EpisodesContainer = (props) => {
  const { error,
    currentPage,
    maxPage,
    loadMore,
    loading,
    episodes,
    getEpisodes } = props

  useEffect(() => {
    getEpisodes()
  }, [])
  return (
    <div className='App'>
      <Row className='mx-0'>
        <Col md={12}>
          {error}
        </Col>
        <Col md={12} xs={12}>
          <h2>{Dictionary.episodes} ({episodes.length})</h2>
        </Col>
        {episodes.map((episode, index) => (
          <Col md={3} key={`col-ch-${index}`}>
            <CardEpisode key={`ch-id${index}`} episode={episode} />
          </Col>
        ))}
      </Row>

      {currentPage < maxPage && (
        <button onClick={loadMore} className='btn btn-sm btn-primary'>
          {loading ? (<span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />) : Dictionary.showMore}
        </button>
      )}
      <br />
      <br />
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
