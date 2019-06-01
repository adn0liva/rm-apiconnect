import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Dictionary from '../Dictionary'
import { logOut } from '../../redux/users'
// botstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const NavBarComponent = (props) => {
  const { userLogged, user, logOut } = props
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand>
        <Link to='/home'>{Dictionary.rickAndMorty}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      {!userLogged && (
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink activeClassName='active' to='/home' className='nav-link'>{Dictionary.home}</NavLink>
            <NavLink activeClassName='active' to='/about' className='nav-link'>{Dictionary.about}</NavLink>
          </Nav>
        </Navbar.Collapse>
      )}
      {userLogged && (
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink activeClassName='active' to='/home' className='nav-link'>{Dictionary.home}</NavLink>
            <NavLink activeClassName='active' to='/episodes' className='nav-link'>{Dictionary.episodes}</NavLink>
            <NavLink activeClassName='active' to='/characters' className='nav-link'>{Dictionary.characters}</NavLink>
            <NavLink activeClassName='active' to='/about' className='nav-link'>{Dictionary.about}</NavLink>
          </Nav>
          <Navbar.Text>
            {Dictionary.signedAs}<b>{user.name}  </b>
            <Button variant='secondary' onClick={() => logOut()}>{Dictionary.logOut}</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      )}
    </Navbar>
  )
}

const mapStateToProps = state => {
  const {
    userLogged,
    user
  } = state.users

  return {
    userLogged,
    user
  }
}

const mapDispatchToProps = {
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)
