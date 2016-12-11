export const LOAD_REPOS = "LOAD_REPOS"
export const RECEIVED_REPOS = "RECEIVED_REPOS"
export const RESET_REPOS = "RESET_REPOS"

function loadRepos(query = '') {
  return {
    type: LOAD_REPOS,
    success: null
  }
}

export function resetRepos() {
  return {
    type: RESET_REPOS
  }
}

function receivedRepos(success = true, repos = [], page = 1) {
  return {
    type: RECEIVED_REPOS,
    repos,
    success,
    page
  }
}

export function fetchRepos(query = 'react', page = 1) {
  return (dispatch) => {
    dispatch(loadRepos())
    return fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&page=${page}&per_page=50`)
      .then(resp => resp.ok ? resp.json() : Promise.reject())
      .then(resp => dispatch(receivedRepos(true, resp.items, page)))
      .catch(_ => dispatch(receivedRepos(false, [], page)))
  }
}
