import { LOAD_REPOS, RECEIVED_REPOS, RESET_REPOS } from '../action/repo-action'

const initialState = {
  loading: false,
  nextPage: 2,
  success: true,
  repos: []
}
export default function repoStore(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return {
        repos: state.repos,
        loading: true,
        success: true,
        nextPage: state.page
      }
    case RESET_REPOS:
      return initialState
    case RECEIVED_REPOS:
      return {
        repos: [...state.repos, ...action.repos],
        loading: false,
        nextPage: action.page + 1,
        success: action.success
      }
    default:
      return state
  }
}
