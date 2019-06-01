import axios from 'axios'
import {
  loginSuccess,
  loginError
} from "./index";

// metodo que replaza la consulta a la api, todo esta comparación debería hacerla la api
export const fakeLogin = (user,state) => {
  const { entities: userEntities, userList } = state.users
  const userId = userList.find( uid => {
    return (
      userEntities[uid].email === user.email &&
      userEntities[uid].password === user.password
    )
  })
  return userId
}

export const realLogin = async (user) => {
  const baseApiUrl = 'http://190.215.33.13:1993/api/v1/user/search'
  const response = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    url: baseApiUrl,
    data: {email: user.email, password: user.password}
  })
  console.log(response)
}

export const login = ({ email, password }) => async (dispatch, getState) => {
  try {
    const userId = fakeLogin({ email, password }, getState())
    realLogin({ email, password })
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