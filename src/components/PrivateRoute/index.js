import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = (props) => {
  const {
    component: Component,
    userLogged,
    ...rest
  } = props
  return (
    <Route
      {...rest}
      render={ props => {
        if (userLogged) {
          return <Component {...props} />
        } else {
          return <Redirect to='/' />
        }
      }}
    />
  )
}

const mapStateToProps = state => {
  const { userLogged } = state.users
  return { userLogged }
}

export default connect(mapStateToProps)(PrivateRoute)
