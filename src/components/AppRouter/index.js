import React, { lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom'
// import HomeContainer from '../../containers/HomeContainer'
import Dictionary from '../../components/Dictionary'
// import AboutContainer from '../../containers/AboutContainer'
// import CatalogueContainer from '../../containers/CatalogueContainer'
// import FormAnimalContainer from '../../containers/FormAnimalContainer'
// import ShowAnimalContainer from '../../containers/ShowAnimalContainer'
import CharacterContainer from '../../containers/CharacterContainer'
import EpisodesContainer from '../../containers/EpisodesContainer'
// import NotFound from '../../components/errorPages/NotFound'

// botstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// const lenguage = document.documentElement.lang
// const Dictionary = DictionaryGlobal[lenguage]

const Index = () => <div>index</div> 
const About = () => <div>about</div> //<AboutContainer /> // lazy(import('../../containers/AboutContainer'))
const Episodes = () => <EpisodesContainer />
const Characters = () => <CharacterContainer />
// const ShowAnimal = (props) => <div>show</div> //<ShowAnimalContainer {...props} />
const NotFoundComponent = () => <div>nfound</div> //<NotFound />
const LoadingComponent = () => <div>Loading...</div>

// const WaitingComponent = (Component) => {
//   return props => (
//     <Suspense fallback={LoadingComponent}>
//       <Component {...props} />
//     </Suspense>
//   )
// }

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
