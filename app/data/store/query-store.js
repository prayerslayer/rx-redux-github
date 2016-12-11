import { CHANGE_QUERY } from '../action/query-action'

const initialState = {
  query: 'react'
}
export default function repoStore(state = initialState, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return {
        query: action.query.length === 0 ? initialState.query : action.query
      }
    default:
      return state
  }
}
