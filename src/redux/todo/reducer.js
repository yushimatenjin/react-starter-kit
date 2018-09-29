import actionTypes from './actionTypes'

const initialState = {
  todos: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        todos: action.payload
      }

    case actionTypes.REMOVE:
      return {
        ...state,
        todos: action.payload
      }

    case actionTypes.RESET:
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}
