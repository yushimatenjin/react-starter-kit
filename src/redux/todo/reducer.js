import actionTypes from './actionTypes'

const initialState = {
  title: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload]

    case actionTypes.REMOVE:
      return {
        ...state,
        todos: action.payload
      }

    case actionTypes.RESET:
      return []
    default:
      return state
  }
}
