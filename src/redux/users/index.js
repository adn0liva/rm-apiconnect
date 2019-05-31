const CHANGE_STATE_USER = 'CHANGE_STATE_USER'
const LOGIN_USER = 'LOGIN_USER'

export const changeStateUser = () => ({
  type: CHANGE_STATE_USER
})

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: { user }
})

const initialState = {
  userLogged: false,
  user: {}
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
    default: return state
  }
}
