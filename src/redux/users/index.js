import usersBase from '../../constants/users'
const CHANGE_STATE_USER = 'CHANGE_STATE_USER'
const LOGIN_USER = 'LOGIN_USER'
// const FAKE_LOGIN = 'FAKE_LOGIN'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP'

const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_ERROR = 'SIGNUP_ERROR'

const LOGOUT = 'LOGOUT'

const GET_FAVORITES = 'GET_FAVORITES'

export const getFavorites = (kind,favoritos) => ({
  type: GET_FAVORITES,
  payload: { 
    kind,
    favoritos
  }
})

export const logOut = () => ({
  type: LOGOUT
})

export const signUpSuccess = (result) => ({
  type: SIGNUP_SUCCESS,
  payload: { result }
})

export const signUpError = (error) => ({
  type: SIGNUP_ERROR,
  payload: { error }
})

export const toggleSignUp = () => ({
  type: TOGGLE_SIGNUP
})

export const changeStateUser = () => ({
  type: CHANGE_STATE_USER
})

export const loginUser = (userId) => ({
  type: LOGIN_USER,
  payload: { userId }
})

export const loginSuccess = (userId) => ({
  type: LOGIN_SUCCESS,
  payload: { userId }
})

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: { error }
})

const usuariosGustosSimilares = (favoritos,usuarios,user) => {
  const idsUsers = Object.keys(favoritos)
  const misFavoritos = favoritos[user.id]
  let usersSimilares = []
  idsUsers.forEach(idUser => {
    if (misFavoritos.some(fav => favoritos[idUser].includes(fav)) && idUser !== user.id){
      usersSimilares.push(idUser)
    }
  })
  return usersSimilares
}

const initialState = {
  userLogged: false,
  user: {},
  entities: usersBase,
  userList: ['1', '2', '3'],
  userId: null,
  errorLogin: null,
  registerView: false,
  usersEpisodes: [],
  usersCharacters: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE_USER: {
      return {
        ...state,
        userLogged: !state.userLogged
      }
    }
    case LOGIN_USER: {
      const { userId } = action.payload
      const { entities } = state
      return {
        ...state,
        user: entities[userId],
        userLogged: true
      }
    }
    case LOGIN_SUCCESS: {
      const { userId } = action.payload
      const { entities } = state
      localStorage.setItem('userId', userId)
      return {
        ...state,
        userId,
        userLogged: (userId !== null),
        user: { ...entities[userId] }
      }
    }
    case LOGIN_ERROR: {
      const { error } = action.payload
      return {
        ...state,
        errorLogin: error === undefined ? 'Usuario no encontrado' : error
      }
    }
    case TOGGLE_SIGNUP: {
      return {
        ...state,
        registerView: !state.registerView
      }
    }
    case SIGNUP_SUCCESS: {
      const {
        entities,
        userList
      } = state
      const { user } = action.payload.result
      return {
        ...state,
        entities: {
          ...entities,
          [user.id]: {
            ...user
          }
        },
        userList: [...userList, user.id],
        errorLogin: null,
        userId: user.id,
        userLogged: true,
        user: { ...user }
      }
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        errorLogin: action.payload.error
      }
    }
    case LOGOUT: {
      localStorage.removeItem('userId')
      return {
        ...state,
        user: {},
        userId: null,
        userLogged: false
      }
    }
    case GET_FAVORITES: {
      const { entities: usuarios, user } = state
      const { favoritos, kind } = action.payload
      const respuesta = usuariosGustosSimilares(favoritos,usuarios,user)
      let newState = {
        ...state
      }
      newState[`users${kind}`] = respuesta
      return newState
    }
    default: return state
  }
}

