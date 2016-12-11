import { h, render } from 'preact'
import store from './data/store'
import App from './component/app'
import observeScroll from './observable/scroll'
import observeStore from './observable/store'
import { fetchRepos } from './data/action/repo-action'
import { Provider } from 'preact-redux'

const storeObserver = observeStore({
  store
})

observeScroll()
  .distinct()
  .withLatestFrom(storeObserver, (_, state) => state)
  .filter(state => !state.repo.loading)
  .map(state => ({
    page: state.repo.nextPage,
    query: state.query.query
  }))
  .subscribe(({page, query}) => store.dispatch(fetchRepos(query, page)))

storeObserver.subscribe((state) => {
  const renderTarget = document.getElementById('app')
  render(<Provider store={store}>
      <App state={state} />
    </Provider>, renderTarget, renderTarget.lastChild)
})
store.dispatch(fetchRepos())
