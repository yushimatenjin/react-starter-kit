import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage
}

export default () => {
  const store = createStore(
    persistReducer(persistConfig, reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(thunk))
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
