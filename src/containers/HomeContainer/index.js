import React from 'react'
import { connect } from 'react-redux'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import FormLoggin from '../../components/FormLoggin'
import { login } from '../../redux/users/thunks'
import Dictionary from '../../components/Dictionary'

const HomeContainer = (props) => {
  const { userLogged, login, errorLogin } = props
  return (
    <div>
      <Jumbotron style={{ color: 'black' }}>
        <h1 className='text-center'>{Dictionary.rmUsingThe} <a href='https://rickandmortyapi.com/' target='_blank' rel='noopener noreferrer'>{Dictionary.api}</a></h1>
        <p>{Dictionary.descriptionApi}</p>
        {userLogged && (
          <p className='text-center'>
            <Link to='/episodes' className='btn btn-primary'>{Dictionary.goEpisodes}</Link>
            <Link to='/characters' className='btn btn-secondary ml-3'>{Dictionary.goCharacters}</Link>
          </p>
        )}
      </Jumbotron>
      {!userLogged && (
        <Row className='px-3 mx-0'>
          <Col md={6}>
            {errorLogin !== null && (
              <Alert variant='danger'>{errorLogin}</Alert>
            )}
            <FormLoggin loginSubmit={login} />
          </Col>
        </Row>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  const {
    userLogged,
    errorLogin,
  } = state.users

  return {
    userLogged,
    errorLogin
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
