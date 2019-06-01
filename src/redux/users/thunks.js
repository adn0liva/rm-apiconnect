import {
  loginSuccess,
  loginError,
  signUpSuccess,
  signUpError
} from './index'

export const fakeSignUp = (user, state) => {
  const { entities: userEntities, userList } = state.users
  const userId = userList.some(uid => userEntities[uid].email === user.email)
  // si no existe, lo creamos
  let error
  if (!userId) {
    user.id = userList.length + 1
  } else {
    error = 'Usuario ya existe'
  }
  return {
    user,
    error
  }
}

export const signUp = (user) => async (dispatch, getState) => {
  try {
    const newUser = fakeSignUp(user, getState())
    if (newUser.error === undefined) {
      dispatch(signUpSuccess(newUser))
    } else {
      dispatch(signUpError(newUser.error))
    }
  } catch (e) {
    const error = new Error(e)
    dispatch(signUpError(error.toString()))
  }
}

// metodo que replaza la consulta a la api, todo esta comparación debería hacerla la api
export const fakeLogin = (user, state) => {
  const { entities: userEntities, userList } = state.users
  const userId = userList.find(uid => {
    return (
      userEntities[uid].email === user.email &&
      userEntities[uid].password === user.password
    )
  })
  return userId
}

export const login = ({ email, password }) => async (dispatch, getState) => {
  try {
    const userId = fakeLogin({ email, password }, getState())
    if (userId) {
      dispatch(loginSuccess(userId))
    } else {
      dispatch(loginError())
    }
  } catch (e) {
    const error = new Error(e)
    dispatch(loginError(error.toString()))
  }
}
