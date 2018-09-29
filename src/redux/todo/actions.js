import actionTypes from './actionTypes'

export const add = todo => {
  return { type: actionTypes.ADD, payload: todo }
}

export const remove = todo => {
  return { type: actionTypes.REMOVE, payload: todo }
}

export const reset = todo => {
  return { type: actionTypes.RESET, payload: todo }
}
