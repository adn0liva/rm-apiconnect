const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST'
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL'

const GET_MORE_CHARACTERS = 'GET_MORE_CHARACTERS'
const GET_MORE_CHARACTERS_SUCCESS = 'GET_MORE_CHARACTERS_SUCCESS'
const GET_MORE_CHARACTERS_FAIL = 'GET_MORE_CHARACTERS_FAIL'
const TOGGLE_CHARACTER_TO_FAVORITE = 'TOGGLE_CHARACTER_TO_FAVORITE'

export const toggleCharacterToFavorite = (id, userId) => ({
  type: TOGGLE_CHARACTER_TO_FAVORITE,
  payload: { id, userId }
})

export const getCharactersRequest = () => ({ type: GET_CHARACTERS_REQUEST })

export const getCharactersSuccess = (characters, info) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: {
    characters,
    info
  }
})

export const getCharactersFail = (error) => ({
  type: GET_CHARACTERS_FAIL,
  payload: {
    error
  }
})
export const getMoreCharacters = () => ({
  type: GET_MORE_CHARACTERS
})
export const getMoreCharactersSuccess = (characters, info) => ({
  type: GET_MORE_CHARACTERS_SUCCESS,
  payload: {
    characters,
    info
  }
})
export const getMoreCharactersFail = (error) => ({
  type: GET_MORE_CHARACTERS_FAIL,
  payload: {
    error
  }
})
const modifyFavorites = (list, userId, charId) => {
  let newFavorites = []
  if (list[userId].includes(charId)) {
    newFavorites = list[userId].filter(id_ => id_ !== charId)
  } else {
    newFavorites = [...list[userId], charId]
  }
  return {
    ...list,
    [userId]: newFavorites
  }
}

let localStorage = window.localStorage
let favoritesStored = JSON.parse(localStorage.getItem('favoritesCharacters'))
// si no hay nada creo uno vacio
if (favoritesStored === null) {
  favoritesStored = {
    '1': [],
    '2': [],
    '3': []
  }
}
const initialState = {
  entities: [],
  loading: false,
  maxPage: 25,
  currentPage: 1,
  nextPage: '',
  error: null,
  favorites: favoritesStored
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_CHARACTERS_SUCCESS: {
      const { next, pages } = action.payload.info
      // si ya tiene contenido, me estoy moviendo entre containers
      const newEntities = state.entities.length > 0 ? [...state.entities] : [
        ...state.entities,
        ...action.payload.characters
      ]
      return {
        ...state,
        loading: false,
        entities: newEntities,
        nextPage: next,
        maxPage: pages
      }
    }
    case GET_CHARACTERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    case GET_MORE_CHARACTERS: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_MORE_CHARACTERS_SUCCESS: {
      const { characters: newCharacters } = action.payload
      const { next } = action.payload.info

      const { entities } = state
      return {
        ...state,
        loading: false,
        entities: [...entities, ...newCharacters],
        nextPage: next,
        currentPage: state.currentPage + 1
      }
    }
    case GET_MORE_CHARACTERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    case TOGGLE_CHARACTER_TO_FAVORITE: {
      const newFavorites = modifyFavorites(state.favorites, action.payload.userId, action.payload.id)
      localStorage.setItem('favoritesCharacters', JSON.stringify(newFavorites))
      return {
        ...state,
        favorites: newFavorites

      }
    }
    default: return state
  }
}
