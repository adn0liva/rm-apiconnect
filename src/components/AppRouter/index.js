import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CharacterContainer from '../../containers/CharacterContainer'
import EpisodesContainer from '../../containers/EpisodesContainer'
import AboutContainer from '../../containers/AboutContainer'
import HomeContainer from '../../containers/HomeContainer'
import FavoritesContainer from '../../containers/FavoritesContainer'
import NotFound from '../../components/ErrorPages/NotFound'
import PrivateRoute from '../../components/PrivateRoute'
import NavBarComponent from '../../components/NavBar'

const Index = () => <HomeContainer />
const About = () => <AboutContainer />
const Episodes = () => <EpisodesContainer />
const Characters = () => <CharacterContainer />
const NotFoundComponent = () => <NotFound />
const Favorites = () => <FavoritesContainer />
const LoadingComponent = () => <div>Loading...</div>

const AppRouter = (props) => {
  return (
    <Router>
      <div className='main-container'>
        <NavBarComponent />
        <Suspense fallback={LoadingComponent}>
          <Switch>
            <Route path='rm-apiconnect/' exact component={Index} />
            <Route path='rm-apiconnect/home' exact component={Index} />
            <Route path='rm-apiconnect/about' exact component={About} />
            <PrivateRoute path='rm-apiconnect/episodes' exact component={Episodes} />
            <PrivateRoute path='rm-apiconnect/characters' exact component={Characters} />
            <PrivateRoute path='rm-apiconnect/favorites' exact component={Favorites} />
            <Route component={NotFoundComponent} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default AppRouter
