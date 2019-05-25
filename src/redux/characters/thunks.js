import axios from "axios";
import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFail,
  getMoreCharacters,
  getMoreCharactersSuccess,
  getMoreCharactersFail
} from './index'

const baseApiUrl = 'https://rickandmortyapi.com/api/character/'

export const getCharacters = () => {
  return async (dispatch, getState) => {
    dispatch(getCharactersRequest())
    try {
      const response = await axios.get(baseApiUrl)
      dispatch(
        getCharactersSuccess(response.data.results, response.data.info)
      )
    } catch (e) {
      const error = new Error(e)

      dispatch(getCharactersFail(error.toString()))
    }
  }
}

export const loadMore = () => {
  return async (dispatch, getState) => {
    dispatch(getMoreCharacters())
    const { nextPage: url } = getState().characters
    try {
      const response = await axios.get(url)
      dispatch(
        getMoreCharactersSuccess(response.data.results, response.data.info)
      )
    } catch (e) {
      const error = new Error(e)
      dispatch(getMoreCharactersFail(error.toString()))
    }
  }
}
