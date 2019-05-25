const GET_EPISODES_REQUEST = 'GET_EPISODES_REQUEST'
const GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS'
const GET_EPISODES_FAIL = 'GET_EPISODES_FAIL'

const GET_MORE_EPISODES = 'GET_MORE_EPISODES'
const GET_MORE_EPISODES_SUCCESS = 'GET_MORE_EPISODES_SUCCESS'
const GET_MORE_EPISODES_FAIL = 'GET_MORE_EPISODES_FAIL'

export const getEpisodesRequest = () => ({ type: GET_EPISODES_REQUEST })

export const getEpisodesSuccess = (episodes, info) => ({
  type: GET_EPISODES_SUCCESS,
  payload: {
    episodes,
    info
  }
})

export const getEpisodesFail = (error) => ({
  type: GET_EPISODES_FAIL,
  payload: {
    error
  }
})
export const getMoreEpisodes = () => ({
  type: GET_MORE_EPISODES
})
export const getMoreEpisodesSuccess = (episodes, info) => ({
  type: GET_MORE_EPISODES_SUCCESS,
  payload: {
    episodes,
    info
  }
})
export const getMoreEpisodesFail = (error) => ({
  type: GET_MORE_EPISODES_FAIL,
  payload: {
    error
  }
})
const initialState = {
  entities: [],
  loading: false,
  maxPage: 2,
  currentPage: 1,
  nextPage: '',
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_EPISODES_SUCCESS: {
      const { next, pages } = action.payload.info
      console.log(action)
      return {
        ...state,
        loading: false,
        entities: [
          ...state.entities,
          ...action.payload.episodes
        ],
        nextPage: next,
        maxPage: pages
      }
    }

    case GET_EPISODES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    case GET_MORE_EPISODES: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_MORE_EPISODES_SUCCESS: {
      const { episodes: newEpisodes } = action.payload
      const { next } = action.payload.info

      const { entities } = state
      return {
        ...state,
        loading: false,
        entities: [...entities, ...newEpisodes],
        nextPage: next,
        currentPage: state.currentPage + 1
      }
    }
    case GET_MORE_EPISODES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }

    default: return state
  }
}
