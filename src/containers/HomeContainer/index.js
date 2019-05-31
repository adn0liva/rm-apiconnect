import React from 'react'
import { connect } from 'react-redux'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormLoggin from '../../components/FormLoggin'
import { loginUser } from '../../redux/users'
// import Dictionary from '../../components/Dictionary'

const HomeContainer = (props) => {
  const { userLogged, loginUser } = props
  return (
    <div>
      <Jumbotron style={{ color: 'black' }}>
        <h1 className='text-center'>Rick and morty using the <a href='https://rickandmortyapi.com/' target='_blank' rel='noopener noreferrer'>API</a></h1>
        <p>The Rick and Morty API (or ShlaAPI) is a RESTful and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. We are still gathering data, because as you probably know, there are trillions of characters and locations. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>
        {userLogged && (
          <p className='text-center'>
            <Link to='/episodes' className='btn btn-primary'>Go Episodes</Link>
            <Link to='/characters' className='btn btn-secondary ml-3'>Go Characters</Link>
          </p>
        )}
      </Jumbotron>
      {!userLogged && (
        <Row className='px-3'>
          <Col md={6}>
            <FormLoggin loginSubmit={loginUser} />
          </Col>
        </Row>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  const {
    userLogged
  } = state.users

  return {
    userLogged
  }
}

const mapDispatchToProps = {
  loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
