import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CharacterContainer from '../../containers/CharacterContainer'
import EpisodesContainer from '../../containers/EpisodesContainer'
import AboutContainer from '../../containers/AboutContainer'
import HomeContainer from '../../containers/HomeContainer'
import NotFound from '../../components/ErrorPages/NotFound'
import PrivateRoute from '../../components/PrivateRoute'
import NavBarComponent from '../../components/NavBar'

const Index = () => <HomeContainer />
const About = () => <AboutContainer />
const Episodes = () => <EpisodesContainer />
const Characters = () => <CharacterContainer />
const NotFoundComponent = () => <NotFound />
const LoadingComponent = () => <div>Loading...</div>

const AppRouter = (props) => {
  return (
    <Router>
      <div className='main-container'>
        <NavBarComponent />
        <Suspense fallback={LoadingComponent}>
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/home' exact component={Index} />
            <Route path='/about' exact component={About} />
            <PrivateRoute path='/episodes' exact component={Episodes} />
            <PrivateRoute path='/characters' exact component={Characters} />
            <Route component={NotFoundComponent} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default AppRouter
