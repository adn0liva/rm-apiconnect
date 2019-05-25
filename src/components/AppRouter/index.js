import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom'
import Dictionary from '../../components/Dictionary'
import CharacterContainer from '../../containers/CharacterContainer'
import EpisodesContainer from '../../containers/EpisodesContainer'
import AboutContainer from '../../containers/AboutContainer'
import HomeContainer from '../../containers/HomeContainer'
// import NotFound from '../../components/errorPages/NotFound'
// ToDo: change favorite add/delete
// botstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Index = () => <HomeContainer />
const About = () => <AboutContainer />
const Episodes = () => <EpisodesContainer />
const Characters = () => <CharacterContainer />
const NotFoundComponent = () => <div>nfound</div>
const LoadingComponent = () => <div>Loading...</div>

const AppRouter = () => {
  return (
    <Router>
      <div className='main-container'>
        <Navbar bg='dark' expand='lg' variant='dark'>
          <Navbar.Brand>
            <Link to='/home'>Rick and Morty</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavLink activeClassName='active' to='/home' className='nav-link'>{Dictionary.home}</NavLink>
              <NavLink activeClassName='active' to='/episodes' className='nav-link'>Episodes</NavLink>
              <NavLink activeClassName='active' to='/characters' className='nav-link'>Characters</NavLink>
              <NavLink activeClassName='active' to='/about' className='nav-link'>{Dictionary.about}</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Suspense fallback={LoadingComponent}>
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/home' exact component={Index} />
            <Route path='/about' exact component={About} />
            <Route path='/episodes' exact component={Episodes} />
            <Route path='/characters' exact component={Characters} />
            <Route component={NotFoundComponent} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default AppRouter
