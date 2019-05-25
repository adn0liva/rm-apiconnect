const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST'
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL'

const GET_MORE_CHARACTERS = 'GET_MORE_CHARACTERS'
const GET_MORE_CHARACTERS_SUCCESS = 'GET_MORE_CHARACTERS_SUCCESS'
const GET_MORE_CHARACTERS_FAIL = 'GET_MORE_CHARACTERS_FAIL'

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
const initialState = {
  entities: [],
  loading: false,
  maxPage: 25,
  currentPage: 1,
  nextPage: '',
  error: null
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
      return {
        ...state,
        loading: false,
        entities: [
          ...state.entities,
          ...action.payload.characters
        ],
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

    default: return state
  }
}