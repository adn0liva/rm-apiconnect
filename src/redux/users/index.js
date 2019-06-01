const CHANGE_STATE_USER = 'CHANGE_STATE_USER'
const LOGIN_USER = 'LOGIN_USER'
// const FAKE_LOGIN = 'FAKE_LOGIN'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const changeStateUser = () => ({
  type: CHANGE_STATE_USER
})

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: { user }
})

export const loginSuccess = (userId) => ({
  type: LOGIN_SUCCESS,
  payload: { userId }
})

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: { error }
})

const initialState = {
  userLogged: false,
  user: {},
  entities: {
    '1': { name: 'adan', email: 'aoliva@binarybag.com', password: '123' },
    '2': { name: 'carlos', email: 'carlos@binarybag.com', password: '123' },
    '3': { name: 'diego', email: 'diego@binarybag.com', password: '123' },
  },
  userList: ['1','2','3'],
  userId: null,
  errorLogin: null
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
      const { user } = action.payload
      return {
        ...state,
        user,
        userLogged: true
      }
    }
    case LOGIN_SUCCESS: {
      const { userId } = action.payload
      const { entities } = state
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
    default: return state
  }
}
