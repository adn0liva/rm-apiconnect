import axios from 'axios'
import {
  getEpisodesRequest,
  getEpisodesSuccess,
  getEpisodesFail,
  getMoreEpisodes,
  getMoreEpisodesSuccess,
  getMoreEpisodesFail
} from './index'

const baseApiUrl = 'https://rickandmortyapi.com/api/episode/'

export const getEpisodes = () => {
  return async (dispatch, getState) => {
    dispatch(getEpisodesRequest())
    try {
      const response = await axios.get(baseApiUrl)
      dispatch(
        getEpisodesSuccess(response.data.results, response.data.info)
      )
    } catch (e) {
      const error = new Error(e)

      dispatch(getEpisodesFail(error.toString()))
    }
  }
}

export const loadMore = () => {
  return async (dispatch, getState) => {
    dispatch(getMoreEpisodes())
    const { nextPage: url } = getState().episodes
    try {
      const response = await axios.get(url)
      dispatch(
        getMoreEpisodesSuccess(response.data.results, response.data.info)
      )
    } catch (e) {
      const error = new Error(e)
      dispatch(getMoreEpisodesFail(error.toString()))
    }
  }
}
