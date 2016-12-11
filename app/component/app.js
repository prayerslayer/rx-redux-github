import { h, Component } from 'preact'
import List from './list'
import { connect } from 'preact-redux'
import { resetRepos, fetchRepos } from '../data/action/repo-action'
import { changeQuery } from '../data/action/query-action'

export class App extends Component {
  render({state, onSearch}) {
    const {repos, loading, success} = state.repo
    let content = <List repos={repos} />
    if (!success) {
      content = <span>Could not load repos</span>
    }
    return <main style={{
        fontFamily: 'sans-serif'
      }}>
      <h1>Repositories</h1>
      {loading ? <span style={{
        position: 'fixed',
        bottom: 10,
        right: 10
      }}>Loading repositories...</span> : null}
      <div>
        Search: <input type="search" onChange={(evt) => onSearch(evt.target.value)} placeholder="react"/>
      </div>
      {content}
    </main>
  }
}
export default connect(state => state, dispatch => ({
  onSearch: (query) => {
    dispatch(resetRepos())
    dispatch(changeQuery(query))
    dispatch(fetchRepos(query))
  }
}))(App)
