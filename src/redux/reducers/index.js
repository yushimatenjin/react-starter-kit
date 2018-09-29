import todoReducer from '../todo/reducer'
import { combineReducers } from 'redux'
const reducers = combineReducers({
  todo: todoReducer
})
export default reducers
