const GET_EPISODES_REQUEST = 'GET_EPISODES_REQUEST'
const GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS'
const GET_EPISODES_FAIL = 'GET_EPISODES_FAIL'

const GET_MORE_EPISODES = 'GET_MORE_EPISODES'
const GET_MORE_EPISODES_SUCCESS = 'GET_MORE_EPISODES_SUCCESS'
const GET_MORE_EPISODES_FAIL = 'GET_MORE_EPISODES_FAIL'

const TOGGLE_EPISODE_TO_FAVORITE = 'TOGGLE_EPISODE_TO_FAVORITE'

export const toggleEpisodeToFavorite = (id, userId) => ({
  type: TOGGLE_EPISODE_TO_FAVORITE,
  payload: { id, userId }
})

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

const modifyFavorites = (list, userId, episodeId) => {
  let newFavorites = []
  if (list[userId].includes(episodeId)) {
    newFavorites = list[userId].filter(id_ => id_ !== episodeId)
  } else {
    newFavorites = [...list[userId], episodeId]
  }
  return {
    ...list,
    [userId]: newFavorites
  }
}
let localStorage = window.localStorage
let favoritesStored = JSON.parse(localStorage.getItem('favoritesEpisodes'))
// si no hay nada creo uno vacio
if (favoritesStored === null) {
  favoritesStored = {
    '1': [],
    '2': [],
    '3': []
  }
}
// const favArray = favoritesStored.split(',').filter(el => (el !== ''))
const initialState = {
  entities: [],
  loading: false,
  maxPage: 2,
  currentPage: 1,
  nextPage: '',
  error: null,
  favorites: favoritesStored
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
      // si ya tiene contenido, me estoy moviendo entre containers
      const newEntities = state.entities.length > 0 ? [...state.entities] : [
        ...state.entities,
        ...action.payload.episodes
      ]
      return {
        ...state,
        loading: false,
        entities: newEntities,
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
    case TOGGLE_EPISODE_TO_FAVORITE: {
      const newFavorites = modifyFavorites(state.favorites, action.payload.userId, action.payload.id.toString())
      localStorage.setItem('favoritesEpisodes', JSON.stringify(newFavorites))
      return {
        ...state,
        favorites: newFavorites

      }
    }
    default: return state
  }
}
