import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import repoStore from './repo-store'
import queryStore from './query-store'

export default createStore(combineReducers({
  repo: repoStore,
  query: queryStore
}), applyMiddleware(createLogger(), thunkMiddleware))
